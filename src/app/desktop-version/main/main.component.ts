import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import {SocketioService} from "../../socketio.service";
import {Router} from "@angular/router";

export class UserKeys {
  constructor(public key: string) {}
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../app.component.css']
})
export class MainComponent implements OnInit {
  public key: string;
  sessionKey: string;
  sessionKeys: string[] = [];
  socket: SocketIOClient.Socket;


  constructor(private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('question from server', '');

    this.socketService.getSessionForMainPage().subscribe((sesKey: string) => {
      localStorage.setItem('questions', JSON.stringify(JSON.parse(sesKey).data.game.questions));
      console.log(JSON.parse(localStorage.getItem('questions')).map((question) => question.id));
      console.log("sesKey: ", JSON.parse(sesKey).data.game.questions);
      if (JSON.parse(sesKey).success){
        localStorage.setItem('session', this.key);
        this.router.navigate(['/connecting']);
      }
    });
    this.socketService
        .getSession()
        .subscribe((sessionKey: string) => {
          this.sessionKey = sessionKey;
        });


  }



  ValidForm() {
    if (this.key == this.sessionKey){
      console.log("key: " + this.key);
      console.log("sessionKey: " + this.sessionKey);
      return true;
    }
    return false;
  }


  sendSession() {
    this.socketService.sendSession(this.key);
    // this.socketService.sendChangePage(this.key, 'true', null);
  }

}
