import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { BoiteAIdeeComponent } from './boite-aidee/boite-aidee.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DebatComponent } from './debat/debat.component';
import { QuartierComponent } from './quartier/quartier.component';

@NgModule({
  declarations: [
    AppComponent,
    BoiteAIdeeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DebatComponent,
    QuartierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
