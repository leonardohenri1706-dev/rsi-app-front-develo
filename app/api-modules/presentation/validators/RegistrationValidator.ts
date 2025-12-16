import { z } from "zod";
import { IntubationExperience } from "../../domain/entities/User";

import { Validator } from "../routers";

const intubationExperienceEnum = Object.values(IntubationExperience).map(
  (value) => String(value)
);

const bodyValidation = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  intubation_experience: z.enum([
    intubationExperienceEnum[0],
    ...intubationExperienceEnum,
  ]),
});

export type RegistrationBody = z.infer<typeof bodyValidation>;

export class RegistrationValidator implements Validator {
  public validate(body: RegistrationBody) {
    const parsed = bodyValidation.safeParse(body);
    if (!parsed.success) throw parsed.error;
  }
}
