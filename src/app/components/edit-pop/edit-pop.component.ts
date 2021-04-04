import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ListModel } from 'src/app/models/list.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-pop',
  templateUrl: './edit-pop.component.html'
})
export class EditPopComponent implements OnInit {

  public closeResult: string = '';
  public editForm: FormGroup;
  public list: any;

  @Input() id: any = 'InputID'; // Estoy esperando recibir argumento

  constructor(private modalSvc: NgbModal, private fb: FormBuilder, private dataSvc: DataService) {

    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]]
    })

  }

  ngOnInit(): void {
  }

  open(content: any, id: string) {
    this.modalSvc.open(content, { size: 'sm',  ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Close with ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })

    // Obtengo la lista
    this.getList(id);

  }

  get titleInvalid() {
    return this.editForm.get('title')?.invalid && this.editForm.get('title')?.touched;
  }

  editList() {

    if (this.editForm.invalid) {

      return Object.values(this.editForm.controls).forEach(c => {
        c.markAsTouched();
      })

    } else {


      console.log('edited');
      this.modalSvc.dismissAll(ModalDismissReasons.BACKDROP_CLICK)

    }
  }

  public getList = (id: string) => {

    this.dataSvc.getList(id).subscribe(res => {

      this.list = res;
      
      const title = this.list.title;
      console.log(title);
      

      this.editForm = this.fb.group({
        title: [title, [Validators.required, Validators.minLength(4)]]
      })

    })



  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking backdrop'
    } else {
      return `with ${reason}`
    }
  }

}
