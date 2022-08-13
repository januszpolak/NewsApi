import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiservicesService } from '../app/services/apiservices.service';

@NgModule({
  declarations: [
    AppComponent,
    TopnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
