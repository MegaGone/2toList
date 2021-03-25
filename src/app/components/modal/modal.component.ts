import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  public closeResult: string | any;
  public forma: FormGroup;

  constructor(private modalSvc: NgbModal, private fb: FormBuilder) { 
    this.forma = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit() {
  }

  createList(){
    if(this.forma.invalid){
      Swal.fire({
        title: 'INVALID',
        icon: 'error',
        text: `Error to create new list`,
        showConfirmButton: false,
        timer: 1500
      });

      return;
    }else{
      
      Swal.fire({
        title: 'Create',
        icon: 'success',
        text: 'Your list have been created',
        showConfirmButton: true,
      }).then(res => {

        if(res.value){
         
          // Aca debo de hacer el HTTP y usar el async para crear la lista

        }

      })

    }


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

  get titleInvalid(){
    return this.forma.get('title')?.invalid && this.forma.get('title')!.touched;
  }

  reset(){
    this.forma.reset();
  }
}
