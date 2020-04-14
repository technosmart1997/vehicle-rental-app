import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
 
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.scss']
})
export class AdminsidebarComponent implements OnInit {

  constructor(private route :ActivatedRoute, public _router : Router) { }
  userId;
  username;
  email;
  ngOnInit() {

    firebase.database().ref('Admins/MainAdmin/').on("value",(snapshot) => {
      this.username = snapshot.val().Username;
      console.log(this.username)
    })
  }

  logout(){
    firebase.auth().signOut();
  }
}
