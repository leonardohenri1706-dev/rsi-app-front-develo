import {
  MongoDbService,
  UserRepository,
  CryptoService,
  JwtService,
} from "../infra";
import { LoginUseCase } from "../applications";

export class LoginComposer {
  static async compose() {
    return new LoginUseCase(
      new UserRepository(await MongoDbService.getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
