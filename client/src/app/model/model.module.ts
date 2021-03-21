/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
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
