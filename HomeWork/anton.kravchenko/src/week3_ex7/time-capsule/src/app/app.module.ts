import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowTimeComponent } from './show-time.component';
import { TimeCapsuleComponent } from './time-capsule.component';
import { TriggerComponent } from './trigger.component';
import { ClockComponent } from './clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    TimeCapsuleComponent,
    TriggerComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
