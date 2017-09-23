import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PasswordComponent } from './component/password/password.component';
import { OrderByComponent } from './component/order-by/order-by.component';

import { Password } from './pipes/password';
import { OrderBy } from './pipes/orderBy';
import { Translate } from './pipes/translator';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    OrderByComponent,
    Password,
    OrderBy,
    Translate
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
