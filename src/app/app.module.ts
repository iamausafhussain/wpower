import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from 'src/components/home/home.component';
import { UserprofileComponent } from 'src/widgets/userprofile/userprofile.component';
import { RecommendeditemComponent } from 'src/widgets/recommendeditem/recommendeditem.component';
import { RecommendedcardComponent } from 'src/widgets/recommendedcard/recommendedcard.component';
import { CoursesComponent } from 'src/widgets/courses/courses.component';
import { CourseItemComponent } from 'src/widgets/course-item/course-item.component';
import { SchedulerComponent } from 'src/widgets/scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserprofileComponent,
    RecommendeditemComponent,
    RecommendedcardComponent,
    CoursesComponent,
    CourseItemComponent,
    SchedulerComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
