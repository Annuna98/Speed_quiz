import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAnswerComponent } from './players-answer.component';

describe('PlayersAnswerComponent', () => {
  let component: PlayersAnswerComponent;
  let fixture: ComponentFixture<PlayersAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
