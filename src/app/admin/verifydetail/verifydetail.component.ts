import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verifydetail',
  templateUrl: './verifydetail.component.html',
  styleUrls: ['./verifydetail.component.scss','../../common/commonstyle.scss']
})
export class VerifydetailComponent implements OnInit {

  vData : any = [];
  vId;

  constructor(private router : Router,private route : ActivatedRoute) {
    this.vId = route.snapshot.params['vid'];
   }

  ngOnInit() {
    firebase.database().ref("Vendors/"+this.vId).on("value", (snapshot) => {
        this.vData = snapshot.val();
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
  }

  verifyVendor() {
    firebase.database().ref("Vendors/"+this.vId).update({
      Status: "Verified"
    }).then(() => {
      alert('Vendor Verified');
      this.router.navigate(['../','verify-vendors'], { relativeTo: this.route });
    })
    .catch((err) => console.log(err));
  }

}
