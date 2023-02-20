
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutformationComponent } from './ajoutformation/ajoutformation.component';
import { DetailformationComponent } from './detailformation/detailformation.component';
import { AjoututilisateurComponent } from './ajoututilisateur/ajoututilisateur.component';
import { GestionparticipantComponent } from './gestionparticipant/gestionparticipant.component';
import { MenuComponent } from './menu/menu.component';
import { GestiondemandeComponent } from './gestiondemande/gestiondemande.component';
import { DetailparticipantComponent } from './detailparticipant/detailparticipant.component';
import { FormationencoursComponent } from './formationencours/formationencours.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
   { path: 'Dashboard', component: DashboardComponent },
   { path: 'AjoutFormat', component: AjoutformationComponent },
   { path: 'Detailformation', component: DetailformationComponent },
   { path: 'Ajoututilisateur', component: AjoututilisateurComponent },
   { path: 'Gestionparticipant', component: GestionparticipantComponent },
   { path: 'Gestiondemande', component: GestiondemandeComponent },
   { path: 'detailparticipant/:idPart', component: DetailparticipantComponent },
   { path: 'formationencours', component: FormationencoursComponent },
   { path: 'Menu', component: MenuComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
