import { createHash, randomBytes } from "node:crypto";

const { CRYPTOGRAPHIC_PEPPER = "P3pP3r" } = process.env;

export class CryptoService {
  public createHash(password: string, cryptographySalt: string) {
    const passwordWithSaltAndPepper =
      String(password) + cryptographySalt + CRYPTOGRAPHIC_PEPPER;
    return createHash("sha512").update(passwordWithSaltAndPepper).digest("hex");
  }

  public generateSalt() {
    return randomBytes(256).toString("hex");
  }
}
