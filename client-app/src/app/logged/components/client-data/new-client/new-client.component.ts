import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/logged/services/client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit{

  formClient!: FormGroup;
  isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService
  ){
    this.formClient = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      plate: [ '' ],
      telefone: [''],
      endereco: [''],


    });

  }
  ngOnInit(): void {
    
  }

  newClient(){
    this.isSubmitted = true;
    const name = (this.formClient.get('name') as FormControl).value;
    const email = (this.formClient.get('email') as FormControl).value;
    const cpf = parseInt((this.formClient.get('cpf') as FormControl).value);
    const plate = (this.formClient.get('plate') as FormControl).value;
    const telefone = (this.formClient.get('telefone') as FormControl).value;
    const endereco = (this.formClient.get('endereco') as FormControl).value;

    if (!this.formClient.valid) {
      return;
    }else{
      this.clientService.newClients(name,email,cpf,plate,telefone,endereco).subscribe(
        (response) =>{
          console.log(response);
          this.router.navigate(['logged/client']);
        },
        (error) =>{        
          console.log(error);
        }
      )
    }
  // this.authService.newAccont(name,email, password).subscribe(
  //         (response) => {
  //             console.log(response);
  //             console.log("entrou")
  //             this.router.navigate(['logged/client']);
  //         },
  //         (error) => {
  //           this.errorMessage = error.error;
  //             console.log(error.erro)
  //         }
  //     );
    console.log(this.formClient.value)
  }


}
