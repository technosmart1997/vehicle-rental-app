import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-customerbookings',
  templateUrl: './customerbookings.component.html',
  styleUrls: ['./customerbookings.component.scss']
})

export class CustomerbookingsComponent implements OnInit {

  user_id;
  vehicles : any[] = [];
  showError : boolean = false;
  constructor(private route : ActivatedRoute) {
    // console.log(this.user_id);
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    let user_id = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+ user_id +'/Bookings/')
    .on("value", (snapshot) => {
      if(snapshot.val() != null){
        let vehicles = snapshot.val();
        Object.keys(vehicles).forEach((key) => {
          let mainObject = vehicles[key];
          mainObject.key = key;
          this.vehicles.push(mainObject);
      });
      }else{
        this.showError = true;
      }
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  onDelete(){
    //refresh the list of posts
    this.vehicles = [];
    this.getProducts();
  }

}



