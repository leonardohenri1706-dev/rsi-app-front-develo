import type { NextRequest } from "next/server";

import {
  RegistrationValidator,
  NextRouter,
} from "@/app/api-modules/presentation";
import { RegistrationComposer } from "@/app/api-modules/composers";

export const POST = async (request: NextRequest) => {
  const useCase = await RegistrationComposer.compose();
  const validator = new RegistrationValidator();

  return new NextRouter(useCase, validator).route(request);
};
