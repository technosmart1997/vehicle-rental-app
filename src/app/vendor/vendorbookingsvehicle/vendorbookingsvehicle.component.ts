import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendorbookingsvehicle',
  templateUrl: './vendorbookingsvehicle.component.html',
  styleUrls: ['./vendorbookingsvehicle.component.scss','../../common/commonstyle.scss']
})
export class VendorbookingsvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  vehicle_id ;
  vehicleData;

  constructor(private router : Router,  private route : ActivatedRoute) { }

  ngOnInit() {
    this.vehicle_id = this.vehicle.id;
    this.vehicleData = this.vehicle;
  }

}
