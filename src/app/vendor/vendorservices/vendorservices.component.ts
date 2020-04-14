import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-vendorservices',
  templateUrl: './vendorservices.component.html',
  styleUrls: ['./vendorservices.component.scss']
})
export class VendorservicesComponent implements OnInit {

  vehicles = [];
  searchPlace : string;
  showError : boolean = false;

  constructor() {
      this.getBikes();
    }
  ngOnInit() {
        
  }

  getBikes() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('Vendors/'+ userId +'/UploadedVehicles')
    .on("value", (snapshot) => {
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
    });
  }

  onPostCreated(){
    this.getBikes();
  }

  onDelete(){
    
    this.vehicles = [];
    this.getBikes();
  }

}
