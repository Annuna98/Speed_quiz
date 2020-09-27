import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {SocketioService} from "../../socketio.service";

@Component({
  selector: 'app-order-of-answers',
  templateUrl: './order-of-answers.component.html',
  styleUrls: ['./order-of-answers.component.css', '../../app.component.css']
})
export class OrderOfAnswersComponent implements OnInit {
  questionId;
  listOfQuestion = [];
  text: string;
  url : SafeUrl;
  raisedTheHand = [];

  constructor(private route:ActivatedRoute, private _sanitizer: DomSanitizer, private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.listOfQuestion = JSON.parse(localStorage.getItem('questions'));

    for (let i = 0; i < this.listOfQuestion.length; i++){
      if(this.listOfQuestion[i].id == this.questionId){
        this.text = this.listOfQuestion[i].text;
        this.url = this._sanitizer.bypassSecurityTrustUrl("http://192.168.1.130:1337" + this.listOfQuestion[i].media[0].url);

        break;
      }
    }

    this.socketService.getHand()
        .subscribe((hand: string) => {
          if (JSON.parse(hand).success){
            this.raisedTheHand = JSON.parse(hand).data;
          }
          console.log(hand);
        });

    this.socketService.getChangePage()
        .subscribe((change: string) => {
          if (JSON.parse(change).success){
            this.router.navigate(['connecting/order/resultsAnswer/' + this.questionId]);
          }

        });
  }

}
