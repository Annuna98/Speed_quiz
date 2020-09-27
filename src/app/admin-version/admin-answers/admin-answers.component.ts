import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SocketioService} from "../../socketio.service";

@Component({
  selector: 'app-admin-answers',
  templateUrl: './admin-answers.component.html',
  styleUrls: ['./admin-answers.component.css', '../../app.component.css']
})
export class AdminAnswersComponent implements OnInit {
  key: string;
  questionId;
  raisedTheHand = [];

  constructor(private route:ActivatedRoute, private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
    this.key = localStorage.getItem('session');
    this.questionId = this.route.snapshot.paramMap.get('questionId');

      this.socketService.getHand()
          .subscribe((hand: string) => {
              if (JSON.parse(hand).success){
                  this.raisedTheHand.push(JSON.parse(hand).data);
              }
          });

  }

    validateAnswers() {
      this.socketService.sendChangePage(this.key, 'true', null);
        this.router.navigate(['admin/'+ this.questionId +'/validate']);
    }
}
