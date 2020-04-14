import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-tripbookings',
  templateUrl: './tripbookings.component.html',
  styleUrls: ['./tripbookings.component.scss']
})
export class TripbookingsComponent implements OnInit {
  user_id;
  vehicles : any=[];
  showError : boolean = false;

  constructor(private route : ActivatedRoute) {
    this.getProducts();
   }

  ngOnInit() {
  }

  getProducts() {
    let user_id = firebase.auth().currentUser.uid;
    // console.log(user_id);
    // firebase.firestore().collection("tripbooked").where('customer' ,'==', user_id)
    // .get().then((querySnapshot) => {
    //   this.vehicles = querySnapshot.docs;
    //   if(this.vehicles.length <= 0){
    //     this.showError = true;
    //   }else{
    //     this.showError = false;
    //   }
    // }).catch((err) => {
    //   console.log(err);
    // })
    // firebase.database().ref('Users/'+user_id+'/Bookings/').on("value",(snapshot) => {
    //   snapshot.forEach((childSnapshot) => {
    //     var item = childSnapshot.val();
    //     item.key = childSnapshot.key;

    //     this.vehicles.push(item);
        
    //   })
    // })
  }

  onDelete(){
    //refresh the list of posts
    this.vehicles = [];
    this.getProducts();
  }

}
