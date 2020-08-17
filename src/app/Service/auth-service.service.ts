import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginPayload } from '../Model/LoginPyload';
import { JwtAuthResponce } from './../Model/JwtAuthResponce';
import { RegisterPayload } from './../Model/RegisterPyload';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private url = 'http://localhost:8080/api/auth/';
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  getCurrentUser(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/auth/current/user');
  }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }
  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient
      .post<JwtAuthResponce>(this.url + 'login', loginPayload)
      .pipe(
        map((data) => {
          this.localStorageService.store(
            'authenticationToken',
            data.authenticationToken
          );
          this.localStorageService.store('username', data.username);
          return true;
        })
      );
  }

  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}
