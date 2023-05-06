import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {


  token = localStorage.getItem('token');

  private url ='http://localhost:4000/auth/client'
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }

  constructor(private http: HttpClient) 
  { }

  getClients(): Observable <any> {
    return this.http.get(this.url, this.httpOptions)
  }

  getClient(id: string): Observable <any>{
    return this.http.get(this.url+"/"+id, this.httpOptions);
  }
  newClients(name: string, email: string, cpf: number, plate: string, telefone: string, endereco: string ): Observable <any>{
    const data = {
      name: name,
      email: email,
      cpf: cpf,
      plate: plate,
      telefone: telefone,
      endereco: endereco
    };
    return this.http.post<any>(this.url + '/new', data, this.httpOptions);
  }

  updateClient(idClient: string, data: any): Observable <any>{
      return this.http.put<any>(this.url + '/edit/' + idClient, data, this.httpOptions);
  }
}
