import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SocketioService} from "../../socketio.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css', '../../app.component.css']
})
export class PlayersComponent implements OnInit {
  public key: string;
  public connectedUsers = [];


  constructor(private routeActive:ActivatedRoute, private socketService: SocketioService, private router: Router) { }
  bankName:string;

  ngOnInit(): void {
    this.socketService.getSessionForMainPage().subscribe((sesKey: string) => {
      localStorage.setItem('questions', JSON.stringify(JSON.parse(sesKey).data.game.questions));
    });
    localStorage.setItem('question from server', '');
  this.socketService.getPlayerName()
      .subscribe((playerName: string) => {
        if (JSON.parse(playerName).success){

          this.connectedUsers = JSON.parse(playerName).data[0].participants.map((user) => user.name)

          localStorage.setItem('connected Users', JSON.stringify(this.connectedUsers));
          console.log(localStorage.getItem('connected Users'));

          this.router.navigate(['/players/' + this.bankName + '/participants']);
        } else alert('Имя уже занято');
      });

    this.socketService.getSessionForMainPage().subscribe((sesKey: string) => {
      localStorage.setItem('questions', JSON.stringify(JSON.parse(sesKey).data.game.questions));
      //console.log(JSON.stringify(JSON.parse(sesKey).data.questions));
    });
  }

  sendName(){
    this.bankName = this.routeActive.snapshot.paramMap.get('sessionId');
    localStorage.setItem('session', this.bankName);
    if(this.key.length > 9){
      alert('Пожалуйста, введите имя, не длинее 9 символов!');
    } else{
      this.socketService.sendNameOfPlayer(this.bankName, this.key);
      console.log("name: " + this.key);
      localStorage.setItem('currentUser', this.key);
    }

    // this.router.navigate(['/players/:sessionId/participants']);



  }

}
