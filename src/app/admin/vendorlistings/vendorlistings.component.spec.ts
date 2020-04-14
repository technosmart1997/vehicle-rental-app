import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorlistingsComponent } from './vendorlistings.component';

describe('VendorlistingsComponent', () => {
  let component: VendorlistingsComponent;
  let fixture: ComponentFixture<VendorlistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorlistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
