import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';

const AUTH_TOKEN = new HttpContextToken<boolean>(()=> false);

export function addTokenHeader() {
  return new HttpContext().set(AUTH_TOKEN, true);
}

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    return next.handle(request);
  }

  // this.http.get|post|put|delete(<CUALQUIER URL>, {context: addTokenHeader()})
  private addToken(request: HttpRequest<unknown>) {
    if(request.context.get(AUTH_TOKEN)) {
      const token = this.tokenService.getToken();
      if(token) {
        const authRequest = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
        });
        return authRequest;
      }
    }
    return request;
  }
}
