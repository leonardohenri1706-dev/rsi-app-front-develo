import type { SendMailService, JwtService, UserRepository } from "../infra";
import type { ForgotPasswordBody } from "../presentation/validators";

const { BASE_URL = "https://rsi-app-seven.vercel.app/" } = process.env;

interface Return {
  message: string;
}

export class ForgotPasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sendMailService: SendMailService,
    private readonly JwtService: JwtService
  ) {}

  public async execute(input: ForgotPasswordBody): Promise<Return> {
    const { email } = input;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw {
        cause: "User with this email does not exist",
        type: "USER_DOES_NOT_EXIST",
        status: 404,
      };
    }

    const token = this.JwtService.generateToken({
      user_id: String(user._id),
      email: user.email,
    });

    const link = `${BASE_URL}/new-password?token=${token}`;

    const html = `
      <p>Clique <a href="${link}">aqui</a> para resetar sua senha do rsi-app.</p>
      </br>
      <p>Se você não solicitou a alteração de senha, ignore este e-mail.</p>
    `;

    await this.sendMailService.sendMail(email, "Resetar senha do RSIapp", html);

    return { message: "E-mail to reset password sent!" };
  }
}
