import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  public closeResult: string | any;

  constructor(private modalSvc: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: string | any){
    this.modalSvc.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason: any): string {
      if(reason === ModalDismissReasons.ESC){
        return 'by pressing esc';
      }else if(reason === ModalDismissReasons.BACKDROP_CLICK){
        return 'by clicking backdrop'
      }else{
        return `with ${reason}`;
      }
  }
  
}
