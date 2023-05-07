import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vacancies: any;
  vacanciesAvailable: any;
  vacanciesUnavailable: any;
  constructor(
    private vacanciesService: VacanciesService
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
  }
}
