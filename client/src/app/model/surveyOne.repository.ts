import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyPageOne} from './surveyPageOne.model';
import { RestDataSource } from './rest.datasource';


@Injectable({providedIn: 'root'})
export class SurveyOneRepository
{
  private surveyOne! : surveyPageOne[];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadSurveys(): void
  {
    this.loaded = true;
    this.dataSource.getSurveyOne()
    .subscribe(surveyOne => this.surveyOne = surveyOne);
  }

  getSurveyOne(): surveyPageOne[]
  {
    if (!this.loaded)
    {
      this.loadSurveys();
    }
    return this.surveyOne;
  }

  saveSurveyOne(surveyOne: surveyPageOne): Observable<surveyPageOne>
  {
    return this.dataSource.saveSurveyOne(surveyOne);
  }



}
