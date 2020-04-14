import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersidebarComponent } from './customersidebar.component';

describe('CustomersidebarComponent', () => {
  let component: CustomersidebarComponent;
  let fixture: ComponentFixture<CustomersidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
