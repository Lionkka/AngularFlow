import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PasswordPipe } from './../pipes/password.pipe';
import { TranslatePipe } from './../pipes/translator.pipe';
import { OrderByPipe } from './../pipes/orderby.pipe';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { OrderComponent } from './order/order.component';
import { TranslatorComponent } from './translator/translator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    OrderComponent,
    TranslatorComponent,
    PasswordPipe,
    TranslatePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
