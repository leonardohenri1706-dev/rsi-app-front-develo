import type { CryptoService, JwtService, UserRepository } from "../infra";
import type { LoginBody } from "../presentation/validators";

interface Return {
  token: string;
}

export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService
  ) {}

  public async execute(input: LoginBody): Promise<Return> {
    const { password, email } = input;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw {
        cause: "User with this email does not exist",
        type: "USER_DOES_NOT_EXIST",
        status: 404,
      };
    }

    const hashedPassword = this.cryptoService.createHash(
      password,
      user.cryptographic_salt
    );

    const isPasswordValid = hashedPassword === user.password;

    if (!isPasswordValid) {
      throw {
        cause: "Invalid password",
        type: "INVALID_PASSWORD",
        status: 401,
      };
    }

    const token = this.jwtService.generateToken({
      user_id: String(user._id),
      email: user.email,
    });
    return { token };
  }
}
