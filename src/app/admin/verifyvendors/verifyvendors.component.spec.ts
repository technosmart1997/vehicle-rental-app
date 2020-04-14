import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyvendorsComponent } from './verifyvendors.component';

describe('VerifyvendorsComponent', () => {
  let component: VerifyvendorsComponent;
  let fixture: ComponentFixture<VerifyvendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyvendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
