import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-connecting',
  templateUrl: './connecting.component.html',
  styleUrls: ['./connecting.component.css', '../../app.component.css']
})
export class ConnectingComponent implements OnInit {
  connectedUsers = [];
    question: string;




  public myAngularxQrCode: string = null;

  constructor (private socketService: SocketioService, private router: Router) {
    // console.log("sss " + socketService.session);
    let session = localStorage.getItem('session');
    this.myAngularxQrCode = 'http://192.168.1.130:4200/players/' + session;


  }


  ngOnInit(): void {
    //this.connectedUsers = JSON.parse(localStorage.getItem('connected Users'));
    this.socketService.getPlayerName()
        .subscribe((playerName: string) => {
          this.connectedUsers = JSON.parse(playerName).data[0].participants.map((user) => user.name);
        });

    this.socketService.getQuestionId()
        .subscribe((questionId: string) => {
          if(JSON.parse(questionId).success){

            this.router.navigate(['connecting/question/' + JSON.parse(questionId).data]);
          }

        });
    // if(window.localStorage.getItem('question from server').split(',')){
    //   this.router.navigate(['/connecting/question']);
    // }





    // this.socketService.getQuestionId()
    //     .subscribe((questionId: string) => {
    //       this.questions = questionId;
    //     });
    // console.log('question: ' + this.questions);
  }

}
