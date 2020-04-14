import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorvehicleComponent } from './vendorvehicle.component';

describe('VendorvehicleComponent', () => {
  let component: VendorvehicleComponent;
  let fixture: ComponentFixture<VendorvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
