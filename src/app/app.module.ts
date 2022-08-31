import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppOutinModule } from './app-outin.module';
import { NaoEncontrado2Component } from './nao-encontrado2/nao-encontrado2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontrado2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppOutinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
