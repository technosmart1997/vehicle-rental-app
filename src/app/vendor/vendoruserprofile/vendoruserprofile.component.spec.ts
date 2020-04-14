import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruserprofileComponent } from './vendoruserprofile.component';

describe('VendoruserprofileComponent', () => {
  let component: VendoruserprofileComponent;
  let fixture: ComponentFixture<VendoruserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoruserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoruserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
