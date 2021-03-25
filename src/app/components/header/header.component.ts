import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  public user: any;

  constructor(private authSvc: AuthService) {
    this.authSvc.afAuth.authState.subscribe(user => {

      if(user) this.user = user

    })
  }

  ngOnInit(): void {
  }

  logOut() {

    this.authSvc.logOut();
    console.log('out');

  }
}
