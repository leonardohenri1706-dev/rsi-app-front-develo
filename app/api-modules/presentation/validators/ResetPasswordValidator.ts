import { z } from "zod";

import { Validator } from "../routers";

const bodyValidation = z.object({
  password: z.string(),
  token: z.string(),
});

export type ResetPasswordBody = z.infer<typeof bodyValidation>;

export class ResetPasswordValidator implements Validator {
  public validate(body: ResetPasswordBody) {
    const parsed = bodyValidation.safeParse(body);
    if (!parsed.success) throw parsed.error;
  }
}
