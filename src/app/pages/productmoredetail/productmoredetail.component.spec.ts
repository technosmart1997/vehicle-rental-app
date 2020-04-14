import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmoredetailComponent } from './productmoredetail.component';

describe('ProductmoredetailComponent', () => {
  let component: ProductmoredetailComponent;
  let fixture: ComponentFixture<ProductmoredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmoredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
