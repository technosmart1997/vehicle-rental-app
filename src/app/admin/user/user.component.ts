import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss','../../common/commonstyle.scss']
})

export class UserComponent implements OnInit {
  @Input('user_detail') user;
  @Output('onDelete') onDelete = new EventEmitter;
  user_id ;
  userData;
  adminId;
  constructor(private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit() {
    this.user_id = this.user.key;
    this.userData = this.user;
    this.adminId = this.route.snapshot.params['uid'];
  }

  deleteUser(){
    firebase.database().ref('Users/'+this.user_id).remove().then(() => {
      this.onDelete.emit();
    });
  }

  userProfile(id){
    this.router.navigate(['../','user-profile', id  ], { relativeTo: this.route });
  }

  userBookings(id){
    this.router.navigate(['../','user-bookings', id  ], { relativeTo: this.route });
  }
}
