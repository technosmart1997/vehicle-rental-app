import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorlistingsvehicleComponent } from './vendorlistingsvehicle.component';

describe('VendorlistingsvehicleComponent', () => {
  let component: VendorlistingsvehicleComponent;
  let fixture: ComponentFixture<VendorlistingsvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorlistingsvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorlistingsvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
