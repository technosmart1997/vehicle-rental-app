import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorErrorComponent } from './vendor-error.component';

describe('VendorErrorComponent', () => {
  let component: VendorErrorComponent;
  let fixture: ComponentFixture<VendorErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
