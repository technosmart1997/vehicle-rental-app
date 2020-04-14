import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-vendorbookings',
  templateUrl: './vendorbookings.component.html',
  styleUrls: ['./vendorbookings.component.scss']
})
export class VendorbookingComponent implements OnInit {

  vendor_id;
  vehicles : any = [];
  showError : boolean = false;
  constructor(private route : ActivatedRoute) {
    this.vendor_id = route.snapshot.params['vendorid'];
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
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

  onDelete(){
    //refresh the list of posts
    this.vehicles = [];
    this.getProducts();
  }

}
