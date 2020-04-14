import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-verifyvendors',
  templateUrl: './verifyvendors.component.html',
  styleUrls: ['./verifyvendors.component.scss']
})
export class VerifyvendorsComponent implements OnInit {

  vendors:any = [];
  showError : boolean = false;
    
  constructor() { 
    this.getVendors();
  }

  ngOnInit() {
  }

  getVendors() {
    firebase.database().ref("Vendors/").orderByChild('Status')
    .startAt('Pending').endAt('Pending').on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        this.vendors.push(item);
      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
  }

}
