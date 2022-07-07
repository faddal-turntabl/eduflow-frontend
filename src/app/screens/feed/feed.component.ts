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

  questionTitle = ""
  questionContent = ""

  constructor() { }

  ngOnInit(): void {
    this.questions = [...questions]
  }

  postQuestion(e:any){
    e.preventDefault();

    if(!this.questionContent.trim() || !this.questionTitle.trim()){
      alert("please enter all post fields");
      return;
    }

    this.questions = [ {
      question_id: 1,
      user_id: 4,
      user: "Me",
      catergory_id: 3,
      title: this.questionTitle,
      question: this.questionContent,
      created_at: "21/05/2023"
    }
    ,...this.questions]

    this.questionContent ="";
    this.questionTitle = "";
  }

}
