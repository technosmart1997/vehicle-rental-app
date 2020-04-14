import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcreateaccountComponent } from './vendorcreateaccount.component';

describe('VendorcreateaccountComponent', () => {
  let component: VendorcreateaccountComponent;
  let fixture: ComponentFixture<VendorcreateaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorcreateaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
