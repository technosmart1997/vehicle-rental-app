import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vehicleedit',
  templateUrl: './vehicleedit.component.html',
  styleUrls: ['./vehicleedit.component.scss']
})


export class VehicleeditComponent implements OnInit {
  myForm: FormGroup;
  from;
  to;
  vendorId;
  city;
  vehicleType;
  vehicleName;
  vehicle_id;

  date: Date = new Date();
  settings = {
    bigBanner: true,
    format: 'dd-MM-yyyy',
    defaultOpen: false
} 

  constructor(private fb: FormBuilder,private route : ActivatedRoute) { 

  

    this.myForm = this.fb.group({
      vehicleName : ['',[Validators.required]],
      vehicleNo: ['', [Validators.required]],
      priceHour: ['', Validators.required],
      priceDay :  ['', Validators.required],
      address : ['',[Validators.required]],
    });
    this.vendorId = this.route.snapshot.params['vendor_id'];
    this.city = this.route.snapshot.params['city'];
    this.vehicleType = this.route.snapshot.params['type'];
    this.vehicleName = this.route.snapshot.params['vname'];
    this.vehicle_id = this.route.snapshot.params['vehicle_id'];
  }

  ngOnInit() {

   
  }

  onSubmit(uploadForm){
    console.log(uploadForm);

    if (uploadForm.dirty && uploadForm.valid) {

      firebase.database().ref('Vendors/'+this.vendorId+'/UploadedVehicles/'+this.vehicle_id).update({
          NoOfVehicles : uploadForm.value.vehicleNo,
          PricePerDay: uploadForm.value.priceDay,
          PricePerHour: uploadForm.value.priceHour,
          Address: uploadForm.value.address,
        })
      firebase.database().ref(this.city+'/' + this.vehicleType+ '/'+this.vehicleName).update({
        NoOfVehiclesAvailable: uploadForm.value.vehicleNo
      }).then(() => {
        firebase.database().ref(this.city+'/' + this.vehicleType+ '/'+this.vehicleName + '/ParkingAddress/'+ this.vehicle_id).update({
          Address: uploadForm.value.address,
          PricePerDay: uploadForm.value.priceDay,
          PricePerHour: uploadForm.value.priceHour,
          NoOfVehicles: uploadForm.value.vehicleNo
        }).then(() => {
          alert('Vehicle Updated!!!');
        })
      })
      

        

    }
  }

}
