import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/services/auth.service';
@Injectable({
    providedIn: 'root',
})

export class LoggedGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private readonly router: Router,
    ) {}

    async canActivate() {
        const isValid = this.authService.isLoggedIn();
        if(!isValid){
            this.router.navigate(['']);
            return false;
        }
        
        return true;
    }
}
