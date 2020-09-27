import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SocketioService} from "../../socketio.service";


@Component({
  selector: 'app-players-participants',
  templateUrl: './players-participants.component.html',
  styleUrls: ['./players-participants.component.css', '../../app.component.css']
})
export class PlayersParticipantsComponent implements OnInit {
  key: string;
  obj = [];

  constructor(private route:ActivatedRoute, private socketService: SocketioService, private router: Router) {

  }

  ngOnInit(): void {

    this.key = this.route.snapshot.paramMap.get('sessionId');
    this.obj = JSON.parse(localStorage.getItem('connected Users'));


    this.socketService.getPlayerName()
        .subscribe((playerName: string) => {
          this.obj = JSON.parse(playerName).data[0].participants.map((user) => user.name);

        });

    this.socketService.getQuestionId()
        .subscribe((questionId: string) => {
            if(JSON.parse(questionId).success){

                this.router.navigate(['players/question/' + JSON.parse(questionId).data]);
            }

        });



    // if (JSON.parse(this.question).success){
    //   this.router.navigate(['players/question/' + this.question.data]);
    // }
  }

}
