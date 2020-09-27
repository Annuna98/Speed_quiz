import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersOrderOfAnswersComponent } from './players-order-of-answers.component';

describe('PlayersOrderOfAnswersComponent', () => {
  let component: PlayersOrderOfAnswersComponent;
  let fixture: ComponentFixture<PlayersOrderOfAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersOrderOfAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersOrderOfAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
