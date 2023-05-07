import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isSubmitted = false;
  errorMessage = '';
  loginForm!:  FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.isSubmitted = true;
    const email = (this.loginForm.get('email') as FormControl).value;
    const password = (this.loginForm.get('password') as FormControl).value;

    if (!this.loginForm.valid) {
      return;
  } else {
      this.authService.login(email, password).subscribe(
          (response) => {
              console.log(response);
              console.log("entrou")
              this.router.navigate(['logged/dashboard']);
          },
          (error) => {
            this.errorMessage = error.error;
              console.log(error.erro)
          }
      );
  }
}

  get formEmail(){
    return this.loginForm.get('email');
  }
  get formPassword(){
    return this.loginForm.get('password');
  }

  
}
