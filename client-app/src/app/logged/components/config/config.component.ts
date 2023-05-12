import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { Parking } from 'src/interfaces/Parking';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent  implements OnInit {

  parking!: Parking

  constructor(
   private parkingService: ParkingService
  ){

  }

  ngOnInit(): void {
     this.loadConfig()
  }

  loadConfig(){
    this.parkingService.getParkingDetails().subscribe(data =>{
      this.parking = data.parking;
      console.log(this.parking);
    })
  }

}
