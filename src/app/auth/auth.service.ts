import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: Observable<firebase.User | null>

  constructor(public afAuth: AngularFireAuth) {
    this.userData = afAuth.authState
  }

  googleLogin() {
    try {
      this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
    } catch (err) {
      console.warn(err);
    }
  }

  logOut() {
    try {
      this.afAuth.signOut();
    } catch (err) {
      console.warn(err);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}

