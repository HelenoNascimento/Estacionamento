import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit{
  isSubmitted = false;
  errorMessage = '';

  newAccontForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ){

  }

  ngOnInit(): void {
     this.newAccontForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get ForName(){
    return this.newAccontForm.get('name');
  }
  get formEmail(){
    return this.newAccontForm.get('email');
  }
  get formPassword(){
    return this.newAccontForm.get('password');
  }

  newAccont(){
    this.isSubmitted = true;
    const name = (this.newAccontForm.get('name') as FormControl).value;
    const email = (this.newAccontForm.get('email') as FormControl).value;
    const password = (this.newAccontForm.get('password') as FormControl).value;

    if (!this.newAccontForm.valid) {
      return;
  } else {
      this.authService.newAccont(name,email, password).subscribe(
          (response) => {
              console.log(response);
              console.log("entrou")
              this.router.navigate(['logged/client']);
          },
          (error) => {
            this.errorMessage = error.error;
              console.log(error.erro)
          }
      );
  }

  }


}
