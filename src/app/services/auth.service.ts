import { Injectable, EventEmitter } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


interface User {
  uid:            string;
  email:          string;
  photoURL?:      string;
  displayName?:   string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  loginSucceed: EventEmitter<Boolean> = new EventEmitter();
  
  user: Observable<User>;
  isLoggedIn: string = localStorage.getItem("isLoggedIn");
  expires: number = 0;

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private router: Router) { 

    // get auth data, then get firestore user document || null
    this.user = this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    );
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider)
  }

  emailLogin(email, password) {
    const provider = new firebase.auth.EmailAuthProvider();
    return this.auth.auth.signInWithEmailAndPassword(email, password).then( () => {
      this.updateLoginState();
    })
  }

  private oAuthLogin(provider) {
    return this.auth.auth.signInWithPopup(provider)
      .then( (d) => {
        console.log(d);
        if (d.user.uid == "JRzN2xYfUSZB9r6heFUEOTx3SOY2") {
          this.updateLoginState()
        } else {
          this.denyAccess();
        }
      })
  }

  /**
   * ! maybe only needed when starting with personalization for each user
   * @param user 
   */
  private updateLoginState() {
    // update login state
    this.isLoggedIn = "true";
    localStorage.setItem("isLoggedIn", this.isLoggedIn);
    this.loginSucceed.emit(true);
    this.router.navigate(["login"]);
  }

  private denyAccess() {
    alert("not authorized!");
    this.isLoggedIn = "false";
    localStorage.setItem("isLoggedIn", this.isLoggedIn);
  }

  /**
   * 
   */
  logout() {
    this.isLoggedIn = "false";
    localStorage.setItem("isLoggedIn", this.isLoggedIn);
    this.router.navigate(["login"]);
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    // check if logged in
    if (this.isLoggedIn === "true") {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }


}
