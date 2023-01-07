import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { switchMap, tap } from 'rxjs/operators';

import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { addTokenHeader } from '../interceptors/add-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }
  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/api/auth/login`, {email, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }
  getProfile() { // el interceptor se encarga de añadir el token
    return this.http.get<User>(`${this.apiUrl}/api/auth/profile`, {context: addTokenHeader()});
  }
  loginAndGetProfile(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.getProfile())
    )
  }
}
