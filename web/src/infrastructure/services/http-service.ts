import { Http } from 'src/core/contracts/http';
import { HttpResponse } from 'src/core/models/http-response';

export class HttpService implements Http {
  get<T>(url: string): Promise<HttpResponse<T>> {
    throw new Error('Method not implemented.');
  }
  post<T>(url: string): Promise<HttpResponse<T>> {
    throw new Error('Method not implemented.');
  }
  put<T>(url: string): Promise<HttpResponse<T>> {
    throw new Error('Method not implemented.');
  }
  delete<T>(url: string): Promise<HttpResponse<T>> {
    throw new Error('Method not implemented.');
  }
}
