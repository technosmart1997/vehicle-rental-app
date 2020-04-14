import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from '../../window.service';
// import { Auth} 
import * as firebase from 'firebase/app';
import { AuthService } from 'app/services/auth.service';



@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.scss']
})
export class VendorloginComponent implements OnInit {

  winRef: any;
  phone : string;
  verificationCode ;
  user : any;
  vendor  :any;
  constructor(private win : WindowService, private auth : AuthService, private router : Router) {
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
              this.winRef.confirmationResult = result;
            })
            .catch( error => console.log(error));
  }


  verifyLoginCode() {
    this.winRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( (result) => {
                    this.user = result.user;
                    var ref = firebase.database().ref('Vendors/'+this.user.uid);
                    ref.on("value", (snapshot) => {
                    if(snapshot.val() == null){
                      this.router.navigate(['/vendor-create-account']);
                    }else{
                      this.router.navigate(['/vendor-dashboard']);
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
