import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(   
    private http: HttpClient
    ) { }

  private token = localStorage.getItem('token');
  private url = 'http://localhost:4000';
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }

  getUsers(): Observable <User>{
    return this.http.get<any>(this.url + '/auth/user',this.httpOptions).pipe(
      map(response => response.users?.map((user: User) => ({
        _id: user._id,
        name: user.name,
        email: user.email
      })))
    )
  }

  // getClients(): Observable <any> {
  //   return this.http.get(this.url, this.httpOptions)
  // }

  // return this.http.get<any>(this.url + '/vagas/disponiveis', this.httpOptions).pipe(
  //   map(response => response.Vagas?.map((Vagas: Vacancie) => ({
  //     _id: Vagas._id,
  //     number: Vagas.number,
  //     type: Vagas.type,
  //     available: Vagas.available,
  //     occupied_by: Vagas.occupied_by,
  //     parking: Vagas.parking,
  //     //mapeie outras propriedades aqui, se houver
  //   })))
  // );

 
}
