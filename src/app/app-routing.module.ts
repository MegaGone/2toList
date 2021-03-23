import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PendingsComponent } from './pages/pendings/pendings.component';
import { FinishedComponent } from './pages/finished/finished.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pendings', component: PendingsComponent },
  { path: 'finished', component: FinishedComponent },
  { path: 'list/:id', component: ListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
