import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verifyvendor',
  templateUrl: './verifyvendor.component.html',
  styleUrls: ['./verifyvendor.component.scss','../../common/commonstyle.scss']
})
export class VerifyvendorComponent implements OnInit {

  @Input('vendor_detail') vendor;
  constructor(private router : Router, private route : ActivatedRoute) { }
  vendor_id;
  vendorData;

  ngOnInit() {
    this.vendor_id = this.vendor.key;
    this.vendorData = this.vendor;
  }

  moreDetail(){
      console.log(this.vendor_id);
      this.router.navigate(['../','verify-detail',this.vendor_id], { relativeTo: this.route });
  }

}
