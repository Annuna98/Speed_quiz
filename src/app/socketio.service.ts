import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from "../environments/environment";
import {observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  public session: string = '';
  public user: string = '';



  constructor() { }

  public sendHand(user, sessionKey){
    this.socket.emit('raiseTheHand', {userName: user, sessionId: sessionKey});
  }

  public getHand = () => {
    return Observable.create((observer) => {
      this.socket.on('raised', (res) => {
        observer.next(res);

      });
    });
  }

  public sendValidate(user, sessionKey, message){
    this.socket.emit('validate', {userName: user, sessionId: sessionKey, answer: message});
  }

  public getValidate(){
    return Observable.create((observer) => {
      this.socket.on('validated', (res) => {
        observer.next(res);
      });
    });
  }

  public sendChangePage(sessionKey, msg, questionId){
    this.socket.emit('changePage', {sessionId: sessionKey, message: msg, question: questionId});
  }

  public getChangePage(){
    return Observable.create((observer) => {
      this.socket.on('changed', (res) => {
        observer.next(res);

      });
    });
  }

  public getSession = () => {
    return Observable.create((observer) => {
      this.socket.on('getSession', (session) => {
        observer.next(session);
        console.log("Session: " + session);

      });
    });
  }

  public getSessionForMainPage = () => {
    return Observable.create((observer) => {
      this.socket.on('joined', (res) => {
        observer.next(res);


      });
    });
  }

  public getSessionForAdminPage = () => {
    return Observable.create((observer) => {
      this.socket.on('created', (res) => {
        observer.next(res);


      });
    });
  }

  public getPlayerName = () =>{
    return Observable.create((observer) => {
      this.socket.on('named', (res) => {
        observer.next(res);

      });
    });
  }

  public getListOfParticipants = () => {
    return Observable.create((observer) => {
      this.socket.on('participants', (res) => {
        observer.next(res);

      });
    });
  }

  public sendNameOfPlayer(session, name){
    this.socket.emit('join', {sessionKey: session, nameId: name});
  }

  public sendIdOfQuestion(id, session){
    this.socket.emit('start', {questionId: id, session: session});
  }

  public getQuestionId = () => {
    return Observable.create((observer) => {
      this.socket.on('started', (res) => {
        observer.next(res);
      });
    });
  }


  public sendGame(game) {
    // Создаём новую сессию, передав id игры, которую хотим запустить
    this.socket.emit('create', { gameId: game});
  }

  public sendSession(session){
    // Подключаемся к существующей сессии, передав её id
    // (важно: по условиям сервера в этой сессии должен уже
    // быть подключён как минимум один пользователь,
    // иначе подключение не пройдёт)
    this.socket.emit('join', { sessionKey: session, nameId: null});


  }

  setupSocketConnection() {


    this.socket = io(environment.SOCKET_ENDPOINT);




    // Подписываемся на событие запуска новой игры
    this.socket.on('created', (res) => {
      console.log(res);
    });

    // Подписываемся на событие запуска новой игры
    this.socket.on('joined', (res) => {

      console.log(res);
    });
    //
    // this.socket.on('participants', (res) => {
    //   this.user = res;
    //   console.log(this.user );
    // });

    // Создаём новую сессию, передав id игры, которую хотим запустить
    // this.socket.emit('start', { gameId: 1 });





  }

}
