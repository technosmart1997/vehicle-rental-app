import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-bookingstoday',
  templateUrl: './bookingstoday.component.html',
  styleUrls: ['./bookingstoday.component.scss']
})
export class BookingstodayComponent implements OnInit {
  showError = false;
  vehicles : any[] = [];

  constructor() {
      this.getProducts();
   }

  
  ngOnInit() {
    
  }

  getProducts() {
    let today_date = new Date().toLocaleDateString();
    this.vehicles = [];

    firebase.database().ref('Bookings/').orderByChild('BookingDate').equalTo(today_date)
    .on("value", (snapshot) => {
      if(snapshot.val() != null){
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          this.vehicles.push(item);
        })
      }else{
        this.showError = true;
      }
     
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }


  // onDelete(){
  //   this.vehicles = [];
  //   this.getProducts();
  // }

}
