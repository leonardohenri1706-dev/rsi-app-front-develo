export enum IntubationExperience {
  MORE_THAN_50 = "more_than_50",
  BETWEEN_20_AND_50 = "between_20_and_50",
  LESS_THAN_20 = "less_than_20",
}

export interface User {
  readonly _id: number;
  email: string;
  password: string;
  name: string;
  intubation_experience: IntubationExperience;
  cryptographic_salt: string;
  //   readonly createdAt: Date;
  //   readonly updatedAt: Date;
}
