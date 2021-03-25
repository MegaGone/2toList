import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clear-all',
  templateUrl: './clear-all.component.html'
})

export class ClearAllComponent implements OnInit {

  public closeResult: string;

  constructor(private modalSvc: NgbModal) {
    this.closeResult = ''
  }

  ngOnInit(): void {
  }

  clearAll(){

    this.modalSvc.dismissAll(ModalDismissReasons.BACKDROP_CLICK);

    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: 'All your finished list have been deleted',
      showConfirmButton: false,
      timer: 2000
    })

  }

  open(content: string | any) {
    this.modalSvc.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing esc';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking backdrop'
    } else {
      return `with ${reason}`;
    }
  }


}
