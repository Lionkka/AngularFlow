import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import { OrderByPipe } from './pipes/order_by.pipe';
import { SplitPipe } from './pipes/split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    PasswordPipe,
    OrderByPipe,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
