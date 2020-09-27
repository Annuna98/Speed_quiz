import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {SocketioService} from "../../socketio.service";

@Component({
  selector: 'app-question-admin',
  templateUrl: './question-admin.component.html',
  styleUrls: ['./question-admin.component.css', '../../app.component.css']
})
export class QuestionAdminComponent implements OnInit {
  key: string;
  questionId;
  listOfQuestion = [];
  text: string;
  url : SafeUrl;
  questionFromServer = [];


  constructor(private route:ActivatedRoute, private _sanitizer: DomSanitizer, private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
    this.key = localStorage.getItem('session');
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.listOfQuestion = JSON.parse(localStorage.getItem('questions'));
    //console.log(this.listOfQuestion);



    for (let i = 0; i < this.listOfQuestion.length; i++){
      if(this.listOfQuestion[i].id == this.questionId){
        this.text = this.listOfQuestion[i].text;
        this.url = this._sanitizer.bypassSecurityTrustUrl("http://192.168.1.130:1337" + this.listOfQuestion[i].media[0].url);

        break;
      }
    }






  }

  send() {

    this.socketService.sendIdOfQuestion(this.questionId, this.key);
    // alert('question: ' + this.questionId);

    this.socketService.getQuestionId()
        .subscribe((question: string) => {
          //console.log(JSON.parse(question));
          if(JSON.parse(question).success){
            this.router.navigate(['/admin/' + this.questionId +'/answers']);
          }
          // this.questionFromServer = JSON.parse(question);
        });

    //console.log(this.questionFromServer);
    // this.socketService.getQuestionId()
    //     .subscribe((question: string) => {
    //       this.questionFromServer = JSON.parse(question);
    //     });
    //
    // console.log(this.questionFromServer);

    // if(this.questionFromServer[0].success){
    //   console.log(this.questionFromServer);
    // }


    //localStorage.setItem('question from server', JSON.parse(this.socketService.getQuestionId()));

  }
}
