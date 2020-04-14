import { Injectable } from '@angular/core';
import * as firebase from '../../../node_modules/firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    uid :any;
    userToken: any;
    Curuser: any;
    IsloggedIn : boolean;


  constructor(private _router : Router) { 

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("Logged in");
        } else {
          // No user is signed in.
          console.log("Not Logged In");
            this._router.navigate(['/vendor-login']);

        }
      });
  
  }


  signOut() {
    firebase.auth().signOut().then(() => {
        localStorage.clear();
        this._router.navigate(['/']);
    });
    }

    getLoginStatus(){
        return this.IsloggedIn;
    }




}



