import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorbookingsvehicleComponent } from './vendorbookingsvehicle.component';

describe('VendorbookingsvehicleComponent', () => {
  let component: VendorbookingsvehicleComponent;
  let fixture: ComponentFixture<VendorbookingsvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorbookingsvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorbookingsvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
