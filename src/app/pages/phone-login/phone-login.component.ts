import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from '../../window.service';
// import { UserauthService } from '../../services/userauth.service'; 
import * as firebase from 'firebase/app';
import 'firebase/auth'

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  winRef: any;
  phone : string;
  verificationCode ;
  user : any;
  vendor  :any;
  constructor(public router : Router, private win : WindowService ) { 
      
  }

  ngOnInit() {

    this.winRef = this.win.windowRef
    this.winRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.winRef.recaptchaVerifier.render()
  }

  sendLoginCode() {

    const appVerifier = this.winRef.recaptchaVerifier;

    const num = this.e164();


    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
              // console.log(result);
              this.winRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }


  verifyLoginCode() {
    this.winRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( (result) => {
                    this.user = result.user;
                  var ref = firebase.database().ref('Users/'+this.user.uid);
                    ref.on("value", (snapshot) => {
                    if(snapshot.val() == null){
                      this.router.navigate(['/user-create-account']);
                    }else{
                      this.router.navigate(['/customer-dashboard', this.user.uid]);
                    }
                  }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                  });
                })                                 
              }
  e164() {
    return `+91${this.phone}`;
  }
}


