import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(
    private router: Router,
    private authService: AuthService,
  ){

  }
  ngOnInit(): void {
    
  }

  loggout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  checkLogged(){
    return this.authService.isLoggedIn();
  }
}
