import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrls: ['./userbookings.component.scss']
})
export class UserbookingsComponent implements OnInit {

  user_id;
  vehicles :any=[];
  showError : boolean = false;
  constructor(private route : ActivatedRoute) {
    this.user_id = route.snapshot.params['userid'];
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    firebase.database().ref('Users/'+this.user_id+'/Bookings/').on("value", (snapshot) => {
      if(snapshot.val() != null){
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
  
          this.vehicles.push(item);
          
        })
      }else{
        this.showError = true;
      } 
    })
  }

  onDelete(){
    //refresh the list of posts
    this.vehicles = [];
    this.getProducts();
  }

}
