import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercreateaccountComponent } from './customercreateaccount.component';

describe('CustomercreateaccountComponent', () => {
  let component: CustomercreateaccountComponent;
  let fixture: ComponentFixture<CustomercreateaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercreateaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
