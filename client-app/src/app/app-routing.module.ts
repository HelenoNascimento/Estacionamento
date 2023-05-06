import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LoggedGuard } from 'src/guards/logged.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logged', loadChildren: () => import('./logged/logged.module').then((m) => m.LoggedModule), canActivate: [LoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
