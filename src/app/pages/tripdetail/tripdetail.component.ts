import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-tripdetail',
  templateUrl: './tripdetail.component.html',
  styleUrls: ['./tripdetail.component.scss','../../common/commonstyle.scss']
})

export class TripdetailComponent implements OnInit {
  total_hrs;
  from_date  = new Date();
  to_date = new Date();
  tripId : string;
  tripData : any;
  userId: string;
  duration : number;
  userData: any;
  passengerArray;
  perCentagePaying : number = 100;
  amountPerPerson : number;
  total_amount : number = 0;
  date_from_mill;
  date_to_mill; 
  amount_paying : number = 0;
  amount_left : number = 0;
  passengerCount : number = 1;
  settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MM-yyyy hh:mm a',
        defaultOpen: false,
        closeOnSelect : true
    }


  constructor(private route : ActivatedRoute, private router : Router) {

    let date = new Date();
    this.date_from_mill = date.getTime();
    this.date_to_mill = date.getTime();

    this.tripId = route.snapshot.params['tripid'];
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.userId = user.uid;
        console.log("Logged In");
        firebase.firestore().collection("users").doc(user.uid).get().then((documentSnapshot) => {
            this.userData = documentSnapshot.data();
            console.log(documentSnapshot.data());
          })  
      }
     
    })

    }
  
  ngOnInit() {

        var docRef = firebase.firestore().collection("trip").doc(this.tripId);
        docRef.get().then((doc) => {
            if (doc.exists) {
              this.tripData = doc.data();
              console.log(this.tripData)
              let passengerCount = parseInt(this.tripData.passenger_count);
              this.passengerArray = new Array(passengerCount);
              this.amountPerPerson = parseInt(this.tripData.priceperperson);
              this.duration = parseInt(this.tripData.duration);
              this.total_amount = this.passengerCount * this.duration * this.amountPerPerson;
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
  }


  bookVehicle(){
    let user = firebase.auth().currentUser;

    if(user){
      let userId = firebase.auth().currentUser.uid;
    let today_date = new Date().toLocaleDateString();
    let fd  = new Date(this.date_from_mill);
    let td  = new Date(this.date_to_mill); 

    firebase.firestore().collection("tripbooked").doc(userId).set({
      vehicle : this.tripId,
      customer: userId,
      vendor: this.tripData.owner,
      total_amount : this.total_amount,
      amount_paid : this.amount_paying,
      amount_remain : this.amount_left,
      from : fd.toLocaleDateString(),
      to : td.toLocaleDateString(),
      passengerCount: this.passengerCount,
      amountperPerson: this.amountPerPerson,
      phoneNo: this.tripData.phoneNo,
      address: this.tripData.address,
      city : this.tripData.city,
      duration: this.duration,
      customerName: this.userData.firstName +' '+ this.userData.lastName,
      aadharNo: this.userData.aadharno,
      dateofbooking : today_date,
      photoUrl: this.tripData.photoUrl,
      vendorName: this.tripData.vendorName
    }).then(() => {
      alert('Trip Added To Cart! Make Payment');
      window.location.href="https://protected-retreat-34115.herokuapp.com/paywithpaytm?amount="+this.amount_paying;
    }).catch((err) => {
      console.log(err);
    })
    }else{
        alert('Please Login To book your vehicle!');
        this.router.navigate(['/login']);
      }
  }

  selectOption(){
    this.total_amount = this.passengerCount * this.duration * this.amountPerPerson;
  }
 
  selectPerPaying(){
    this.amount_paying = Math.floor(this.total_amount*((this.perCentagePaying)/100));
    this.amount_left = this.total_amount - this.amount_paying;
  }

}

