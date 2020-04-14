import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  vendors:any = [];
  showError : boolean = false;

  constructor() {
    this.getVendors();
   }

  
  ngOnInit() {
  }

  getVendors() {
    firebase.database().ref("Vendors/").on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        this.vendors.push(item);
      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
  }

  onDelete(){
    this.vendors = [];
    this.getVendors();
  }

}
