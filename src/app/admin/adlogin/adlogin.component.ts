import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.scss']
})
export class AdloginComponent implements OnInit {

  myForm : FormGroup;
  message : string = "";
  userError : any;
  isAuthenticated : boolean = false; 
  password;
  username;
  flag : number= 0;

  constructor(public fb : FormBuilder,public router : Router) {
    this.myForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
   }

  ngOnInit() {
  
  }

  onSubmit(form){
    
    // firebase.database().ref('Admins').on("value",(snapshot) => {
    //       let admins = snapshot.val();
    //       Object.keys(admins).forEach((key) => {
    //         let admin = admins[key];
    //         if(admin.Username == form.value.email && admin.Password ==  form.value.password){
    //           console.log("Match Found");
    //           this.router.navigate(['/admin-dashboard']);
    //         }else{
    //           this.router.navigate(['/adlogin']);
    //         }
    //       })
    // });

    // firebase.firestore().collection('cities').get().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // });

    firebase.database().ref('Admins/MainAdmin/').on("value",(snapshot) => {
      if(snapshot.val()!=null){
        this.password = snapshot.val().Password;
        this.username = snapshot.val().Username;
        if(form.value.email == this.username && form.value.password == this.password){
          this.router.navigate(['/admin-dashboard']);
        }else{
          this.router.navigate(['/adlogin']);
        }
      }
      else{
        console.log('error')
      }
    })
  }

}
