import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToPendings(){
    this.router.navigate(['/pendings'])
  }

  addItem(){
    alert('Add')
  }

}
