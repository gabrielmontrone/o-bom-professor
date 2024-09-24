import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSectionComponent } from './components/left-section/left-section.component';
import { RightSectionComponent } from './components/right-section/right-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSectionComponent,
    RightSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
