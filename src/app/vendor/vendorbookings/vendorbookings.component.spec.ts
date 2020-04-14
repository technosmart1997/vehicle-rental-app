import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorbookingsComponent } from './vendorbookings.component';

describe('VendorbookingsComponent', () => {
  let component: VendorbookingsComponent;
  let fixture: ComponentFixture<VendorbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
