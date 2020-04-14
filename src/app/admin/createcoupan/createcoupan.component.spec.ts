import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecoupanComponent } from './createcoupan.component';

describe('CreatecoupanComponent', () => {
  let component: CreatecoupanComponent;
  let fixture: ComponentFixture<CreatecoupanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecoupanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecoupanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
