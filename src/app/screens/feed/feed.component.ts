import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.module';
import questions from './dummy_feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  questions!: Question[];

  constructor() { }

  ngOnInit(): void {
    this.questions = [...questions]
  }

}
