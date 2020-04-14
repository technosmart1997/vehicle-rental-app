import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.scss']
})
export class VendordashboardComponent implements OnInit {

  user : any;
  constructor(private router : Router) { }

  ngOnInit() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('Vendors/' + userId).on("value", (snapshot) => {
      if(snapshot.val() != null){
        if(snapshot.val().Status == 'Pending'){
          this.router.navigate(['vendor-dashboard/vendor-notverified']);
        }else{
          this.router.navigate(['vendor-dashboard']);
        }
      }
    })
  }

  onClick(){
    console.log("Clicked");
    var el = document.getElementById("main_sidebar");
    el.classList.toggle("active");
  }

}
