import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})

export class SavedComponent implements OnInit {

  user_id;
  vehicles : any[];
  showError : boolean = false;
  constructor(private route : ActivatedRoute) {
    //this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    let user_id = firebase.auth().currentUser.uid;
    // console.log(user_id);
    firebase.firestore().collection("rented").where('customer' ,'==', user_id)
    .get().then((querySnapshot) => {
      this.vehicles = querySnapshot.docs;
      if(this.vehicles.length <= 0){
        this.showError = true;
      }else{
        this.showError = false;
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  onDelete(){
    //refresh the list of posts
    this.vehicles = [];
    this.getProducts();
  }

}



