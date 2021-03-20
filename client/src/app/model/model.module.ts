import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { surveyPageOne } from './surveyPageOne.model';
import { SurveyOneRepository } from './surveyOne.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [ surveyPageOne, SurveyOneRepository,
  {provide:'', useClass: RestDataSource},
  RestDataSource]
})
export class ModelModule {}
