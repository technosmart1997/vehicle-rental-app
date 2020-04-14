import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripuploadComponent } from './tripupload.component';

describe('TripuploadComponent', () => {
  let component: TripuploadComponent;
  let fixture: ComponentFixture<TripuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
