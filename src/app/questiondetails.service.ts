import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestiondetailsService {

  private baseUrl = "http://localhost:3000/questions";

  constructor(private http: HttpClient) { }

  getQuestions():Observable<any>{
    const url = this.baseUrl;
    return this.http.get<any>(url);
  }

}
