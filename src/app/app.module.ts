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

import { FinancementComponent } from './financement/financement.component';
import { Projet1Component } from './projet1/projet1.component';
import { Projet2Component } from './projet2/projet2.component';
import { Projet3Component } from './projet3/projet3.component';
import { Projet4Component } from './projet4/projet4.component'
import { QuartierComponent } from './quartier/quartier.component';

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
    QuartierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ScheduleModule,
    AppRoutingModule,
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
