import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbookingsComponent } from './customerbookings.component';

describe('CustomerbookingsComponent', () => {
  let component: CustomerbookingsComponent;
  let fixture: ComponentFixture<CustomerbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
