import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-participants',
  templateUrl: './admin-participants.component.html',
  styleUrls: ['./admin-participants.component.css', '../../app.component.css']
})
export class AdminParticipantsComponent implements OnInit {
  key: string;
  obj = [];
  masQuestions = [];

  constructor(private route:ActivatedRoute, private socketService: SocketioService,private router: Router) { }

  ngOnInit(): void {

   // this.key = this.route.snapshot.paramMap.get('sessionId');
    this.key = localStorage.getItem('session');
    //this.obj = JSON.parse(localStorage.getItem('connected Users'));

    this.socketService.getPlayerName()
        .subscribe((playerName: string) => {
          this.obj = JSON.parse(playerName).data[0].participants.map((user) => user.name);
          localStorage.setItem('connected Users', JSON.stringify(JSON.parse(playerName).data[0].participants.map((user) => user.name)));
        });

    this.masQuestions = JSON.parse(localStorage.getItem('questions')).map((question) => question.id);
    //this.masQuestions = JSON.parse(localStorage.getItem('questions')[0]);
    // if (this.masQuestions.length != 0){

    // }

  }


  continue() {
    localStorage.setItem('item', '0');
    this.router.navigate(['admin/' + this.masQuestions[0]]);
  }
}
