import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    loggedIn: boolean = false;
    user:any;
    userId : string;

    constructor(public location: Location, private element: ElementRef) {
        this.sidebarVisible = false;
        this.user = firebase.auth().currentUser;
        if(this.user){
          this.loggedIn = true;
          this.userId = this.user.uid;
        }
        else{
          this.loggedIn = false;
          this.userId = 'unauthorized';
        }
    
        firebase.auth().onAuthStateChanged((user)=>{
          this.user = user;
          if(user){
            this.loggedIn = true;
            this.userId = user.uid;
          }
          else{
            this.loggedIn = false;
            this.userId = 'unauthorized';
          }
    
        })

    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '/documentation' ) {
            return true;
        } else {
            return false;
        }
    }

    logout(){
        firebase.auth().signOut();
    }

    onToggle(){
        var el = document.getElementById("main_sidebar");
        el.classList.toggle("active"); 
    }
}
