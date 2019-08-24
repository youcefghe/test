import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyFirstComponent } from './my-first/my-first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    AppComponent,
  MyFirstComponent,
  SecondComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
