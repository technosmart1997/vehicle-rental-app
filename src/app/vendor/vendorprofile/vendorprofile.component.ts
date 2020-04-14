import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.scss']
})
export class VendorprofileComponent implements OnInit {

  address:string;
  aadharno:string;

  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit() {
  }
  
  onCompleteProfile() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('Vendors/' + userId).update({
      AadharNumber: this.aadharno,
      AadharUrl:'',
      VendorAddress: this.address
    }).then(()=>{
      alert("Profile Updated Successfully"); 

      this.router.navigate(['vendor-dashboard']);
    }).catch((error)=>{
      console.log(error);
    })
  }
  
  }


