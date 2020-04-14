import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendorvehicle',
  templateUrl: './vendorvehicle.component.html',
  styleUrls: ['./vendorvehicle.component.scss','../../common/commonstyle.scss']
})


export class VendorvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;
  user:any={};
  constructor(private router : Router,private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.vehicle_id = this.vehicle.key;
    this.vehicleData = this.vehicle;
    this.user = firebase.auth().currentUser;
  }

  moreDetail(id){
      this.router.navigate(['../','vehicle-detail', id ],  { relativeTo: this.route });
  }

  deleteVehicle(){
    firebase.database().ref('Vendors/'+this.user.uid+'/UploadedVehicles/'+this.vehicleData.key).remove().then(() => {
      firebase.database().ref(this.vehicleData.City+'/' + this.vehicleData.VehicleType+ '/'+this.vehicleData.VehicleName)
      .remove()
      .then(() => {
        this.onDelete.emit();
        alert('Vehicle Deleted!')
      })
  })
}
}
