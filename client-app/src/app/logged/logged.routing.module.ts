import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewClientComponent } from './components/client-data/new-client/new-client.component';
import { ClientInfoComponent } from './components/client-data/client-info/client-info.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { UserComponent } from './components/user/user.component';
import { ConfigComponent } from './components/config/config.component';


const routes: Routes = [
  { path: 'client', component: ClientDataComponent },
  { path: 'client/:id', component: ClientInfoComponent },
  { path: 'newclient', component: NewClientComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'users', component: UserComponent},
  { path: 'config', component: ConfigComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
