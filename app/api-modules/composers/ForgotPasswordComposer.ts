import {
  SendMailService,
  UserRepository,
  JwtService,
} from "../infra";
import { ForgotPasswordUseCase } from "../applications";

export class ForgotPasswordComposer {
  static async compose() {
    return new ForgotPasswordUseCase(
      new UserRepository(),
      new SendMailService(),
      new JwtService()
    );
  }
}
