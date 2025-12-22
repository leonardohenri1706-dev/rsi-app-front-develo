import {
  UserRepository,
  CryptoService,
  JwtService,
} from "../infra";
import { LoginUseCase } from "../applications";

export class LoginComposer {
  static async compose() {
    return new LoginUseCase(
      new UserRepository(),
      new CryptoService(),
      new JwtService()
    );
  }
}
