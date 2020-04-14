import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any = [];
  showError : boolean = false;

  constructor() {
    this.getUsers();
   }

  ngOnInit() {
  }

  getUsers() {

    firebase.database().ref("Users/").on("value", (snapshot) => {

      if(snapshot.val()!=null){
        snapshot.forEach((childSnapshot) => {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
  
          this.users.push(item);
        })
      }else{
        this.showError = true;
      }
     
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    })
  }

  onDelete(){
    //refresh the list of posts
    this.users = [];
    this.getUsers();
  }


}
