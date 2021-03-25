import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ValidationService } from 'src/app/services/validation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  public closeResult: string | any;
  public forma: FormGroup;

  constructor(
    private modalSvc: NgbModal,
    private fb: FormBuilder,
    public validationSvc: ValidationService
  ) {
    this.forma = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)], this.validationSvc.existTitle]
    });

    this.loadListeners();
  }

  ngOnInit() {

  }

  createList() {

    if (this.forma.invalid) {

      return Object.values(this.forma.controls).forEach(c => {
        c.markAsTouched();
      });

    } else {

      console.warn('Create!!!');


      this.modalSvc.dismissAll(ModalDismissReasons.BACKDROP_CLICK)

      Swal.fire({
        title: 'Success',
        icon: 'success',
        showConfirmButton: true,
        text: 'Your list have been created'
      }).then(res => {

        if (res.value) {

          // Aca debo de hacer el HTTP y redireccionamiento con el titulo de la lista en la pagina de lista

          

        }

      })

    }


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

  get titleInvalid() {
    return this.forma.get('title')?.invalid && this.forma.get('title')!.touched;
  }

  reset() {
    this.forma.reset();
  }

  loadListeners() {
    // this.forma.valueChanges.subscribe( valor => {
    //   console.log(valor);
    // })

    // this.forma.statusChanges.subscribe( status => console.log({status}))

    this.forma.get('title')?.valueChanges.subscribe(console.log)
  }
}
