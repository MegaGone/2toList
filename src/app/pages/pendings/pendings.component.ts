import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html'
})

export class PendingsComponent implements OnInit {

  public closeResult: string | any;

  constructor() { }

  ngOnInit(): void {
  }
}
