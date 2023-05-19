import { Injectable } from '@angular/core';
import * as UserEndpoints from '../user/user.endpoints'
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restApi: RestApiService) { }

  async getUser() {
    return  await this.restApi.get(UserEndpoints.USER_GET_USER_PROFILE_URL)
  }

}
