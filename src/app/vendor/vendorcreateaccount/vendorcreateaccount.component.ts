import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-vendorcreateaccount',
  templateUrl: './vendorcreateaccount.component.html',
  styleUrls: ['./vendorcreateaccount.component.scss']
})
export class VendorcreateaccountComponent implements OnInit {
 
  myForm: FormGroup;
  user: any = {};
  message:string;

  constructor(private fb: FormBuilder,private router : Router) {
    this.myForm = this.fb.group({
        firstName : ['',[Validators.required]],
        lastName : ['',[Validators.required]],
        email : ['',[Validators.required, Validators.email]],
        password : ['',[Validators.required,Validators.minLength(8)]],
      });
      // this.getProfile();
 }

  ngOnInit() {
  }

  getProfile(){
    let userId = firebase.auth().currentUser.uid;
    firebase.firestore().collection("vendors").doc(userId).get().then((documentSnapshot) => {

      this.user = documentSnapshot.data();
      this.user.displayName = this.user.firstName + " " + this.user.lastName;
      
      console.log(this.user);
    }).catch((error)=>{
      console.log(error);
    })
  }

  onSubmit(signupform){
    console.log(signupform);

    if (signupform.dirty && signupform.valid) {
      let randomNumber = Math.floor(Math.random()*1000);

            firebase.auth().currentUser.updateProfile({     
              displayName: signupform.value.firstName +' '+ signupform.value.lastName,
              photoURL: "https://api.adorable.io/avatars/"+randomNumber,
            }).then(()=>{
              let userId = firebase.auth().currentUser.uid;
              firebase.database().ref('Vendors/' + userId).set({
                Name:signupform.value.firstName+' '+signupform.value.lastName,
                Email: signupform.value.email,
                photoURL: firebase.auth().currentUser.photoURL,
                PhoneNumber: firebase.auth().currentUser.phoneNumber,
                Status: "Pending"
              }).then(()=>{
                alert("Profile Updated Successfully")
                this.router.navigate(['vendor-profile']);
              }).catch((error)=>{
                console.log(error);
              })
            }).catch((error)=>{
              console.log(error);
            })
            
          }
      
    }
   

  }