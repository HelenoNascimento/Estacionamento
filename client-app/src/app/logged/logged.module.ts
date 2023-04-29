import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged.routing.module';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';


@NgModule({
  declarations: [
   ClientDataComponent
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
