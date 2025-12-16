import type { NextRequest } from "next/server";

import {
  ResetPasswordValidator,
  NextRouter,
} from "@/app/api-modules/presentation";
import { ResetPasswordComposer } from "@/app/api-modules/composers";

export const POST = async (request: NextRequest) => {
  const useCase = await ResetPasswordComposer.compose();
  const validator = new ResetPasswordValidator();

  return new NextRouter(useCase, validator).route(request);
};
