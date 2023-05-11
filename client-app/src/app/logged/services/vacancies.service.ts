import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Vacancie } from 'src/interfaces/Vacancies';
@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  private token = localStorage.getItem('token');
  private url = 'http://localhost:4000';
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  

  constructor(
    private http: HttpClient
  ) { }


  handleEntry(data: any){
    return this.http.put(this.url + '/vaga/entry',data,this.httpOptions);
  }
  handleExit(data: any){
    console.log(data);
    return this.http.put(this.url + '/vaga/exit',data,this.httpOptions)
  }
  showAvailable(){
    return this.http.get<any>(this.url + '/vagas/disponiveis', this.httpOptions).pipe(
      map(response => response.Vagas?.map((Vagas: Vacancie) => ({
        _id: Vagas._id,
        number: Vagas.number,
        type: Vagas.type,
        available: Vagas.available,
        occupied_by: Vagas.occupied_by,
        parking: Vagas.parking,
        //mapeie outras propriedades aqui, se houver
      })))
    );
  }

  handleAdd(){
    const data = '';
    return this.http.post(this.url + '/vaga/add-auto',data,this.httpOptions);
  }

  showUnavailable(){
    return this.http.get<any>(this.url + '/vagas/indisponiveis', this.httpOptions).pipe(
      map(response => response.Vagas?.map((Vagas: Vacancie) => ({
        _id: Vagas._id,
        number: Vagas.number,
        type: Vagas.type,
        available: Vagas.available,
        occupied_by: Vagas.occupied_by,
        parking: Vagas.parking,
        //mapeie outras propriedades aqui, se houver
      })))
    );
  }

  // newClients(name: string, email: string, cpf: number, plate: string, telefone: string, endereco: string ): Observable <Client>{
  //   const data = {
  //     name: name,
  //     email: email,
  //     cpf: cpf,
  //     plate: plate,
  //     telefone: telefone,
  //     endereco: endereco
  //   };
  //   return this.http.post<Client>(this.url + '/new', data, this.httpOptions);
  // }

  // getVacancie(): Observable <Vacancie[]>{
  //   return this.http.get<Vacancie[]>(this.url+'/vagas',this.httpOptions);
  // }
  
  // getVacancies(): Observable<Vacancie[]> {
  //   return this.http.get<Vacancie[]>(this.url+'/vagas', this.httpOptions)
  //     .pipe(
  //       map(response => response as Vacancie[])
  //     );
  // }

  // getVacancies() {
  //   return this.http.get<Vacancy[]>(this.vacanciesUrl).pipe(
  //     map(response => response.map(vacancy => new Vacancy(vacancy)))
  //   );
  // }
  // getVacancies(): Observable<Vacancie[]> {
  //   return this.http.get<any>(this.url + '/vagas', this.httpOptions).pipe(
  //     map(response => response.data.map((Vagas: Vacancie) => ({
  //       _id: Vagas._id,
  //       number: Vagas.number,
  //       type: Vagas.type,
  //       available: Vagas.available,
  //       occupied_by: Vagas.occupied_by,
  //       parking: Vagas.parking,
  //       //mapeie outras propriedades aqui, se houver
  //     })))
  //   );
  // }
  getVacancies(): Observable<Vacancie[]> {
    return this.http.get<any>(this.url + '/vagas', this.httpOptions).pipe(
      map(response => response.Vagas?.map((Vagas: Vacancie) => ({
        _id: Vagas._id,
        number: Vagas.number,
        type: Vagas.type,
        available: Vagas.available,
        occupied_by: Vagas.occupied_by,
        parking: Vagas.parking,
        //mapeie outras propriedades aqui, se houver
      })))
    );
  }
  
}




