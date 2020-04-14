import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortodaybookingsComponent } from './vendortodaybookings.component';

describe('VendortodaybookingsComponent', () => {
  let component: VendortodaybookingsComponent;
  let fixture: ComponentFixture<VendortodaybookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendortodaybookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortodaybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
