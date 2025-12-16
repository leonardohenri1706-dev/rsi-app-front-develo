import jwt from "jsonwebtoken";

const { JWT_SECRET = "S3cR3t" } = process.env;

interface JwtPayload {
  user_id: string;
  email: string;
}

export class JwtService {
  generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
  }

  verifyToken(token: string): JwtPayload {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  }
}
