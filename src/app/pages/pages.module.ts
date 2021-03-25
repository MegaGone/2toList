import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { FinishedComponent } from './finished/finished.component';
import { PendingsComponent } from './pendings/pendings.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    LoginComponent, 
    FinishedComponent, 
    PendingsComponent, 
    ListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbModule
  ],
  exports: [
    LoginComponent, 
    FinishedComponent, 
    PendingsComponent,
    ListComponent
  ]
})
export class PagesModule { }
