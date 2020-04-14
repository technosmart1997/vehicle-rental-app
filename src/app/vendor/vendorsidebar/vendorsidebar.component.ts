import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-vendorsidebar',
  templateUrl: './vendorsidebar.component.html',
  styleUrls: ['./vendorsidebar.component.scss']
})
export class VendorsidebarComponent implements OnInit {

  user:any;
  firstName : string;
  lastName : string;
  verified : boolean = true;
 
  constructor(private auth : AuthService) {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        firebase.database().ref('Vendors/'+ user.uid)
        .on("value", (snapshot) => {
          this.user = snapshot.val();
          // console.log(this.user);
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }); 
      }
    })
  }
  


  ngOnInit() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('Vendors/' + userId).on("value", (snapshot) => {
      if(snapshot.val() != null){
        if(snapshot.val().Status == 'Pending'){
            this.verified = false;
        }
      }
    })
  }

  logout(){
    firebase.auth().signOut();
  }

}
