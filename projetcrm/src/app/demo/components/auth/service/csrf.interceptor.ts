import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const csrfToken = this.cookieService.get('XSRF-TOKEN');
        if (csrfToken) {
            request = request.clone({
                setHeaders: {
                    'X-XSRF-TOKEN': csrfToken
                }
            });
        }
        return next.handle(request);
    }
}
