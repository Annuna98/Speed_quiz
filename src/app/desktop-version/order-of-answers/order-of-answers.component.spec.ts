import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOfAnswersComponent } from './order-of-answers.component';

describe('OrderOfAnswersComponent', () => {
  let component: OrderOfAnswersComponent;
  let fixture: ComponentFixture<OrderOfAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOfAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOfAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
