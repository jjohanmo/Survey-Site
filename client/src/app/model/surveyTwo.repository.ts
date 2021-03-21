/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyPageTwo} from './surveyPageTwo.model';
import { RestDataSource } from './rest.datasource';


@Injectable({providedIn: 'root'})
export class SurveyTwoRepository
{
  private surveyTwo! : surveyPageTwo[];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadSurveys(): void
  {
    this.loaded = true;
    this.dataSource.getSurveyTwo()
    .subscribe(surveyTwo => this.surveyTwo = surveyTwo);
  }

  getSurveyTwo(): surveyPageTwo[]
  {
    if (!this.loaded)
    {
      this.loadSurveys();
    }
    return this.surveyTwo;
  }

  saveSurveyTwo(surveyTwo: surveyPageTwo): Observable<surveyPageTwo>
  {
    return this.dataSource.saveSurveyTwo(surveyTwo);
  }



}
