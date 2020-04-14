import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PhoneLoginComponent } from './pages/phone-login/phone-login.component';
import { AdloginComponent } from './admin/adlogin/adlogin.component';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { VendorcreateaccountComponent } from './vendor/vendorcreateaccount/vendorcreateaccount.component';
import { VendorprofileComponent } from './vendor/vendorprofile/vendorprofile.component';
import { VendordashboardComponent } from './vendor/vendordashboard/vendordashboard.component';
import { VendorservicesComponent } from './vendor/vendorservices/vendorservices.component';
import { VehicleDetailComponent } from './vendor/vehicle-detail/vehicle-detail.component';
import { VendoruploadComponent } from './vendor/vendorupload/vendorupload.component';
import { VendoruserprofileComponent } from './vendor/vendoruserprofile/vendoruserprofile.component';
import { VendorbookingsComponent } from './vendor/vendorbookings/vendorbookings.component';
import { VendortodaybookingsComponent } from './vendor/vendortodaybookings/vendortodaybookings.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { VehiclesComponent } from './admin/vehicles/vehicles.component';
import { AdminModule } from './admin/admin.module';
import { UsersComponent } from './admin/users/users.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { BookingstodayComponent } from './admin/bookingstoday/bookingstoday.component';
import { VendorsComponent } from './admin/vendors/vendors.component';
import { VerifyvendorsComponent } from './admin/verifyvendors/verifyvendors.component';
import { CreatecoupanComponent } from './admin/createcoupan/createcoupan.component';
import { UserbookingsComponent } from './admin/userbookings/userbookings.component';
import { VendorlistingsComponent } from './admin/vendorlistings/vendorlistings.component';
import { VehicleeditComponent } from './admin/vehicleedit/vehicleedit.component';
import { CustomerdashboardComponent } from './pages/customerdashboard/customerdashboard.component';
import { CustomerprofileComponent } from './pages/customerprofile/customerprofile.component';
import { CustomercreateaccountComponent } from './pages/customercreateaccount/customercreateaccount.component';
import { ProductmoredetailComponent } from './pages/productmoredetail/productmoredetail.component';
import { VendorbookingComponent } from './admin/vendorbookings/vendorbookings.component';
import { TripuploadComponent } from './vendor/tripupload/tripupload.component';
import { SavedComponent } from './pages/saved/saved.component';
import { CustomerbookingsComponent } from './pages/customerbookings/customerbookings.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { VendortripsComponent } from './vendor/vendortrips/vendortrips.component';
import { TripdetailComponent } from './pages/tripdetail/tripdetail.component';
import { TripbookingsComponent } from './pages/tripbookings/tripbookings.component';
import { VerifydetailComponent } from './admin/verifydetail/verifydetail.component';
import { VendorErrorComponent } from './vendor/vendor-error/vendor-error.component';
import { CreateadminComponent } from './admin/createadmin/createadmin.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',       component: ComponentsComponent },
    { path: 'login',       component: PhoneLoginComponent },
    { path: 'user-create-account', component : CustomercreateaccountComponent},
    { path: 'user-profile', component : CustomerprofileComponent },
    { path: 'customer-dashboard/:cid' , component: CustomerdashboardComponent , children : [
        { path: '', redirectTo :'shopping-cart' , pathMatch : 'full'},
        { path: 'shopping-cart', component: ShoppingCartComponent},
        { path: 'saved-vehicles' , component : SavedComponent},
        { path: 'profile' , component : CustomerProfileComponent},
        { path: 'customer-bookings' , component : CustomerbookingsComponent},
        { path: 'trip-detail/:tripid' , component : TripdetailComponent},
        { path: 'trip-bookings' , component: TripbookingsComponent},
        { path : 'vehicle-detail/:city/:type/:vname/:vendor_id' , component : ProductmoredetailComponent},
    ]},
   
    { path: 'adlogin', component: AdloginComponent },
    { path : 'admin-dashboard', component : AdmindashboardComponent , children : [
        { path : '', redirectTo :'vehicles' ,pathMatch : 'full'},
        { path : 'vehicles' , component : VehiclesComponent},
        { path : 'create-admin' , component : CreateadminComponent },
        { path : 'vehicle-edit/:city/:type/:vname/:vehicle_id/:vendor_id' , component : VehicleeditComponent},
        { path : 'users' , component : UsersComponent},
        { path : 'user-profile/:userid' , component:UserprofileComponent},
        { path : 'user-bookings/:userid', component : UserbookingsComponent},
        { path : 'today-bookings' , component : BookingstodayComponent},
        { path : 'vendors' , component : VendorsComponent },
        { path : 'vendor-listings/:vendorid' , component : VendorlistingsComponent },
        { path : 'vendor-bookings/:vendorid' , component : VendorbookingComponent },
        { path : 'verify-vendors' , component : VerifyvendorsComponent},
        { path : 'create-coupan' , component : CreatecoupanComponent},
        { path : 'verify-detail/:vid', component : VerifydetailComponent}
    ]
    }
    ,
    { path: 'vendor-login', component : VendorloginComponent},
    { path: 'vendor-create-account', component : VendorcreateaccountComponent},
    { path: 'vendor-profile', component : VendorprofileComponent},
    { path: 'vendor-dashboard' , component : VendordashboardComponent , children : [
        { path : '' , redirectTo : 'vendor-services' , pathMatch : 'full'},
        { path : 'vendor-services' , component : VendorservicesComponent},
        { path : 'vendor-notverified', component : VendorErrorComponent},
        { path : 'vendor-trips' , component : VendortripsComponent},
        { path : 'trip-upload' , component : TripuploadComponent},
        { path : 'vehicle-upload' , component : VendoruploadComponent},
        { path : 'profile' , component : VendoruserprofileComponent},
        { path : 'bookings' , component : VendorbookingsComponent},
        { path : 'booking-today' , component : VendortodaybookingsComponent},
        { path : 'vehicle-detail/:vid' , component : VehicleDetailComponent}
      ]},
      
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AdminModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
