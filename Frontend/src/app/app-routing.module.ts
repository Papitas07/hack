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
import { BoiteAIdeeComponent } from './boite-aidee/boite-aidee.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'quartier', component: QuartierComponent },
    { path: 'boiteaidee', component: BoiteAIdeeComponent },
    { path: 'debat', component: DebatComponent },
    { path: 'financement', component: FinancementComponent },
    { path: 'projet1', component: Projet1Component},
    { path: 'projet2', component: Projet2Component},
    { path: 'projet3', component: Projet3Component},
    { path: 'projet4', component: Projet4Component},
    { path: 'titreAgenda', component: TitreagendaComponent},
    { path: 'boiteIdee', component: BoiteAIdeeComponent},
    { path: 'quartier', component: HeaderComponent},
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'admin', component: AdminComponent},

];

@NgModule({
 imports: [RouterModule.forRoot(routes , { enableTracing: true })],
 exports: [RouterModule]
})
export class AppRoutingModule { }