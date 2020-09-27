import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-play',
  templateUrl: './results-play.component.html',
  styleUrls: ['./results-play.component.css', '../../app.component.css']
})
export class ResultsPlayComponent implements OnInit {
  result = [];

  constructor() { }

  ngOnInit(): void {
    this.result = JSON.parse(localStorage.getItem('results'));

  }

}
