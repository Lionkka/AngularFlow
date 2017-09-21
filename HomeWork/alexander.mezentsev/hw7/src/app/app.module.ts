import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { TimeCapsuleComponent } from './components/time-capsule/time-capsule.component';
import { RememberTimeComponent } from './components/remember-time/remember-time.component';
import { ShowTimeComponent } from './components/show-time/show-time.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimeCapsuleComponent,
    RememberTimeComponent,
    ShowTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
