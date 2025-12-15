import type { NextRequest } from "next/server";

import { LoginValidator, NextRouter } from "@/app/api-modules/presentation";
import { LoginComposer } from "@/app/api-modules/composers";

export const POST = async (request: NextRequest) => {
  const useCase = await LoginComposer.compose();
  const validator = new LoginValidator();

  return new NextRouter(useCase, validator).route(request);
};
