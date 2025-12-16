import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getRequestBody } from "@/app/utils/getRequestBody";

const { NEXT_PUBLIC_API_AUTHENTICATION: authToken = "" } = process.env;

interface UseCase {
  execute: (input: any) => Promise<any>;
}

export interface Validator {
  validate: (input: any) => void;
}

export class NextRouter {
  constructor(
    private readonly useCase: UseCase,
    private readonly validator?: Validator
  ) {}

  public async route(request: NextRequest) {
    try {
      const authorization = request.headers.get("authorization");

      const token = authorization?.replace("Bearer ", "");
      const isTokenValid = token && token === authToken;

      if (!isTokenValid) {
        throw {
          cause: "Invalid authorization",
          type: "UNAUTHORIZED",
          status: 401,
        };
      }

      const body = await getRequestBody(request);

      if (this.validator) this.validator.validate(body);

      const result = await this.useCase.execute(body);

      return NextResponse.json(result, { status: 200 });
    } catch (err) {
      const error = err as Error;
      const errorWithStatus = err as { status: number };
      const { status = 500 } = errorWithStatus;

      return NextResponse.json(error, { status });
    }
  }
}
