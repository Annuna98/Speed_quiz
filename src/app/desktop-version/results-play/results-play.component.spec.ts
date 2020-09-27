import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPlayComponent } from './results-play.component';

describe('ResultsPlayComponent', () => {
  let component: ResultsPlayComponent;
  let fixture: ComponentFixture<ResultsPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
