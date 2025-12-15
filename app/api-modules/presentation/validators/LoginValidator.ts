import { z } from "zod";

import { Validator } from "../routers";

const bodyValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginBody = z.infer<typeof bodyValidation>;

export class LoginValidator implements Validator {
  public validate(body: LoginBody) {
    const parsed = bodyValidation.safeParse(body);
    if (!parsed.success) throw parsed.error;
  }
}
