import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged.routing.module';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewClientComponent } from './components/client-data/new-client/new-client.component';

//import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
   ClientDataComponent,
   DashboardComponent,
   NewClientComponent
   //NavbarComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    HttpClientModule 
  ],
  providers: [
    ClientService
  ]
})
export class LoggedModule { }
