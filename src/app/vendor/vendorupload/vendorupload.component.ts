import { Component, OnInit ,ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-vendorupload',
  templateUrl: './vendorupload.component.html',
  styleUrls: ['./vendorupload.component.scss']
})


export class VendoruploadComponent implements OnInit {
  myForm: FormGroup;
  @ViewChild('search') public searchElement: ElementRef;

  date: Date = new Date();
  selectedCity : string = 'Mumbai'; 
  veh:string;
  price;
  from ;
  to ;
  address;
  value;
  cities : any = [];
  
  settings = {
    bigBanner: true,
    format: 'dd-MM-yyyy',
    defaultOpen: false
}  
  constructor(private http: HttpClient,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private fb: FormBuilder, public activatedRoute: ActivatedRoute, public router: Router) { 

    this.myForm = this.fb.group({
      vehicleType : ['Bikes'],
      vehicleName : ['',[Validators.required]],
      vehicleNo: ['',[Validators.required]],
      priceHour: ['', [Validators.required]],
      priceDay: ['', Validators.required],
      address :  ['', Validators.required],
      city : ['Mumbai',[Validators.required]],
    });
  }

  ngOnInit() {

    let apiUrl = '../../../assets/json/cities.json';
    this.http.get(apiUrl).subscribe(res  => {
      this.cities = res;
    }) 

    this.mapsAPILoader.load().then(
      () => {
       let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

        autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if(place.geometry === undefined || place.geometry === null ){
          return;
         }
        });
        });
      }
         );
  }

  onSubmit(signupform){
    if (signupform.dirty && signupform.valid) {
      let userId = firebase.auth().currentUser.uid;
      
      firebase.database().ref(signupform.value.city+'/'+signupform.value.vehicleType+'/'+signupform.value.vehicleName).set({
                NoOfVehiclesAvailable: signupform.value.vehicleNo, 
                VehiclePhoto:'test/'+this.veh, 
              }).then(() => {
                firebase.database().ref(signupform.value.city+'/'+signupform.value.vehicleType+'/'+signupform.value.vehicleName+'/ParkingAddress').push({
                  Address: this.address,
                  PricePerDay: signupform.value.priceDay,
                  PricePerHour: signupform.value.priceHour,
                  NoOfVehicles: signupform.value.vehicleNo,
                  created: firebase.database.ServerValue.TIMESTAMP,
                  From: this.from,
                  To: this.to,
                  VendorName: firebase.auth().currentUser.displayName,
                  VendorUid: userId,
                  isVehicleBlocked: false
                }).then((snap) => {
                  const key = snap.key;
                  firebase.database().ref('Vendors/'+ userId +'/UploadedVehicles/'+key).set({
                    VehicleType: signupform.value.vehicleType,
                    NoOfVehicles: signupform.value.vehicleNo,
                    VehicleName:signupform.value.vehicleName,
                    PricePerDay: signupform.value.priceDay,
                    PricePerHour: signupform.value.priceHour,
                    ParkingAddress: this.address,
                    City: signupform.value.city,
                    from: this.from,
                    to: this.to,
                    VehiclePhoto:'test/'+this.veh,
                    isVehicleBlocked: false,
                    isVehicleBooked: false
                  }).then(()=>{
                    alert("Vehicle Uploaded Successfully")
                    this.router.navigate(['/vendor-dashboard/vendor-services']);
                  }).catch((error)=>{
                    console.log('fnafnndfad');
                  })
                  
                })
              })
              
            
               
      }
      
    }
       
  


  uploadPic(e){
    
    console.log(e); 
    var storageRef = firebase.storage().ref();

    storageRef.child('test/'+e.target.files[0].name).put(e.target.files[0]).then(data=>{
      console.log(data);
      this.veh = data.metadata.name;
      console.log(this.veh);
    })


  }
}
