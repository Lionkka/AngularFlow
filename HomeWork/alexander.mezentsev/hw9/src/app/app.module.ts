import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import reducers from './reducers';

import {CountComponent} from './components/count/count.component';
import {CounterComponent} from './components/counter/counter.component';
import {CounterButtonComponent} from './components/counter-button/counter-button.component';

import {AppActions, CounterActions} from './actions';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    CounterComponent,
    CounterButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducers)
  ],
  providers: [AppActions, CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
}
