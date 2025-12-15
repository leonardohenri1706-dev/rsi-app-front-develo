import {
  MongoDbService,
  UserRepository,
  CryptoService,
  JwtService,
} from "../infra";
import { ResetPasswordUseCase } from "../applications";

export class ResetPasswordComposer {
  static async compose() {
    return new ResetPasswordUseCase(
      new UserRepository(await MongoDbService.getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
