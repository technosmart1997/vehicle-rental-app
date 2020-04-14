import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
 
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-customersidebar',
  templateUrl: './customersidebar.component.html',
  styleUrls: ['./customersidebar.component.scss']
})
export class CustomersidebarComponent implements OnInit {

  constructor(private route :ActivatedRoute, public _router : Router) { }
  userId;
  user : any;
  firstName:string;
  lastName:string;
  show :boolean = true;
  ngOnInit() {
     this.userId = this.route.snapshot.params['cid'];
     firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.user = user.displayName;
          this.show = true;
        }else{
          this.show = false;
        }
     })
  }

  logout(){
    firebase.auth().signOut();
  }
}