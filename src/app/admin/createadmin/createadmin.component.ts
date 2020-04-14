import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.scss','../../common/commonstyle.scss']
})
export class CreateadminComponent implements OnInit {
  myForm: FormGroup;
 

  constructor(private fb: FormBuilder) { 

    this.myForm = this.fb.group({
      username : ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  ngOnInit(){
  }

  onSubmit(signupform){
    console.log(signupform);
    if (signupform.dirty && signupform.valid) {
        firebase.database().ref('Admins/').push({
          Username: signupform.value.username,
          Password: signupform.value.password
        }).then(() => {
          alert('Admin successfully created!');
        })
    }
  }

}