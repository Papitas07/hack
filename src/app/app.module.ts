import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AgendaComponent } from './agenda/agenda.component';
import { BoiteAIdeeComponent } from './boite-aidee/boite-aidee.component';
import { AppRoutingModule } from './app-routing.module';
import { TitreagendaComponent } from './titreagenda/titreagenda.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    BoiteAIdeeComponent,
    TitreagendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ScheduleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
