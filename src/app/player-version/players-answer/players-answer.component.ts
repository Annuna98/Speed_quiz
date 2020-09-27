import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-players-answer',
  templateUrl: './players-answer.component.html',
  styleUrls: ['./players-answer.component.css', '../../app.component.css']
})
export class PlayersAnswerComponent implements OnInit {
  answer: string;
  key: string;
  questionId;

  constructor(private socketService: SocketioService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.key = localStorage.getItem('session');
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    // this.socketService.getValidate()
    //     .subscribe((message: string) => {
    //       this.answer = message;
    //     });

    // this.socketService.getChangePage()
    //     .subscribe((ch: string) => {
    //       if (JSON.parse(ch).success){
    //         this.router.navigate(['players/question/' + JSON.parse(ch).data]);
    //       } else {
    //         this.router.navigate(['end']);
    //       }
    //     });

      this.socketService.getQuestionId()
          .subscribe((question: string) => {
              //console.log(JSON.parse(question));
              if(JSON.parse(question).success){
                  this.router.navigate(['players/question/' + JSON.parse(question).data]);
              }
              // this.questionFromServer = JSON.parse(question);
          });


      this.socketService.getChangePage()
          .subscribe((ch: string) => {
              if (!JSON.parse(ch).success){
                  this.router.navigate(['end']);
              }
          });
  }

}
