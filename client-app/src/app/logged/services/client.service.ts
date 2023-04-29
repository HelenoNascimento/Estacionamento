import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {


  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDlhNzBiODhhZmJlOGMzMjViYjAyZSIsImVtYWlsIjoidGVzdGUyQHRlc3RlLmNvbSIsImlhdCI6MTY4Mjc4MTU0OCwiZXhwIjoxNjgyNzg1MTQ4fQ.hgDs7F8hTFKhRB2fmm7inupydVQgJTj46MGIDBs46IE';
  private url ='http://localhost:4000/auth/client'
  private httoOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }

  constructor(private http: HttpClient) 
  { }

  getClients(): Observable <any> {
    return this.http.get(this.url, this.httoOptions)
  }
}
