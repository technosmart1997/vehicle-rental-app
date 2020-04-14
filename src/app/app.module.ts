import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WindowService } from './window.service';
import { AdminModule } from './admin/admin.module';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { VendorcreateaccountComponent } from './vendor/vendorcreateaccount/vendorcreateaccount.component';
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { VendordashboardComponent } from './vendor/vendordashboard/vendordashboard.component';

import { VendorsidebarComponent } from './vendor/vendorsidebar/vendorsidebar.component';
import { VendorvehicleComponent } from './vendor/vendorvehicle/vendorvehicle.component';
import { VehicleDetailComponent } from './vendor/vehicle-detail/vehicle-detail.component';
import { VendorservicesComponent } from './vendor/vendorservices/vendorservices.component';
import { VendoruploadComponent } from './vendor/vendorupload/vendorupload.component';

import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// import { ProfileComponent } from './vendor/profile/profile.component';
import { VendoruserprofileComponent } from './vendor/vendoruserprofile/vendoruserprofile.component';

import { AgmCoreModule } from '@agm/core';
import { AuthService } from './services/auth.service';
import { VendorbookingsComponent } from './vendor/vendorbookings/vendorbookings.component';
import { VendortodaybookingsComponent } from './vendor/vendortodaybookings/vendortodaybookings.component';
import { VendorbookingsvehicleComponent } from './vendor/vendorbookingsvehicle/vendorbookingsvehicle.component';
import { TripuploadComponent } from './vendor/tripupload/tripupload.component';
import { VendortodayvehicleComponent } from './vendor/vendortodaybookings/vendortodayvehicle/vendortodayvehicle.component';
import { VendortripsComponent } from './vendor/vendortrips/vendortrips.component';
import { VendortripComponent } from './vendor/vendortrips/vendortrip/vendortrip.component';
import { VendorErrorComponent } from './vendor/vendor-error/vendor-error.component';

let config = {
    apiKey: "AIzaSyA1i15017ICeisg1nIezi2nilpA3MjHCHg",
    authDomain: "webapp-f0687.firebaseapp.com",
    databaseURL: "https://webapp-f0687.firebaseio.com",
    projectId: "webapp-f0687",
    storageBucket: "webapp-f0687.appspot.com",
    messagingSenderId: "410039833875"
  };

  firebase.initializeApp(config);
  

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        VendorloginComponent,
        VendorcreateaccountComponent,
        VendorprofileComponent,
        VendordashboardComponent,
        VendorsidebarComponent,
        VendorvehicleComponent,
        VehicleDetailComponent,
        VendorservicesComponent,
        VendoruploadComponent,
        VendoruserprofileComponent,
        VendorbookingsComponent,
        VendortodaybookingsComponent,
        VendorbookingsvehicleComponent,
        TripuploadComponent,
        VendortodayvehicleComponent,
        VendortripsComponent,
        VendortripComponent,
        VendorErrorComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAKxBCLS03vMGLNjgrltiETgh3cpN1yaYg',
            libraries: ["places"]       
        }),
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        AngularDateTimePickerModule,
        ComponentsModule,
        PagesModule,
        HttpClientModule,
        AdminModule
    ],
    providers: [WindowService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
