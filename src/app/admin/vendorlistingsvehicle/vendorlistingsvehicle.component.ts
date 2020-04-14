import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendorlistingsvehicle',
  templateUrl: './vendorlistingsvehicle.component.html',
  styleUrls: ['./vendorlistingsvehicle.component.scss','../../common/commonstyle.scss']
})

export class VendorlistingsvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;
  constructor(private router : Router,  private route : ActivatedRoute) { }
  
  ngOnInit() {      
    this.vehicle_id = this.vehicle.key;
    this.vehicleData = this.vehicle;
    console.log(this.vehicleData);
  }

  deleteVehicle(){
    // firebase.firestore().collection("bikes").doc(this.vehicle.id).delete().then(()=>{
    //   this.onDelete.emit();
    // })
    firebase.database().ref('Vendors/'+this.vehicleData.vendorId+'/UploadedVehicles/'+this.vehicleData.key).remove().then(() => {
      firebase.database().ref(this.vehicleData.City+'/' + this.vehicleData.VehicleType+ '/'+this.vehicleData.VehicleName)
      .remove()
      .then(() => {
        this.onDelete.emit();
        alert('Vehicle Deleted!')
      })
    })
  }
}
