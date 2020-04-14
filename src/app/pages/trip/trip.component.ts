import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss','../../common/commonstyle.scss']
})


export class TripComponent implements OnInit {
  @Input('trip_detail') trip;
  trip_id ;
  tripData;
  user:any={};
  constructor(private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.trip_id = this.trip.id;
    this.tripData = this.trip.data();
    // console.log(this.tripData);
    this.user = firebase.auth().currentUser;
  }


  moreDetail(id){
    this.router.navigate(['../','trip-detail', id ],  { relativeTo: this.route });
  }
}
