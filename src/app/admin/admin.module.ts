import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdloginComponent } from './adlogin/adlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VerifyvendorsComponent } from './verifyvendors/verifyvendors.component';
import { BookingstodayComponent } from './bookingstoday/bookingstoday.component';
import { CreatecoupanComponent } from './createcoupan/createcoupan.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserbookingsComponent } from './userbookings/userbookings.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorlistingsComponent } from './vendorlistings/vendorlistings.component';
import { VendorbookingComponent } from './vendorbookings/vendorbookings.component';
import { VehicleeditComponent } from './vehicleedit/vehicleedit.component';
import { VerifyvendorComponent } from './verifyvendor/verifyvendor.component';
import { VendorlistingsvehicleComponent } from './vendorlistingsvehicle/vendorlistingsvehicle.component';
import { UserbookingsvehicleComponent } from './userbookings/userbookingsvehicle/userbookingsvehicle.component';
import { VendorbookingsvehicleComponent } from './vendorbookings/vendorbookingsvehicle/vendorbookingsvehicle.component';
import { VerifydetailComponent } from './verifydetail/verifydetail.component';
import { BookingstodayvehicleComponent } from './bookingstoday/bookingstodayvehicle/bookingstodayvehicle.component';
import { CreateadminComponent } from './createadmin/createadmin.component';

@NgModule({
  declarations: [AdloginComponent, AdminsidebarComponent, AdmindashboardComponent, VehicleComponent, VehiclesComponent, UsersComponent, VendorsComponent, VerifyvendorsComponent, BookingstodayComponent, CreatecoupanComponent, UserComponent, UserprofileComponent, UserbookingsComponent, VendorComponent, VendorlistingsComponent, VendorbookingComponent, VehicleeditComponent, VerifyvendorComponent, VendorlistingsvehicleComponent, UserbookingsvehicleComponent, VendorbookingsvehicleComponent, VerifydetailComponent, BookingstodayvehicleComponent, CreateadminComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
