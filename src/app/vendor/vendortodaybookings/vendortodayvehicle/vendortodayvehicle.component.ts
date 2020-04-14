import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendortodayvehicle',
  templateUrl: './vendortodayvehicle.component.html',
  styleUrls: ['./vendortodayvehicle.component.scss','../../../common/commonstyle.scss']
})
export class VendortodayvehicleComponent implements OnInit {
  @Input('vehicle_detail') vehicle;
  vehicle_id ;
  vehicleData;

  constructor(private router : Router) { }

  ngOnInit() {
    this.vehicle_id = this.vehicle.key;
    this.vehicleData = this.vehicle;
    console.log(this.vehicleData);
  }

}
