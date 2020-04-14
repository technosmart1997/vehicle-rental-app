import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendorbookings',
  templateUrl: './vendorbookings.component.html',
  styleUrls: ['./vendorbookings.component.scss']
})
export class VendorbookingsComponent implements OnInit {
  showError : boolean = false;
  vehicles : any[] = [];
  vendor_id;
  constructor() { 
    this.getProducts();
  }

  ngOnInit() {
  }
  
  getProducts() {
    this.vendor_id = firebase.auth().currentUser.uid;
    firebase.database().ref('Bookings/').orderByChild('VendorUid')
    .startAt(this.vendor_id).endAt(this.vendor_id).on("value", (snapshot) => {
      if(snapshot.val() != null){
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          this.vehicles.push(item);
        })
      }else{
        this.showError = true;
      }
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
  }

}
