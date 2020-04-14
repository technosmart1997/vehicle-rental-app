import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendoruserprofile',
  templateUrl: './vendoruserprofile.component.html',
  styleUrls: ['./vendoruserprofile.component.scss','../../common/commonstyle.scss']
})
export class VendoruserprofileComponent implements OnInit {

  user:any;
  constructor() {

  }
  

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        firebase.database().ref('Vendors/'+ user.uid)
        .on("value", (snapshot) => {
          this.user = snapshot.val();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }); 
      }
    })
  }

}
