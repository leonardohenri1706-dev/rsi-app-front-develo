import {
  MongoDbService,
  UserRepository,
  CryptoService,
  JwtService,
} from "../infra";
import { RegistrationUseCase } from "../applications";

export class RegistrationComposer {
  static async compose() {
    return new RegistrationUseCase(
      new UserRepository(await MongoDbService.getDb()),
      new CryptoService(),
      new JwtService()
    );
  }
}
