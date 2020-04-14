import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyvendorComponent } from './verifyvendor.component';

describe('VerifyvendorComponent', () => {
  let component: VerifyvendorComponent;
  let fixture: ComponentFixture<VerifyvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
