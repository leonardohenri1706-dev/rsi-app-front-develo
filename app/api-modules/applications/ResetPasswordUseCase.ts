import { User } from "../domain/entities";
import type { CryptoService, JwtService, UserRepository } from "../infra";
import type { ResetPasswordBody } from "../presentation/validators";

interface Return {
  message: string;
}

export class ResetPasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService,
    private readonly JwtService: JwtService
  ) {}

  public async execute(input: ResetPasswordBody): Promise<Return> {
    const { token, password: uncryptedNewPassword } = input;

    const tokenData = this.JwtService.verifyToken(token);

    const user = await this.userRepository.findByEmail(tokenData.email);

    if (!user) {
      throw {
        cause: "User with this email does not exist",
        type: "USER_DOES_NOT_EXIST",
        status: 404,
      };
    }

    const cryptographic_salt = this.cryptoService.generateSalt();
    const password = this.cryptoService.createHash(
      uncryptedNewPassword,
      cryptographic_salt
    );

    const data: Partial<User> = { password, cryptographic_salt };

    await this.userRepository.update(user._id, data);

    return { message: "Password successfully updated!" };
  }
}
