/*
## Homework 6 ##
 - Create counter component. (first) Component contains two buttons first add 1 to general count.
Second substract 1 from general count. Count should be shown pretty. Html should be in separate file.
We need to set counter step.
If I do not push the button after each 20 seconds counter increase by 1 point and if it increase automatically counter should be colored by red.
If I increase/decrease by button counter should be colored blue(pretty blue). Second component should contains number only.
* */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../components/app.component';
import { CountComponent } from '../components/count.component';
import { CounterComponent } from '../components/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    CounterComponent
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
