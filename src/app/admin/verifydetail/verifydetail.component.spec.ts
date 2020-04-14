import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifydetailComponent } from './verifydetail.component';

describe('VerifydetailComponent', () => {
  let component: VerifydetailComponent;
  let fixture: ComponentFixture<VerifydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
