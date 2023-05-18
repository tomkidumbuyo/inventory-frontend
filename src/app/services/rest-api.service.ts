import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as AuthenticationTypes from '../authentication/authentication.types';

declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class RestApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAuthorizedRequestHeader() {
    const authDataString = localStorage.getItem(
      AuthenticationTypes.LOCAL_STORAGE_AUTH_DATA_KEY
    );
    const authData = authDataString ? JSON.parse(authDataString) : null;
    if (authData && authData !== 'null') {
      return  {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${authData.accessToken}`,
        }),
      };
    }
    return this.httpOptions
  }

  get(url: string) {
    return new Promise(async (resolve, reject) => {
      this.httpClient
        .get<any>(environment.backendUrl + url, this.getAuthorizedRequestHeader())
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => {
            this.handleError(error, reject);
          }
        );
    });
  }

  post(url: string, data: any) {
    return new Promise(async (resolve, reject) => {
      this.httpClient
        .post<any>(
          environment.backendUrl + url,
          $.param(data),
          this.getAuthorizedRequestHeader()
        )
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => {
            this.handleError(error, reject);
          }
        );
    });
  }

  put(url: string, data: any) {
    return new Promise(async (resolve, reject) => {
      this.httpClient
        .put<any>(
          environment.backendUrl + url,
          $.param(data),
          this.getAuthorizedRequestHeader()
        )
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => {
            this.handleError(error, reject);
          }
        );
    });
  }

  delete(url: string) {
    return new Promise(async (resolve, reject) => {
      this.httpClient
        .delete<any>(environment.backendUrl + url, this.getAuthorizedRequestHeader())
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => {
            this.handleError(error, reject);
          }
        );
    });
  }

  handleError(error: any, reject: any) {
    reject(error);
  }

}
