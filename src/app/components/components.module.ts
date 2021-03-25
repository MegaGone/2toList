import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ClearAllComponent } from './clear-all/clear-all.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    ModalComponent,
    ClearAllComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    ModalComponent,
    ClearAllComponent
  ]
})
export class ComponentsModule { }
