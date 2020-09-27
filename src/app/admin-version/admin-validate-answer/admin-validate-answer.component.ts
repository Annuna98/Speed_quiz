import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SocketioService} from "../../socketio.service";

@Component({
  selector: 'app-admin-validate-answer',
  templateUrl: './admin-validate-answer.component.html',
  styleUrls: ['./admin-validate-answer.component.css', '../../app.component.css']
})
export class AdminValidateAnswerComponent implements OnInit {
  key: string;
  questionId;
  connectedUsers = [];
  usersControl = [];



  constructor(private route:ActivatedRoute, private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
    this.key = localStorage.getItem('session');
    this.questionId = this.route.snapshot.paramMap.get('questionId');

    this.connectedUsers = JSON.parse(localStorage.getItem('connected Users'));
  }

  right(user: string) {
    this.socketService.sendValidate(user, this.key, true);
    //this.userCheck.name = user;
    this.usersControl.push(user);
    //console.log("click button: " + this.userCheck.clickCount);
  }

  wrong(user: string) {
    this.socketService.sendValidate(user, this.key, false);
    //this.userCheck.name = user;

    this.usersControl.push(user);
    //console.log("click button: " + this.userCheck.clickCount);
  }

  nextQusetion() {
    const questions = JSON.parse(localStorage.getItem('questions')).map((q) => q.id);
    let item = Number(localStorage.getItem('item'));
    if (this.connectedUsers.length != this.usersControl.length) {
      alert("Оцените всех пользователей!");
    } else {

      if (questions.length != (item + 1)) {
        item++;
        localStorage.setItem('item', JSON.stringify(item));
        this.socketService.sendChangePage(this.key, 'true', questions[item]);
        this.router.navigate(['admin/' + questions[item]]);
      } else {
        this.socketService.sendChangePage(this.key, 'false', null);
        this.router.navigate(['end']);
      }
  }
  }

  ValidForm(user) {
    for (let f of this.usersControl){
      if (f == user) {
        return false;
      }
    }

    return true;
  }

}
