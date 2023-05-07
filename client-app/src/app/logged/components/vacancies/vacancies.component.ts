import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { Vacancie } from 'src/interfaces/Vacancies';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  vacancies!: Vacancie[];
  vacancie!: Vacancie;
  showVacancies: boolean = false;
  FormEntry!: FormGroup;

  Title: string = "";

  isSubmitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private vacanciesService: VacanciesService
  ) {

  }
  ngOnInit(): void {
    this.getAllVacancies();
  }

  getAllVacancies(): void {
    this.Title = 'Todas as vagas';
    this.FormEntry = this.formBuilder.group({
      plate: ['', [Validators.required, Validators.minLength(7)]],
    });


    this.vacanciesService.getVacancies().subscribe(data => {
      this.vacancies = data;
      console.log(this.vacancies)
    })
  }

  get formPlate() {
    return this.FormEntry.get('plate');
  }



  showVacancie(vacancie: Vacancie) {
    this.showVacancies = true;
    if (this.vacancie?.number == vacancie?.number) {
      this.showVacancies = !this.showVacancies;
    }
    this.vacancie = vacancie

  }

  handleExit() {
    const data = {
      number: this.vacancie.number.toString()
    }
    // const number = this.vacancie.number.toString();
    this.vacanciesService.handleExit(data).subscribe(
      (response) => {
        console.log(response);
        this.getAllVacancies();
        this.showVacancies = false;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  handleAdd(){
    this.vacanciesService.handleAdd().subscribe(
      (response) => {
        console.log(response);
        this.getAllVacancies();
      },
      (error) => {
        console.log(error)
      }
    )
  }

  handleEntry() {
    this.isSubmitted = true;

    if (!this.FormEntry.hasError) {
      return
    } else {

      const data = {
        number: this.vacancie.number,
        plate: this.FormEntry.value.plate,

      }
      this.vacanciesService.handleEntry(data).subscribe(
        (response) => {
          console.log(response);
          this.getAllVacancies();
          this.showVacancies = false;
          this.isSubmitted = false;
          this.FormEntry.reset();
        },
        (error) => {
          console.log(error)
        }
      )
    }

  }


  showAvailable(){
    this.Title = 'Vagas Disponiveis'
    this.vacanciesService.showAvailable().subscribe(data => {
      this.vacancies = data;
      console.log(this.vacancies)
    })
  }
  showUnavailable(){
    this.Title = 'Vagas Indisponiveis'
    this.vacanciesService.showUnavailable().subscribe(data => {
      this.vacancies = data;
      console.log(this.vacancies)
    })
  }
}

