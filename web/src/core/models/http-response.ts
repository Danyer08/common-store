export interface HttpResponse<T> {
  statusCode: string;
  response: T;
  success: boolean;
}
