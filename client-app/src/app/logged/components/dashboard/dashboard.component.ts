import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vacancies: any;
  vacanciesAvailable: any;
  vacanciesUnavailable: any;
  clients: any;

  constructor(
    private vacanciesService: VacanciesService,
    private clientService: ClientService
  ){

  }


  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void{
    this.vacanciesService.getVacancies().subscribe(data => {
      this.vacancies = data.length;  
    })
    this.vacanciesService.showAvailable().subscribe(data => {
      this.vacanciesAvailable = data.length;    
    })
    this.vacanciesService.showUnavailable().subscribe(data => {
      this.vacanciesUnavailable = data.length;  
    })
    this.clientService.getClients().subscribe(data =>{
      this.clients =  data.clients.length;
     
    })
  }
}
