import { Component, OnInit ,ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-tripupload',
  templateUrl: './tripupload.component.html',
  styleUrls: ['./tripupload.component.scss']
})

export class TripuploadComponent implements OnInit {
  pic:string;
  myForm: FormGroup;
  from ;
  to ;
  cities : any = [];
  settings = {
    bigBanner: true,
    format: 'dd-MM-yyyy',
    defaultOpen: false  
  } 
  @ViewChild('search') public searchElement: ElementRef;


  constructor(private http : HttpClient, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private fb: FormBuilder, public activatedRoute: ActivatedRoute, public router: Router) { 
    
    this.myForm = this.fb.group({
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
            console.log(userId)
            firebase.database().ref(signupform.value.city+'/Adventurous Trip/'+signupform.value.vehicleName).set({
              NoOfVehiclesAvailable: signupform.value.vehicleNo,
              VehiclePhoto:'test/'+this.pic,
            }).then(() => {
              firebase.database().ref(signupform.value.city+'/Adventurous Trip/'+signupform.value.vehicleName+'/ParkingAddress').push({
                Address: signupform.value.address,
                NoOfVehicles: signupform.value.vehicleNo,
                PricePerDay: signupform.value.priceDay,
                PricePerHour: signupform.value.priceHour,
                VendorName: firebase.auth().currentUser.displayName,
                VendorUid: userId,
                isVehicleBlocked: false,
                created: firebase.database.ServerValue.TIMESTAMP,
                from: this.from,
                to: this.to,
              }).then((snap) => {
                const key = snap.key;
                firebase.database().ref('Vendors/'+ userId +'/UploadedVehicles/'+key).set({
                  VehicleType: 'Adventurous Trip',
                  NoOfVehicles: signupform.value.vehicleNo,
                  VehicleName:signupform.value.vehicleName,
                  PricePerDay: signupform.value.priceDay,
                  PricePerHour: signupform.value.priceHour,
                  ParkingAddress: signupform.value.address,
                  City: signupform.value.city,
                  from: this.from,
                  to: this.to,
                  VehiclePhoto:'test/'+this.pic,
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
      this.pic = data.metadata.name;
      console.log(this.pic);
    })


  }
}
