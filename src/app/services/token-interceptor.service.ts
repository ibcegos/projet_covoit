import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  refresh = false;

  constructor(private  inject:Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(AuthService);
    let authreq = request;
    authreq = this.AddTokenheader(request, authservice.GetToken());
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 403 && !this.refresh ) {
          this.refresh= true;

          // need to implement logout
          // authservice.Logout();
          // refresh token logic
          //return this.handleRefrehToken(request, next);

        }
        this.refresh= false;
        return throwError(errordata);
      })
    );

  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    let authservice = this.inject.get(AuthService);
    
    return authservice.GenereteRefreshToken().pipe(
      switchMap((data: any) => {
        authservice.SaveTokens(data);
        return next.handle(this.AddTokenheader(request,data.accessToken))
      }),
      catchError(errodata=>{
        authservice.Logout();
        return throwError(errodata)
      })
    );
  }

  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
  }



}

