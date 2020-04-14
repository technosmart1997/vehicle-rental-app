import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendorlistings',
  templateUrl: './vendorlistings.component.html',
  styleUrls: ['./vendorlistings.component.scss']
})
export class VendorlistingsComponent implements OnInit {

  vendor_id;
  vehicles:any = [];
  showError : boolean = false;
  constructor(private route : ActivatedRoute) {
    this.vendor_id = route.snapshot.params['vendorid'];
    this.getProducts();
   }

  ngOnInit() {

  }
  getProducts() {
    firebase.database().ref('Vendors/' + this.vendor_id + '/UploadedVehicles').on("value", (snapshot) => {
      if(snapshot.val() != null){
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          item.vendorId =this.vendor_id;
          this.vehicles.push(item);
          console.log(this.vehicles);
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
