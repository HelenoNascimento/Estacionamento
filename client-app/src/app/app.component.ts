import { Component, OnInit } from '@angular/core';
import { AuthService } from './Auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
ngOnInit(): void {
  
}

isLoginPage(): boolean {
  return this.router.url === '/' || this.router.url === '/new-account';
}
checkLogged(){
  return this.authService.isLoggedIn();
}

  title = 'client-app';
}
