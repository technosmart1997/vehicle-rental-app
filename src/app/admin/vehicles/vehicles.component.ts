import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {

  cities : any = [];
  vehicles : any = [];

  searchPlace : string;
  showError : boolean = false;
  selectedCity : string = 'Mumbai';
  vendorId : string = "";


  constructor(private http : HttpClient) {  
      this.getBikes();
    }


  ngOnInit() {
    let apiUrl = '../../../assets/json/cities.json';
    this.http.get(apiUrl).subscribe(res  => {
      this.cities = res;
    }) 
  }

  getBikes() {
    
  }

  onDelete(){
    //refresh the list of posts
    this.vehicles = [];
  }

  findVehicles(){
    let city = this.selectedCity;
    this.vehicles= [];
    firebase.database().ref(city +'/')
    .on("value", (snapshot) => {
      if(snapshot.val() != null){
        let vehicles = snapshot.val();
        Object.keys(vehicles).forEach((outerkey) => {
          Object.keys(vehicles[outerkey]).forEach((innerkey) =>{
            let value = vehicles[outerkey][innerkey];
            Object.keys(value['ParkingAddress']).forEach((parkey) =>{
              let mainObject = value['ParkingAddress'][parkey];
              mainObject.key = parkey;
              mainObject.VehicleType = outerkey;
              mainObject.VehicleName = innerkey;
              mainObject.city = this.selectedCity;
              this.vendorId = mainObject.vendorUid;
              this.vehicles.push(mainObject);
            })
  
          })
      });
      }else{
        this.showError = true;
      }
     
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
    }
}
