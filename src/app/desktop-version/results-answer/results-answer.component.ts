import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-results-answer',
  templateUrl: './results-answer.component.html',
  styleUrls: ['./results-answer.component.css', '../../app.component.css']
})
export class ResultsAnswerComponent implements OnInit {
  connectedUsers = [];
    questionId;

  constructor(private socketService: SocketioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.socketService.getValidate()
        .subscribe((valid: string) => {
          if (JSON.parse(valid).success){
            this.connectedUsers.push(JSON.parse(valid).data);
            localStorage.setItem('results', JSON.stringify(this.connectedUsers));
          }
        });

      this.socketService.getQuestionId()
          .subscribe((question: string) => {
              //console.log(JSON.parse(question));
              if(JSON.parse(question).success){
                  this.router.navigate(['/connecting/question/' + JSON.parse(question).data]);
              }
              // this.questionFromServer = JSON.parse(question);
          });

    // this.socketService.getChangePage()
    //     .subscribe((ch: string) => {
    //         if (JSON.parse(ch).success){
    //             this.router.navigate(['connecting/question/' + JSON.parse(ch).data]);
    //         } else {
    //             this.router.navigate(['connecting/resultsGame']);
    //         }
    //     });

      this.socketService.getChangePage()
          .subscribe((ch: string) => {
              if (!JSON.parse(ch).success){
                  this.router.navigate(['connecting/resultsGame']);
              }
          });


  }

}
