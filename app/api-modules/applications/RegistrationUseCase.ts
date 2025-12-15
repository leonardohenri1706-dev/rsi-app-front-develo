import type { CryptoService, JwtService, UserRepository } from "../infra";
import type { RegistrationBody } from "../presentation/validators";
import type { User } from "../domain/entities";

interface Response extends Omit<User, "password" | "cryptographic_salt"> {
  token: string;
}

export class RegistrationUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService
  ) {}

  public async execute(input: RegistrationBody): Promise<Response> {
    const { password: unencryptedPassword, email, name } = input;

    const userWithEmailExists = await this.userRepository.findByEmail(email);

    if (userWithEmailExists) {
      throw {
        cause: "User with this email already exists",
        type: "USER_WITH_EMAIL_EXISTS",
        status: 400,
      };
    }

    const cryptographic_salt = this.cryptoService.generateSalt();
    const password = this.cryptoService.createHash(
      unencryptedPassword,
      cryptographic_salt
    );

    const intubation_experience =
      input.intubation_experience as User["intubation_experience"];

    const user = {
      intubation_experience,
      cryptographic_salt,
      password,
      email,
      name,
    } as User;
    await this.userRepository.create(user);
    const createdUser = await this.userRepository.findByEmail(email);

    if (!createdUser) throw new Error("User not created");

    const {
      cryptographic_salt: _,
      password: __,
      ...userWithoutPassword
    } = createdUser;

    const token = this.jwtService.generateToken({
      user_id: String(user._id),
      email: user.email,
    });

    return { ...userWithoutPassword, token };
  }
}
