import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-customerbookingsvehicle',
  templateUrl: './customerbookingsvehicle.component.html',
  styleUrls: ['./customerbookingsvehicle.component.scss','../../../common/commonstyle.scss']
})
export class CustomerbookingsvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;

  constructor(private router : Router,  private route : ActivatedRoute) { }

  ngOnInit() {
    this.vehicle_id = this.vehicle.key;
    this.vehicleData = this.vehicle;
    console.log(this.vehicleData)
  }

  cancelBooking(){
    // Delete Vehicle Here
    console.log(this.vehicle_id);
    // firebase.firestore().collection("rented").doc(this.vehicle.id).delete().then(()=>{
    //   this.onDelete.emit();
    // })
    firebase.database().ref('Bookings/'+this.vehicle_id).remove().then(() => {
      firebase.database().ref('Users/'+this.vehicleData.UserUid+'/Bookings/'+this.vehicle_id).remove().then(() => {
        this.onDelete.emit();
      })
    })
  }

}

