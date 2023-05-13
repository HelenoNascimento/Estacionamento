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
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(12)]],
      plate: [ '',[Validators.required]],
      telefone: [''],
      endereco: [''],


    });

  }
  ngOnInit(): void {
    
  }
  get formCpf() {
    return this.formClient.get('cpf');
  }
  get formName(){
    return this.formClient.get('name');
  }
  get formPlate(){
    return this.formClient.get('plate');
  }
  
  newClient(){
    console.log(this.formClient);
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
