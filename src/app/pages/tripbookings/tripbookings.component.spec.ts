import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripbookingsComponent } from './tripbookings.component';

describe('TripbookingsComponent', () => {
  let component: TripbookingsComponent;
  let fixture: ComponentFixture<TripbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
