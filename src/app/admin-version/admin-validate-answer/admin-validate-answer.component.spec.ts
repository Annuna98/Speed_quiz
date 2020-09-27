import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminValidateAnswerComponent } from './admin-validate-answer.component';

describe('AdminValidateAnswerComponent', () => {
  let component: AdminValidateAnswerComponent;
  let fixture: ComponentFixture<AdminValidateAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminValidateAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminValidateAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
