import type { NextRequest } from "next/server";

import {
  ForgotPasswordValidator,
  NextRouter,
} from "@/app/api-modules/presentation";
import { ForgotPasswordComposer } from "@/app/api-modules/composers";

export const POST = async (request: NextRequest) => {
  const useCase = await ForgotPasswordComposer.compose();
  const validator = new ForgotPasswordValidator();

  return new NextRouter(useCase, validator).route(request);
};
