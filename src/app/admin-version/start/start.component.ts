import { Component, OnInit } from '@angular/core';
import {SocketioService} from "../../socketio.service";

import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css', '../../app.component.css']
})
export class StartComponent implements OnInit {
  key: string;
  keys: string[] = [];




  constructor(private socketService: SocketioService, private router: Router) {

  }





  ngOnInit(): void {

    this.socketService
        .getSession()
        .subscribe((key: string) => {

          console.log("Key: " + key);
          this.key = key;
            this.socketService.session = key;
          localStorage.setItem('session', this.key);

          // this.keys.push(key);
        });

      this.socketService.getSessionForAdminPage().subscribe((sesKey: string) => {
          localStorage.setItem('questions', JSON.stringify(JSON.parse(sesKey).data.questions));
          //console.log(JSON.stringify(JSON.parse(sesKey).data.questions));
      });

      // this.socketService.getChangePage()
      //     .subscribe((res: string) => {
      //         if (JSON.parse(res).success){
      //             this.router.navigate(['/admin/participants']);
      //         }
      //     });



  }

  next() {
    this.router.navigate(['/admin/participants']);
  }
}
