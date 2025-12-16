import {
  SendMailService,
  MongoDbService,
  UserRepository,
  JwtService,
} from "../infra";
import { ForgotPasswordUseCase } from "../applications";

export class ForgotPasswordComposer {
  static async compose() {
    return new ForgotPasswordUseCase(
      new UserRepository(await MongoDbService.getDb()),
      new SendMailService(),
      new JwtService()
    );
  }
}
