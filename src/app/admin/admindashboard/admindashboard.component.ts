import { Component, OnInit } from '@angular/core';

import * as firebase from '../../../../node_modules/firebase/app';
import '../../../../node_modules/firebase/auth';
import '../../../../node_modules/firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router :Router) { 

  }

  ngOnInit() {
  }

}
