import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!: any
    
  constructor(
   private userService: UserService,
  ){}

  ngOnInit(): void {
    this.loadUser();
  }
 
  loadUser(): void {
    this.userService.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }


//   this.vacanciesService.getVacancies().subscribe(data => {
//     this.vacancies = data;
//     console.log(this.vacancies)
//   })
// }

}
