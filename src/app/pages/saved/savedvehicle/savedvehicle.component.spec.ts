import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedvehicleComponent } from './savedvehicle.component';

describe('SavedvehicleComponent', () => {
  let component: SavedvehicleComponent;
  let fixture: ComponentFixture<SavedvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
