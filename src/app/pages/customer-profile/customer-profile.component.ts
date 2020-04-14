import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss','../../common/commonstyle.scss']
})
export class CustomerProfileComponent implements OnInit {

  user:any;
  constructor() {

  }
  

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        firebase.database().ref('Users/'+user.uid).on("value", (snapshot) => {
          if(snapshot.val() != null){
            this.user = snapshot.val();
          }
        })  
      }
    })
  }

}
