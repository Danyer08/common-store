import { HttpService } from 'src/infrastructure/services/http-service';
import { settings } from '../settings';

export class AuthService {
  constructor(private httpService: HttpService) {
    this.httpService = new HttpService();
  }

  signIn() {
    this.httpService.get(settings.baseUrl);
  }
}
