import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss','../../common/commonstyle.scss']
})
export class UserprofileComponent implements OnInit {

  userData : any = [];
  userId;
  constructor(private route : ActivatedRoute) { 

    this.userId = route.snapshot.params['userid'];
  }

  ngOnInit() {
    firebase.database().ref("Users/"+this.userId).on("value", (snapshot) => {
      console.log(snapshot.val());
      console.log('adnakdfjaksljdlkasjd')
      this.userData = snapshot.val();
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
    
  }

}


