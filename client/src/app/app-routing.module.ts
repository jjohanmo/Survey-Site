import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyPage1Component } from './pages/surveypage1/survey-page1.component';


const routes: Routes = [
  
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent,data: {title: 'About'}},
  {path: 'survey', component: SurveyComponent, data: {title: 'Survey'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'create-survey', component: CreateSurveyComponent, data: {title: 'Contact'}},
  {path:'surveyPageOne', component: SurveyPage1Component, data: {title: 'SurveyPageOne'}},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
