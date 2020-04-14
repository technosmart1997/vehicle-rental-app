import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss','../../common/commonstyle.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicleCount : Number = 1;
  amount : Number;
  newAmt : Number;
  vehicleId : string;
  vehicleData : any;

  constructor(private route : ActivatedRoute) {

    this.vehicleId = route.snapshot.params['vid'];

    }
  
  ngOnInit() {

        let userId = firebase.auth().currentUser.uid;
        console.log(userId);
    
        firebase.database().ref('Vendors/'+ userId +'/UploadedVehicles/'+ this.vehicleId)
        .on("value", (snapshot) => {
          if(snapshot.val() != null){
            this.vehicleData = snapshot.val();
          }
        }, (errorObject) => {
          console.log("The read failed: " + errorObject.code);
        });
  }    
 
}
