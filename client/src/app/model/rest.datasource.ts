import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { surveyPageOne } from './surveyPageOne.model';

const PROTOCOL = 'http';
const PORT = 5000;

@Injectable({providedIn: 'root'})
export class RestDataSource
{
  baseUrl: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient)
  {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  saveSurveyOne(surveyOne: surveyPageOne): Observable<surveyPageOne>
  {
    console.log(JSON.stringify(surveyOne));
    return this.http.post<surveyPageOne>(this.baseUrl + 'surveyOne/add', surveyOne);
  }

  getSurveyOne(): Observable<surveyPageOne[]>
  {
    return this.http.get<surveyPageOne[]>(this.baseUrl + 'surveyOne');
  }

}

