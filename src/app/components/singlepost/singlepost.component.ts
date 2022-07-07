import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.module';
import {QuestiondetailsService} from "../../../app/questiondetails.service";

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  question!:Question

  constructor(private qService: QuestiondetailsService) { }

  ngOnInit(): void {
    // http.get()
    // this.question =  {
    //   question_id: 1,
    //   user_id: 4,
    //   user: "Aisha Animashaun",
    //   catergory_id: 3,
    //   title: "DIfferentiation of e",
    //   question: "How do we differentiate e",
    //   created_at: "21/05/2023"
    // }

    this.getInitData();
  }

  getInitData():void{
    this.getQuestions();
  }

  getQuestions(){
    this.qService.getQuestions().subscribe((data) => {
      this.question = data[0];
    })
  }

}
