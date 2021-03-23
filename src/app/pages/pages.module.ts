import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { FinishedComponent } from './finished/finished.component';
import { PendingsComponent } from './pendings/pendings.component';



@NgModule({
  declarations: [
    LoginComponent, 
    SettingsComponent, 
    FinishedComponent, 
    PendingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent, 
    SettingsComponent, 
    FinishedComponent, 
    PendingsComponent
  ]
})
export class PagesModule { }
