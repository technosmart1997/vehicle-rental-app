import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from '../../../../node_modules/firebase/app';


@Component({
  selector: 'app-createcoupan',
  templateUrl: './createcoupan.component.html',
  styleUrls: ['./createcoupan.component.scss']
})

export class CreatecoupanComponent implements OnInit {
  myForm: FormGroup;
 

  constructor(private fb: FormBuilder) { 

    this.myForm = this.fb.group({
      coupanVehicleType : ['bike'],
      coupanCode : ['',[Validators.required]],
      coupanDesc: ['',[Validators.required]],
      discount: ['', [Validators.required]],
      vehicleName: ['', Validators.required],
      vehicleCount :  ['', Validators.required]
    });
  }

  ngOnInit(){
  }

  onSubmit(signupform){
    console.log(signupform);
    if (signupform.dirty && signupform.valid) {
        firebase.database().ref('Coupons/'+signupform.value.coupanCode).set({
          Description: signupform.value.coupanDesc,
          Discount: signupform.value.discount,
          MaxTimes: signupform.value.vehicleCount,
          VehicleName: signupform.value.vehicleName,
          VehicleType: signupform.value.coupanVehicleType
        }).then(() => {
          alert('Coupon Created');
        })
        .catch(err => console.log(err));
    }
  }

}

