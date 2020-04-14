import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorbookingComponent } from './vendorbookings.component';

describe('VendorbookingsComponent', () => {
  let component: VendorbookingComponent;
  let fixture: ComponentFixture<VendorbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
