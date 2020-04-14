import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-customerproduct',
  templateUrl: './customerproduct.component.html',
  styleUrls: ['./customerproduct.component.scss','../../common/commonstyle.scss']
})


export class CustomerproductComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  vendorId ;
  vehicleData;
  city;
  type;
  vehicleName : string;
  user:any={};
  constructor(private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.vendorId = this.vehicle.vehicleLocation;
    this.city = this.vehicle.City;
    this.type = this.vehicle.VehicleType;
    this.vehicleName = this.vehicle.VehicleName;
    this.vehicleData = this.vehicle;
    this.user = firebase.auth().currentUser;
  }


  moreDetail(){
    this.router.navigate(['../','vehicle-detail',this.city, this.type , this.vehicleName , this.vendorId ],  { relativeTo: this.route });
  }

}
