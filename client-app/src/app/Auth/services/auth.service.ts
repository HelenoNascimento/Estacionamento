import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/';
 

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    console.log('login', email, password);
    return this.http.post<LoginResponse>(this.baseUrl+ 'singnin',{email, password} )
    .pipe(
      tap(response => localStorage.setItem('token', response.token)),
      catchError(error => throwError(error))
    );
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    if(token){
      if(token === undefined){
        return false;
      }
      if(token?.length > 15){
        return true
      }
    }
    return false;
   // return !!localStorage.getItem('token');
  
}

}
