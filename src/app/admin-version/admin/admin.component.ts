import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../app.component.css']
})

// export class GameNumb {
//
//   constructor(public game: string) {
//   }
//
// }
export class AdminComponent implements OnInit {

  game: string;


  games: string[] = ['Game 1', 'Game 2', 'Game 3'];
  numberGame: string;
  selectedItem: any;

  constructor(private socketService: SocketioService, private router: Router) {

  }

  // sendGame(){
  //
  //   //this.socket.emit('start', { gameId: 1 });
  //   console.log("Game: " + this.game);
  //
  //   // this.socketService.sendGame(this.game);
  //   //this.game = '';
  //   //return location.href = "http://localhost:4200/admin/start";
  // }

  ngOnInit(): void {
    localStorage.setItem('connected Users', '');
    localStorage.setItem('question from server', '');

    // this.socketService
    //     .getGame();

  }



  onSubmit() {

    return location.href = "http://localhost:4200/admin/start";
  }

  sendGame(value) {

    if (value == "Game 1"){

      this.socketService.sendGame(1);
    } else if (value == "Game 2"){
      this.socketService.sendGame(2);
    } else if(value == "Game 3"){
      this.socketService.sendGame(3);
    } else {
      console.log("no game id");
    }
      this.router.navigate(['/admin/start']);
  }
}
