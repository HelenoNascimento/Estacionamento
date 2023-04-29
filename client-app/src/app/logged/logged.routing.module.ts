import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDataComponent } from './components/client-data/client-data.component';


const routes: Routes = [
  { path: 'client', component: ClientDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
