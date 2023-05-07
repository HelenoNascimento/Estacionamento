import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/logged/services/client.service';
import { Client } from 'src/interfaces/Client';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  isEdited = false;
  client: any;
  formClient: FormGroup;
  isSubmitted = false;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formClient = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(12)]],
      plate: [''],
      telefone: [''],
      endereco: [''],
    });
  }

  idClient: string = '';

  ngOnInit(): void {
   this.loadClient();
  }

  get formCpf() {
    return this.formClient.get('cpf');
  }
  editar() {
    this.isEdited = !this.isEdited;
  }

  loadClient(){
    this.route.params.subscribe(params => {
      this.idClient = params['id'];
      console.log(this.idClient);
    });

    this.clientService.getClient(this.idClient).subscribe(
      (response) => {
        console.log(response);
        this.client = response;
        this.formClient.setValue({
          name: this.client.client.name,
          email: this.client.client.email,
          cpf: this.client.client.cpf,
          plate: this.client.client.plate,
          telefone: this.client.client.telefone,
          endereco: this.client.client.endereco,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  salvar() {
    console.log(this.formClient)
    this.isSubmitted = true;

    if (!this.formClient.valid) {
      return;
    } else {
      const data = {
        _id:! '',
        name: this.formClient.value.name,
        email: this.formClient.value.email,
        cpf: this.formClient.value.cpf,
        plate: this.formClient.value.plate,
        telefone: this.formClient.value.telefone,
        endereco: this.formClient.value.endereco,
      };

      this.clientService.updateClient(this.idClient, data).subscribe(
        (response) => {
          console.log(response);
          this.isEdited = false;
          this.loadClient();
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }
}
