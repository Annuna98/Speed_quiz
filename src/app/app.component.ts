import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import {SocketioService} from "./socketio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpeedQuiz';
  game: string;
  games: string[] = [];


  constructor(private socketService: SocketioService) {}


  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
}
