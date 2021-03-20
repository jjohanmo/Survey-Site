import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { surveyPageOne } from 'src/app/model/surveyPageOne.model';
import {SurveyOneRepository} from 'src/app/model/surveyOne.repository';

@Component({
  selector: 'app-survey-page1',
  templateUrl: './survey-page1.component.html',
  styleUrls: ['./survey-page1.component.css']
})
export class SurveyPage1Component implements OnInit {
  formSubmitted = false;
  submitted = false;

  constructor(public repository: SurveyOneRepository,
              public surveyOne: surveyPageOne) { }

  ngOnInit(): void {
  }

  submitSurvey(form: NgForm): void
  {
    this.submitted = true;
    if (form.valid)
    {
      this.repository.saveSurveyOne(this.surveyOne).subscribe(surveyOne => {
        this.formSubmitted = true;
        this.submitted = false;
      });
    }
  }

}



