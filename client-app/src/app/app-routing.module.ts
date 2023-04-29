import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logged', loadChildren: () => import('./logged/logged.module').then((m) => m.LoggedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
