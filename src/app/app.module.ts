import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//REMOVER LINHAS ABAIXO QUANDO FOR UTILIZAR API REAL
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataBase } from "./in-memory-database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //REMOVER LINHA ABAIXO QUANDO FOR UTILIZAR API REAL
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
