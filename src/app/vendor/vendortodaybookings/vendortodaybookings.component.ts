import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendortodaybookings',
  templateUrl: './vendortodaybookings.component.html',
  styleUrls: ['./vendortodaybookings.component.scss']
})
export class VendortodaybookingsComponent implements OnInit {

  showError  :boolean = false;
  vehicles:any=[];
  vendor_id;
  constructor() {
    this.getProducts();
   }

  ngOnInit() {
  }

  getProducts() {
    let today_date = new Date().toLocaleDateString()
    this.vendor_id = firebase.auth().currentUser.uid;

    // firebase.firestore().collection("rented")
    // .where('dateofbooking' ,'==', today_date)
    // .get().then((querySnapshot) => {
    //   this.vehicles = querySnapshot.docs;
    //   if(this.vehicles.length <= 0){
    //     this.showError = true;
    //   }else{
    //     this.showError = false;
    //   }
    // }).catch((err) => {
    //   console.log(err);
    // })

    firebase.database().ref('Bookings/').on("value", (snapshot) => {
      if(snapshot.val() != null){
        snapshot.forEach((childSnapshot) => {
          if(childSnapshot.val().VendorUid == this.vendor_id && childSnapshot.val().BookingDate == today_date){
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            this.vehicles.push(item);

            console.log(this.vehicles)
          }
        })
      }else{
        this.showError = true;
      }
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
  }

}
