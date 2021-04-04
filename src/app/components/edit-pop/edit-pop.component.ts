import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-pop',
  templateUrl: './edit-pop.component.html'
})
export class EditPopComponent implements OnInit {

  @Input() inputID: any = 'InputID'; // Estoy esperando recibir argumento

  constructor() { }

  ngOnInit(): void {
  }

  editList(id: string){
    console.log(id)
  }

}
