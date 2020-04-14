import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookingsvehicleComponent } from './userbookingsvehicle.component';

describe('UserbookingsvehicleComponent', () => {
  let component: UserbookingsvehicleComponent;
  let fixture: ComponentFixture<UserbookingsvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbookingsvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbookingsvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
