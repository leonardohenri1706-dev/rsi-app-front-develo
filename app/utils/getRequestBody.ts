import { NextRequest } from "next/server";

export const getRequestBody = async <T = any>(
  request: NextRequest
): Promise<T | null> => {
  if (!request.body?.getReader) return null;
  const bodyReader = request.body.getReader();

  if (!bodyReader?.read) return null;
  const bodyStreamResult = await bodyReader?.read();

  if (!bodyStreamResult?.value) return null;

  const bodyJSON = new TextDecoder().decode(bodyStreamResult.value);

  return JSON.parse(bodyJSON);
};
