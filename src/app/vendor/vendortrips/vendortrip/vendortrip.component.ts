import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-vendortrip',
  templateUrl: './vendortrip.component.html',
  styleUrls: ['./vendortrip.component.scss','../../../common/commonstyle.scss']
})

export class VendortripComponent implements OnInit {
  @Input('trip_detail') trip;
  @Output('onDelete') onDelete = new EventEmitter;
  trip_id ;
  tripData;
  user:any={};
  constructor(private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.trip_id = this.trip.key;
    this.tripData = this.trip;
    this.user = firebase.auth().currentUser;
  }


deleteTrip(){
  // firebase.firestore().collection("trip").doc(this.trip_id).delete().then(()=>{
  //   this.onDelete.emit();
  // })
  firebase.database().ref('Vendors/'+this.user.uid+'/UploadedVehicles/'+this.tripData.key).remove().then(() => {
    firebase.database().ref(this.tripData.City+'/' + this.tripData.VehicleType+ '/'+this.tripData.VehicleName)
    .remove()
    .then(() => {
      this.onDelete.emit();
      alert('Vehicle Deleted!')
    })
})
}

}