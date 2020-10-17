import { Injectable } from '@angular/core';
import { Observable,throwError} from 'rxjs';
import { Form } from './form'
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/'
  
  constructor(
    private http: HttpClient
  ) {}

  getHttp(): Observable<Form> {
    return this.http.get<Form>(this.getUrl).pipe(catchError(this.handleError));
  }

  postHttp(feedback: Form):Observable<any> {
    return this.http.post<any>(this.postUrl, feedback).pipe(catchError(this.handleError));
  } 
  handleError(err){
  if(err instanceof HttpErrorResponse){
  console.error("server side Error:",err.error);
  
  }
  else{
    console.log("Client side error");
  }
  return throwError(err);
  }
}

