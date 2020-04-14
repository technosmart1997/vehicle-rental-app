import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-bookingstodayvehicle',
  templateUrl: './bookingstodayvehicle.component.html',
  styleUrls: ['./bookingstodayvehicle.component.scss','../../../common/commonstyle.scss']
})

export class BookingstodayvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;
  user_id;
  city : string;
  constructor(private router : Router,  private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.vehicle_id = this.vehicle.key;
    this.vehicleData = this.vehicle;
    this.user_id = this.vehicle.UserUid;
    console.log(this.vehicleData);
    }

    cancelBooking() {
      // firebase.firestore().collection("rented").doc(this.vehicle.id).delete().then(()=>{
      //   this.onDelete.emit();
      // })
      firebase.database().ref('Bookings/'+this.vehicle_id).remove().then(() => {
        firebase.database().ref('Users/'+this.user_id+'/Bookings/'+this.vehicle_id).remove().then(() => {
          this.onDelete.emit();
        })
      })
    }
}
