import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecogerTokenService implements HttpInterceptor {
  
  constructor(
    private authService : AuthService
  ) { 

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizereq = req.clone({
      setHeaders : {
        Authorizaction : `Bearer ${this.authService.getToken()}`

      }
    })
    return next.handle(tokenizereq)
  }
  
}
