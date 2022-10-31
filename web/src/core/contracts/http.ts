import { HttpResponse } from '../models/http-response';

export interface Http {
  get<T>(url: string): Promise<HttpResponse<T>>;
  post<T>(url: string): Promise<HttpResponse<T>>;
  put<T>(url: string): Promise<HttpResponse<T>>;
  delete<T>(url: string): Promise<HttpResponse<T>>;
}
