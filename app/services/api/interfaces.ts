export interface ApiError<T = any> {
  type: ApiError;
  status: number;
  cause: string;
}
