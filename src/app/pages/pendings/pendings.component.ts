import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html'
})

export class PendingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createList(){
    this.router.navigate(['/list', 'new'])
  }

}
