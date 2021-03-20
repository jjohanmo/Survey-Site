import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyPage1Component } from './pages/survey-page1/survey-page1.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent,data: {title: 'About'}},
  {path: 'survey', component: SurveyComponent, data: {title: 'Survey'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'create-survey', component: CreateSurveyComponent, data: {title: 'CreateSurvey'}},
  {path: 'survey-page1', component: SurveyPage1Component, data: {title: 'CreateSurvey'}},
  {path: '', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
