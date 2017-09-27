import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MyComponent } from './my-first.component';
import { ChildComponent } from './child.component';


@NgModule({
  declarations: [
    MyComponent, ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ MyComponent ]
})
export class AppModule { }
