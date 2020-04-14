import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  
  location : string;
  date; 
  duration;
  vehicle_type: string;
  passengers_count;

  cities : any = [];

  defaultVehicleType = '';
  vehicles: any = [];
  trips: any[];
  showError : boolean = false;
  showTripError : boolean = false;
  search_help = true;
  adventure_form : boolean = false;
  selectedCity : string = 'Mumbai';

  constructor(private route : ActivatedRoute,private http : HttpClient) {
   }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      if(params.type == 'Bikes'){
        this.adventure_form = false;
        this.vehicle_type = 'Bikes';
        
      }else if(params.type == 'Cars with drivers'){
        this.adventure_form = false;
        this.vehicle_type = 'Cars with drivers';
        
      }else if(params.type == 'Self drive cars'){
        this.adventure_form = false;
        this.vehicle_type = 'Self drive cars';
        
      }else if(params.type == 'trips'){
        this.adventure_form = true;
        this.vehicle_type = 'Adventurous Trip';
      }


      if(params.type == undefined){
        this.vehicle_type = 'Bikes';
        
      }
    });
    
    let apiUrl = '../../../assets/json/cities.json';
    this.http.get(apiUrl).subscribe(res  => {
      this.cities = res;
    })
  }

  
  findVehicles() {
    let city = this.selectedCity;
    this.vehicles= [];
    firebase.database().ref(city +'/'+this.vehicle_type+'/')
    .on("value", (snapshot) => {

      if(snapshot.val() != null){
            let vehicles = snapshot.val();
          Object.keys(vehicles).forEach((key) => {
            let vehicleName = key;
            let vehicle = vehicles[key]['ParkingAddress'];
            Object.keys(vehicle).forEach((Parkey) => {
              let mainVehicle = vehicle[Parkey];
              mainVehicle.City = this.selectedCity;
              mainVehicle.VehicleType = this.vehicle_type;
              mainVehicle.VehicleName = vehicleName;
              mainVehicle.vehicleLocation = Parkey;
              this.vehicles.push(mainVehicle); 
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
