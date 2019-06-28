import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AgendaComponent } from './agenda/agenda.component';
import { BoiteAIdeeComponent } from './boite-aidee/boite-aidee.component';
import { AppRoutingModule } from './app-routing.module';

import { TitreagendaComponent } from './titreagenda/titreagenda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FinancementComponent } from './financement/financement.component';
import { Projet1Component } from './projet1/projet1.component';
import { Projet2Component } from './projet2/projet2.component';
import { Projet3Component } from './projet3/projet3.component';
import { Projet4Component } from './projet4/projet4.component'
import { QuartierComponent } from './quartier/quartier.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DebatComponent } from './debat/debat.component';
import { CreateCitizenComponent } from './create-citizen/create-citizen.component';

import { HomeComponent } from './home/home.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AdminComponent } from './admin/admin.component';
import { ProjectComponent } from './admin/project/project.component';
import { ProjectCreateComponent } from './admin/project-create/project-create.component';
import { ProjectListComponent } from './admin/project-list/project-list.component';
import { ProjectUpdateComponent } from './admin/project-update/project-update.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './admin/login/login.component'


var config = {
  apiKey: "AIzaSyAsZ_l3TdtZg27xubszkJWKPa2_EImW0A0",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "hack-d77ae",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

@NgModule({
  declarations: [
    AppComponent,

    AgendaComponent,
    BoiteAIdeeComponent,
    TitreagendaComponent,
    FinancementComponent,
    Projet1Component,
    Projet2Component,
    Projet3Component,
    Projet4Component,
    QuartierComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DebatComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DebatComponent,
    QuartierComponent,
    CreateCitizenComponent,
    HomeComponent,
    AdminComponent,
    ProjectComponent,
    ProjectCreateComponent,
    ProjectListComponent,
    ProjectUpdateComponent,
    ContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ScheduleModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [DayService, 
    WeekService, 
   // WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
