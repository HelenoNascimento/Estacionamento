import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Parking } from 'src/interfaces/Parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(
    private http: HttpClient
  ) { }

  private token = localStorage.getItem('token');
  private baseUrl = 'http://localhost:4000/';

  private httpOption ={
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  }
  
  getParkingDetails(): Observable <any>{
    console.log('teste')
    return this.http.get<any>(this.baseUrl)

    // getClient(id: string): Observable <Client[]>{
    //   return this.http.get<Client[]>(this.url+"/"+id, this.httpOptions);
    // }

  }

  // getUsers(): Observable <User>{
  //   return this.http.get<any>(this.url + '/auth/user',this.httpOptions).pipe(
  //     map(response => response.users?.map((user: User) => ({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email
  //     })))
  //   )
 // }//

 

}
