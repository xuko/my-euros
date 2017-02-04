import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyD1__k8bxtjg5rrgnWEYR0ibz5af6oJqZU",
  authDomain: "my-euros.firebaseapp.com",
  databaseURL: "https://my-euros.firebaseio.com",
  storageBucket: "my-euros.appspot.com",
  messagingSenderId: "483303115667"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
