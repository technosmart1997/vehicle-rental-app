import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss','../../common/commonstyle.scss']
})

export class VehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;
  city : string;
  constructor(private router : Router,  private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.vehicle_id = this.vehicle.key;
    this.vehicleData = this.vehicle;
    }

  editVehicle(){
    this.router.navigate(['../','vehicle-edit', this.vehicleData.city, this.vehicleData.VehicleType, this.vehicleData.VehicleName, this.vehicleData.key, this.vehicleData.VendorUid], { relativeTo: this.route });
  }

  deleteVehicle(){
    // Delete Vehicle Here
    // firebase.firestore().collection("bikes").doc(this.vehicle.id).delete().then(()=>{
    //   this.onDelete.emit();
    // })

    firebase.database().ref('Vendors/'+this.vehicleData.VendorUid+'/UploadedVehicles/'+this.vehicleData.key).remove().then(() => {
      firebase.database().ref(this.vehicleData.city+'/' + this.vehicleData.VehicleType+ '/'+this.vehicleData.VehicleName)
      .remove()
      .then(() => {
        this.onDelete.emit();
        alert('Vehicle Deleted!')
      })
    })
  }
}
