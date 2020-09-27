import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './desktop-version/main/main.component';
import { AdminComponent } from './admin-version/admin/admin.component';
import { PlayersComponent } from './player-version/players/players.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuestionComponent } from './desktop-version/question/question.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConnectingComponent } from './desktop-version/connecting/connecting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { QRCodeModule } from 'angularx-qrcode';
import {MatSelectModule} from "@angular/material/select";
import { StartComponent } from './admin-version/start/start.component';
import {SocketioService} from "./socketio.service";
import { AdminParticipantsComponent } from './admin-version/admin-participants/admin-participants.component';
import { PlayersParticipantsComponent } from './player-version/players-participants/players-participants.component';
import { QuestionAdminComponent } from './admin-version/admin-question/question-admin.component';
import { PlayerQuestionComponent } from './player-version/player-question/player-question.component';
import { AdminAnswersComponent } from './admin-version/admin-answers/admin-answers.component';
import { AdminValidateAnswerComponent } from './admin-version/admin-validate-answer/admin-validate-answer.component';
import { PlayersOrderOfAnswersComponent } from './player-version/players-order-of-answers/players-order-of-answers.component';
import { OrderOfAnswersComponent } from './desktop-version/order-of-answers/order-of-answers.component';
import { ResultsAnswerComponent } from './desktop-version/results-answer/results-answer.component';
import { ResultsPlayComponent } from './desktop-version/results-play/results-play.component';
import { PlayersAnswerComponent } from './player-version/players-answer/players-answer.component';
import { EndGameComponent } from './admin-version/end-game/end-game.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'connecting', component: ConnectingComponent},
  {path: 'connecting/question/:questionId', component: QuestionComponent},
  // {path: 'connecting/order/:questionId', component: OrderOfAnswersComponent},
  {path: 'connecting/order/resultsAnswer/:questionId', component: ResultsAnswerComponent},
  {path: 'connecting/resultsGame', component: ResultsPlayComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/start', component: StartComponent},
  {path: 'admin/participants', component: AdminParticipantsComponent},
  {path: 'admin/:questionId', component: QuestionAdminComponent},
  {path: 'admin/:questionId/answers', component: AdminAnswersComponent},
  {path: 'admin/:questionId/validate', component: AdminValidateAnswerComponent},
  {path: 'players/:sessionId', component: PlayersComponent},
  {path: 'players/:sessionId/participants', component: PlayersParticipantsComponent},
  {path: 'players/question/:questionId', component: PlayerQuestionComponent},
  {path: 'players/question/:questionId/order', component: PlayersOrderOfAnswersComponent},
  {path: 'players/question/:questionId/order/answers', component: PlayersAnswerComponent},
  {path: 'end', component: EndGameComponent},
  {path: '**', component: NotFoundComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    PlayersComponent,
    QuestionComponent,
    NotFoundComponent,
    ConnectingComponent,
    StartComponent,
    AdminParticipantsComponent,
    PlayersParticipantsComponent,
    QuestionAdminComponent,
    PlayerQuestionComponent,
    AdminAnswersComponent,
    AdminValidateAnswerComponent,
    PlayersOrderOfAnswersComponent,
    OrderOfAnswersComponent,
    ResultsAnswerComponent,
    ResultsPlayComponent,
    PlayersAnswerComponent,
    EndGameComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    QRCodeModule,
    MatSelectModule,


  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
