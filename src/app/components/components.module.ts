import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ClearAllComponent } from './clear-all/clear-all.component';
import { EditPopComponent } from './edit-pop/edit-pop.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    ModalComponent,
    ClearAllComponent,
    EditPopComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    ModalComponent,
    ClearAllComponent,
    EditPopComponent
  ]
})
export class ComponentsModule { }
