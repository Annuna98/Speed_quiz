import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersParticipantsComponent } from './players-participants.component';

describe('PlayersParticipantsComponent', () => {
  let component: PlayersParticipantsComponent;
  let fixture: ComponentFixture<PlayersParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
