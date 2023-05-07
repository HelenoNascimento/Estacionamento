import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LoggedGuard } from 'src/guards/logged.guard';
import { NewAccountComponent } from './Auth/new-account/new-account.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'logged', loadChildren: () => import('./logged/logged.module').then((m) => m.LoggedModule), canActivate: [LoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
