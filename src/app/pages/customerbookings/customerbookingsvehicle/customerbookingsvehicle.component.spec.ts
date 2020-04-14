import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbookingsvehicleComponent } from './customerbookingsvehicle.component';

describe('CustomerbookingsvehicleComponent', () => {
  let component: CustomerbookingsvehicleComponent;
  let fixture: ComponentFixture<CustomerbookingsvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerbookingsvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbookingsvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
