import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {SocketioService} from "../../socketio.service";
import { timer } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css', '../../app.component.css']
})
export class QuestionComponent implements OnInit {
  questionId;
  listOfQuestion = [];
  text: string;
  url : SafeUrl;
  timeLeft: number = 60;
  interval;
  raisedTheHand = [];

  constructor(private route:ActivatedRoute, private _sanitizer: DomSanitizer, private router: Router, private socketService: SocketioService) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.listOfQuestion = JSON.parse(localStorage.getItem('questions'));


    for (let i = 0; i < this.listOfQuestion.length; i++){
      console.log('listOfQuestion.id: ' + this.listOfQuestion[i].id + 'questionId: ' + this.questionId);
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
        //this.router.navigate(['connecting/order/' + this.questionId]);
        this.timeLeft = 0;
      }
    }, 1000);

    this.socketService.getChangePage()
        .subscribe((change: string) => {
          if (JSON.parse(change).success){
            this.router.navigate(['connecting/order/resultsAnswer/' + this.questionId]);
          }

        });


    this.socketService.getHand()
        .subscribe((hand: string) => {
          if (JSON.parse(hand).success){
            this.raisedTheHand.push(JSON.parse(hand).data);
          }
          console.log(hand);
        });

  }

}
