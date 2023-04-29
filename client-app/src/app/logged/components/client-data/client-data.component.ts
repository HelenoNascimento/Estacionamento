import { Component, OnInit  } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {

  clients!: any[];
  constructor(private ClientService: ClientService){

  }

  ngOnInit(): void {
    this.ClientService.getClients().subscribe(data =>{
      this.clients =  data.clients;
      console.log(this.clients)
    })
  }
}
