import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoruploadComponent } from './vendorupload.component';

describe('VendoruploadComponent', () => {
  let component: VendoruploadComponent;
  let fixture: ComponentFixture<VendoruploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoruploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoruploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
