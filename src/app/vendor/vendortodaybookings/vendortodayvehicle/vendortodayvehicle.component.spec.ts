import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortodayvehicleComponent } from './vendortodayvehicle.component';

describe('VendortodayvehicleComponent', () => {
  let component: VendortodayvehicleComponent;
  let fixture: ComponentFixture<VendortodayvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendortodayvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortodayvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
