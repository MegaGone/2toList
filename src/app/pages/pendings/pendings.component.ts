import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html'
})

export class PendingsComponent implements OnInit {

  public closeResult: string | any;

  constructor(private router: Router, private modalSvc: NgbModal) { }

  ngOnInit(): void {
  }

  createList(){
    this.router.navigate(['/list', 'new'])
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
