import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendortrips',
  templateUrl: './vendortrips.component.html',
  styleUrls: ['./vendortrips.component.scss']
})
export class VendortripsComponent implements OnInit {

  vendor_id;
  trips : any = [];
  services : any = [];
  searchPlace : string;
  showError : boolean = false;

  constructor() {
    
      this.getTrips();
    }
  ngOnInit() {
        
  }

  getTrips() {
    this.vendor_id = firebase.auth().currentUser.uid;
    firebase.database().ref('Vendors/'+ this.vendor_id +'/UploadedVehicles').orderByChild('VehicleType').equalTo('Adventurous Trip')
    .on("value", (snapshot) => {

      if(snapshot.val() != null){
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          this.trips.push(item);
        })
      }else{
        this.showError = true;
      }
      
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  onDelete(){
    this.trips = [];
    this.getTrips();
  }

}
