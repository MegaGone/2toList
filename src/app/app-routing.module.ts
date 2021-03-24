import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/guard.guard';

import { LoginComponent } from './pages/login/login.component';
import { PendingsComponent } from './pages/pendings/pendings.component';
import { FinishedComponent } from './pages/finished/finished.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pendings', component: PendingsComponent, canActivate: [GuardGuard] },
  { path: 'finished', component: FinishedComponent, canActivate: [GuardGuard] },
  { path: 'list/:id', component: ListComponent, canActivate: [GuardGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
