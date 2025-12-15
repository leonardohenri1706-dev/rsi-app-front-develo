import { z } from "zod";

import { Validator } from "../routers";

const bodyValidation = z.object({ email: z.string().email() });

export type ForgotPasswordBody = z.infer<typeof bodyValidation>;

export class ForgotPasswordValidator implements Validator {
  public validate(body: ForgotPasswordBody) {
    const parsed = bodyValidation.safeParse(body);
    if (!parsed.success) throw parsed.error;
  }
}
