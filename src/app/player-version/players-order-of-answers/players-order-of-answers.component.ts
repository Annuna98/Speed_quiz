import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-players-order-of-answers',
  templateUrl: './players-order-of-answers.component.html',
  styleUrls: ['./players-order-of-answers.component.css', '../../app.component.css']
})
export class PlayersOrderOfAnswersComponent implements OnInit {
    raisedTheHand = [];
    key: string;
    questionId;

  constructor(private socketService: SocketioService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.questionId = this.route.snapshot.paramMap.get('questionId');
      this.key = localStorage.getItem('session');
    this.socketService.getHand()
        .subscribe((hand: string) => {
            if (JSON.parse(hand).success){
                this.raisedTheHand.push(JSON.parse(hand).data);
            }
          console.log(hand);
        });

      this.socketService.getChangePage()
          .subscribe((change: string) => {
              if (JSON.parse(change).success){
                  this.router.navigate(['players/question/' + this.questionId + '/order/answers']);
              }

          });

  }

}
