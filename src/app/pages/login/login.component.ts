import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) {

    this.authSvc.afAuth.authState.subscribe(user => {
      if(!user){
        return;
      }

      this.router.navigate(['/pendings'])
    })

   }

  ngOnInit(): void {
  }

  logIn(){
    this.authSvc.googleLogin()
  }

}
