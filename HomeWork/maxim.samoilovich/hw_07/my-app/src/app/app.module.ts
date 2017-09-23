import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimeCapsuleComponent } from './time-capsule/time-capsule.component';
import { ShowTimeComponent } from './timer/show-time/show-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimeCapsuleComponent,
    ShowTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
