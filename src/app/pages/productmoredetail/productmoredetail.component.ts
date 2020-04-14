import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-productmoredetail',
  templateUrl: './productmoredetail.component.html',
  styleUrls: ['./productmoredetail.component.scss','../../common/commonstyle.scss']
})
export class ProductmoredetailComponent implements OnInit {
  total_hrs;
  from_date  = new Date();
  to_date = new Date();
  vendorId : string;
  city : string;
  vehicleType : string;
  vehicleData : any;
  userId: string;
  userData: any;
  vehicleArray ;
  vehicleName : string;
  perCentagePaying : number = 100;
  amountPerHour : number;
  amountPerDay : number;
  hours : number = 0;
  days: number = 0;
  total_amount : number = 0;
  default_from_mill;
  date_from_mill;
  date_to_mill; 
  amount_paying : number = 0;
  amount_left : number = 0;
  vehicleCount : number = 1;

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
    this.total_hrs =  this.getHours(this.date_from_mill,this.date_to_mill);

    this.vendorId = this.route.snapshot.params['vendor_id'];
    this.city = this.route.snapshot.params['city'];
    this.vehicleType = this.route.snapshot.params['type'];
    this.vehicleName = this.route.snapshot.params['vname'];

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.userId = user.uid;
        console.log("Logged In");
        firebase.database().ref("Users/"+user.uid).on("value", (snapshot) => {
          this.userData = snapshot.val();
        })  
      }
     
    })
    }
  
  ngOnInit() {
        firebase.database().ref(this.city + '/' + this.vehicleType + '/' + this.vehicleName + '/ParkingAddress/' + this.vendorId )
        .on("value", (snapshot) => {
          this.vehicleData = snapshot.val();
          let vehicleCount = parseInt(this.vehicleData.VehiclesCount);
          this.vehicleArray = new Array(vehicleCount);
          this.amountPerHour = parseInt(this.vehicleData.PricePerHour);
          this.amountPerDay = parseInt(this.vehicleData.PricePerDay);
        }, (errorObject) => {
          console.log("The read failed: " + errorObject.code);
        });
  }

  selectOption(){
    this.total_amount = ((this.days*this.amountPerDay)+(this.hours*this.amountPerHour)) * this.vehicleCount;
  }

  bookVehicle(){

    let user = firebase.auth().currentUser;
     if(user){
        let today_date = new Date().toLocaleDateString();
        let fd  = new Date(this.date_from_mill);
        let td  = new Date(this.date_to_mill); 
        firebase.database().ref('Bookings/').push({
          VendorUid : this.vehicleData.VendorUid,
          UserUid: user.uid,
          Vendor: this.vehicleData.VendorName,
          ParkingAddress: this.vehicleData.Address,
          TotalAmount : this.total_amount,
          amount_paid : this.amount_paying,
          amount_remain : this.amount_left,
          AvailableFromDate : fd.toLocaleDateString(),
          AvailableToDate : td.toLocaleDateString(),
          BookedNoOfVehicles : this.vehicleCount,
          VehicleName: this.vehicleName,
          PricePerHour: this.vehicleData.PricePerHour,
          PricePerDay: this.vehicleData.PricePerDay,
          CustomerPhoneNo: this.userData.PhoneNumber,
          CustomerAddress: this.userData.address,
          City : this.city,
          UserName: this.userData.Name,
          CustaadharNo: this.userData.aadharno,
          BookingDate : today_date,
          // VehiclePhoto: this.vehicleData.VehiclePhoto,
        }).then((snap) => {
          const key = snap.key;
          firebase.database().ref('Users/'+user.uid+'/Bookings/'+key).set({
            VendorUid : this.vehicleData.VendorUid,
            UserUid: user.uid,
            Vendor: this.vehicleData.VendorName,
            ParkingAddress: this.vehicleData.Address,
            TotalAmount : this.total_amount,
            amount_paid : this.amount_paying,
            amount_remain : this.amount_left,
            AvailableFromDate : fd.toLocaleDateString(),
            AvailableToDate : td.toLocaleDateString(),
            BookedNoOfVehicles : this.vehicleCount,
            VehicleName: this.vehicleName,
            PricePerHour: this.vehicleData.PricePerHour,
            PricePerDay: this.vehicleData.PricePerDay,
            CustomerPhoneNo: this.userData.PhoneNumber,
            CustomerAddress: this.userData.address,
            City : this.city,
            UserName: this.userData.Name,
            CustaadharNo: this.userData.aadharno,
            BookingDate : today_date,
            // VehiclePhoto: this.vehicleData.VehiclePhoto,
          }).then(() => {
            alert('Vehicle added to Cart ! go for Payment');
            window.location.href="https://protected-retreat-34115.herokuapp.com/paywithpaytm?amount="+this.amount_paying;
          }).catch((err) => {
            console.log(err);
          })
        })
        
      }else{
        alert('Please Login To book your vehicle!');
        this.router.navigate(['/login']);
      }
  
  }
 
  onDateSelectFrom(e : Date){
    this.date_from_mill = e.getTime();
  }

  onDateSelectTo(e: Date){
    this.date_to_mill = e.getTime();
    let hrs = this.getHours(this.date_from_mill,this.date_to_mill);
    this.days = Math.floor(hrs/24);
    this.hours = Math.round(hrs%24);
    this.getTotalCost();
  }

  getTotalCost(){
    this.total_amount = ((this.days*this.amountPerDay)+ (this.hours*this.amountPerHour)) * this.vehicleCount;
  }
 
  selectPerPaying(){
    this.amount_paying = Math.floor(this.total_amount*((this.perCentagePaying)/100));
    this.amount_left = this.total_amount - this.amount_paying;
  }

  getHours(d1,d2){
    var diff = d2-d1;
    diff  = diff/1000/60/60;
    return diff;
  }  
}

