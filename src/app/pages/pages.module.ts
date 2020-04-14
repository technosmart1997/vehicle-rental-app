import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';


import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomersidebarComponent } from './customersidebar/customersidebar.component';
import { CustomercreateaccountComponent } from './customercreateaccount/customercreateaccount.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerproductComponent } from './customerproduct/customerproduct.component';
import { SearchformComponent } from './searchform/searchform.component';
import { ProductmoredetailComponent } from './productmoredetail/productmoredetail.component';
import { TripComponent } from './trip/trip.component';
import { SavedComponent } from './saved/saved.component';
import { CustomerbookingsComponent } from './customerbookings/customerbookings.component';
import { CustomerbookingsvehicleComponent } from './customerbookings/customerbookingsvehicle/customerbookingsvehicle.component';
import { SavedvehicleComponent } from './saved/savedvehicle/savedvehicle.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { TripdetailComponent } from './tripdetail/tripdetail.component';
import { TripbookingsComponent } from './tripbookings/tripbookings.component';
import { TripsComponent } from './tripbookings/trips/trips.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
	    ReactiveFormsModule,
        AngularDateTimePickerModule,
        RouterModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        ShoppingCartComponent,
        PhoneLoginComponent,
        CustomerdashboardComponent,
        CustomersidebarComponent,
        CustomercreateaccountComponent,
        CustomerprofileComponent,
        CustomerproductComponent,
        SearchformComponent,
        ProductmoredetailComponent,
        TripComponent,
        SavedComponent,
        CustomerbookingsComponent,
        CustomerbookingsvehicleComponent,
        SavedvehicleComponent,
        CustomerProfileComponent,
        PaymentComponent,
        TripdetailComponent,
        TripbookingsComponent,
        TripsComponent,
    ]
})
export class PagesModule { }
