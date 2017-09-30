import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { PurePipe, ImpurePipe } from './pure.pipe';
import { CustomDirective, OnMouseHighlightDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent, CustomPipe, PurePipe, ImpurePipe,
    CustomDirective, OnMouseHighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
