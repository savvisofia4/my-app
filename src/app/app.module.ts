import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { DataComponent } from './data/data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent, TempConverterComponent, DataComponent, HomePageComponent],
  imports: [BrowserModule,ReactiveFormsModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
