import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-savedvehicle',
  templateUrl: './savedvehicle.component.html',
  styleUrls: ['./savedvehicle.component.scss','../../../common/commonstyle.scss']
})
export class SavedvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  @Output('onDelete') onDelete = new EventEmitter;
  vehicle_id ;
  vehicleData;

  constructor(private router : Router,  private route : ActivatedRoute) { }

  ngOnInit() {
    this.vehicle_id = this.vehicle.id;
    this.vehicleData = this.vehicle.data();
  
  }

  hirevehicle(){
    // Delete Vehicle Here
    
  }

}

