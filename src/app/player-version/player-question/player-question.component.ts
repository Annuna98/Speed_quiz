import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {SocketioService} from "../../socketio.service";

@Component({
  selector: 'app-player-question',
  templateUrl: './player-question.component.html',
  styleUrls: ['./player-question.component.css', '../../app.component.css']
})
export class PlayerQuestionComponent implements OnInit {
  key: string;
  questionId;
  listOfQuestion = [];
  text: string;
  url : SafeUrl;
  timeLeft: number = 60;
  interval;
  currentUser: string;

  constructor(private route:ActivatedRoute, private _sanitizer: DomSanitizer, private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    this.key = localStorage.getItem('session');
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.listOfQuestion = JSON.parse(localStorage.getItem('questions'));

    for (let i = 0; i < this.listOfQuestion.length; i++){
      if(this.listOfQuestion[i].id == this.questionId){
        this.text = this.listOfQuestion[i].text;
        this.url = this._sanitizer.bypassSecurityTrustUrl("http://192.168.1.130:1337" + this.listOfQuestion[i].media[0].url);

        break;
      }
    }

    this.interval = setInterval(() => {
      if (this.timeLeft > 0){
        this.timeLeft --;
      } else if (this.timeLeft == 0){
        console.log('HERE');
        clearInterval(this.interval);
        this.socketService.sendHand(this.currentUser, this.key);
        this.router.navigate(['players/question/'+ this.questionId +'/order']);
        this.timeLeft = -1;
        return;
      }
    }, 1000);

  }

  raiseTheHand() {
    this.socketService.sendHand(this.currentUser, this.key);
    this.router.navigate(['players/question/'+ this.questionId + '/order']);
  }
}
