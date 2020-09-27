import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAnswerComponent } from './results-answer.component';

describe('ResultsAnswerComponent', () => {
  let component: ResultsAnswerComponent;
  let fixture: ComponentFixture<ResultsAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
