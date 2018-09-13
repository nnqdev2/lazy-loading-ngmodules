import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPage1Component } from './order-page1.component';

describe('OrderPage1Component', () => {
  let component: OrderPage1Component;
  let fixture: ComponentFixture<OrderPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
