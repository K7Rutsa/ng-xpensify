import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private _router: Router) {}

  login(email, password) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this._router.navigate(['']);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong Password');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this._router.navigate(['login']);
    });
  }

  authState() {
    return this.afAuth.authState.pipe(map(a => a));
  }

  register(email, password) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this._router.navigate(['']);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
}
