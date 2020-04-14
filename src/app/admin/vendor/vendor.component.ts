import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss','../../common/commonstyle.scss']
})

export class VendorComponent implements OnInit {
  @Input('vendor_detail') vendor;
  @Output('onDelete') onDelete = new EventEmitter;
  // user_id ;
  vendorId;
  vendorData;
  // adminId;
  constructor(private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit() {
  
    this.vendorId = this.vendor.key;
    this.vendorData = this.vendor;
  }

  deleteVendor(){
      // firebase.firestore().collection("vendors").doc(this.vendor.id).delete().then(()=>{
      //   this.onDelete.emit();
      // });
      firebase.database().ref('Vendors/'+this.vendorId).remove().then(() => {
        this.onDelete.emit();
      });
  }

  openListings(id){
     this.router.navigate(['../','vendor-listings', id], { relativeTo: this.route });
  }

  vendorBookings(id){
    this.router.navigate(['../','vendor-bookings', id], { relativeTo: this.route });
  }
}
