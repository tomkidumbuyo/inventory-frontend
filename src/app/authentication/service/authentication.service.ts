import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import * as AuthenticationTypes from '../authentication.types';
import * as AuthenticationEndpoints from '../authentication.endpoints';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: any = false;
  accessToken = false;

  constructor(public restApi: RestApiService, public router: Router) {
    const authDataString = localStorage.getItem(AuthenticationTypes.LOCAL_STORAGE_AUTH_DATA_KEY);
    const authData = authDataString ? JSON.parse(authDataString) : null;
    if (authData) {
      this.user = authData.user;
      this.accessToken = authData.accessToken;
    }
  }

  async getAuthStatus(): Promise<Boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const isAuthenticated = await this.restApi.get(AuthenticationEndpoints.AUTH_IS_AUTHENTICATED)
        resolve(true);
      } catch (error) {
        resolve(false);
      }
    });
  }

  register(
    email: string,
    password: string,
    verifyPassword: string,
    userAttributes: any = {}
  ) {
    return new Promise(async (resolve, reject) => {
      this.restApi
        .post(AuthenticationEndpoints.AUTH_REGISTER_URL, {
          password,
          email,
          verifyPassword: verifyPassword,
          userAttributes,
        })
        .then((data: any) => {
          resolve({ user: data });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.restApi
        .post(AuthenticationEndpoints.AUTH_LOGIN_URL, {
          username: email,
          password,
        })
        .then((data: any) => {
          this.user = data.user;
          this.accessToken = data.access_token;
          localStorage.setItem(
            AuthenticationTypes.LOCAL_STORAGE_AUTH_DATA_KEY,
            JSON.stringify({ user: data.user, accessToken: data.access_token })
          );
          resolve(this.user);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  logout() {
    localStorage.removeItem(AuthenticationTypes.LOCAL_STORAGE_AUTH_DATA_KEY);
    this.user = false;
    this.accessToken = false;
    this.router.navigate(['/authentication']);
  }

  getUser() {
    return this.user;
  }
}
