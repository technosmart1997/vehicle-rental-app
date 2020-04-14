import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingstodayvehicleComponent } from './bookingstodayvehicle.component';

describe('BookingstodayvehicleComponent', () => {
  let component: BookingstodayvehicleComponent;
  let fixture: ComponentFixture<BookingstodayvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingstodayvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingstodayvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
