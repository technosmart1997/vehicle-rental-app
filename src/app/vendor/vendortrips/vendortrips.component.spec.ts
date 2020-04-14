import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortripsComponent } from './vendortrips.component';

describe('VendortripsComponent', () => {
  let component: VendortripsComponent;
  let fixture: ComponentFixture<VendortripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendortripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
