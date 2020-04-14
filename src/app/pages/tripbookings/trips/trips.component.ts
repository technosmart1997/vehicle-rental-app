import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;

  constructor(private router : Router,  private route : ActivatedRoute) { }

  ngOnInit() {
    this.vehicle_id = this.vehicle.id;
    this.vehicleData = this.vehicle;
    console.log(this.vehicleData);
  }

  cancelBooking(){
    // Delete Vehicle Here
    firebase.firestore().collection("rented").doc(this.vehicle.id).delete().then(()=>{
      this.onDelete.emit();
    })
  }

}
