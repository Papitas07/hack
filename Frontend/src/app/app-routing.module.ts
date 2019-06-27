import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuartierComponent } from './quartier/quartier.component';
import { DebatComponent } from './debat/debat.component';
import { FinancementComponent } from './financement/financement.component';
import { Projet1Component } from './projet1/projet1.component';
import { Projet2Component } from './projet2/projet2.component';
import { Projet3Component } from './projet3/projet3.component';
import { Projet4Component } from './projet4/projet4.component';
import { TitreagendaComponent } from './titreagenda/titreagenda.component';

const routes: Routes = [
    { path: '', redirectTo: '/quartier', pathMatch: 'full' },
    { path: 'quartier', component: QuartierComponent },
    { path: 'debat', component: DebatComponent },
    { path: 'financement', component: FinancementComponent },
    { path: 'projet1', component: Projet1Component},
    { path: 'projet2', component: Projet2Component},
    { path: 'projet3', component: Projet3Component},
    { path: 'projet4', component: Projet4Component},
    { path: 'titreAgenda', component: TitreagendaComponent},
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }