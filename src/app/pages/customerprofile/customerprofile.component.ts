import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {

  address:string;
  aadharno:string;

  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit() {
  }
  
  onCompleteProfile() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/' + userId).update({
      aadharno: this.aadharno,
      address: this.address
    }).then(()=>{
      alert("Profile Updated Successfully")
      this.router.navigate(['customer-dashboard',userId]);
    }).catch((error)=>{
      console.log(error);
    })
  }

}
