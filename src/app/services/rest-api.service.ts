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

  authHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private http: HttpClient) {
    const authDataString = localStorage.getItem(
      AuthenticationTypes.LOCAL_STORAGE_AUTH_DATA_KEY
    );
    const authData = authDataString ? JSON.parse(authDataString) : null;
    if (authData && authData !== 'null') {
      this.authHttpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + authData.accessToken,
        }),
      };
    }
  }

  get(url: string) {
    return new Promise(async (resolve, reject) => {
      this.http
        .get<any>(environment.backendUrl + url, this.httpOptions)
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  getAuth(url: string) {
    return new Promise(async (resolve, reject) => {
      this.http
        .get<any>(environment.backendUrl + url, this.authHttpOptions)
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  post(url: string, data: any) {
    console.log(environment.backendUrl + url);

    return new Promise(async (resolve, reject) => {
      this.http
        .post<any>(
          environment.backendUrl + url,
          $.param(data),
          this.httpOptions
        )
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  postAuth(url: string, data: any) {
    return new Promise(async (resolve, reject) => {
      this.http
        .post<any>(
          environment.backendUrl + url,
          $.param(data),
          this.authHttpOptions
        )
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  put(url: string, data: any) {
    return new Promise(async (resolve, reject) => {
      this.http
        .put<any>(environment.backendUrl + url, $.param(data), this.httpOptions)
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  putAuth(url: string, data: any) {
    return new Promise(async (resolve, reject) => {
      this.http
        .put<any>(
          environment.backendUrl + url,
          $.param(data),
          this.authHttpOptions
        )
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  delete(url: string) {
    return new Promise(async (resolve, reject) => {
      this.http
        .delete<any>(environment.backendUrl + url, this.httpOptions)
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  deleteAuth(url: string) {
    return new Promise(async (resolve, reject) => {
      this.http
        .delete<any>(environment.backendUrl + url, this.authHttpOptions)
        .pipe(retry(1))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            this.handleError(err, reject);
          }
        );
    });
  }

  handleError(error: any, reject: any) {
    reject(error);
  }
}
