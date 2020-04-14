import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorservicesComponent } from './vendorservices.component';

describe('VendorservicesComponent', () => {
  let component: VendorservicesComponent;
  let fixture: ComponentFixture<VendorservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
