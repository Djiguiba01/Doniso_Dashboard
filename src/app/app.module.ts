import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AjoutformationComponent } from './ajoutformation/ajoutformation.component';
import { DetailformationComponent } from './detailformation/detailformation.component';
import { DetailutilisateurComponent } from './detailutilisateur/detailutilisateur.component';
import { AjoututilisateurComponent } from './ajoututilisateur/ajoututilisateur.component';
import { GestionparticipantComponent } from './gestionparticipant/gestionparticipant.component';
import { MenuComponent } from './menu/menu.component';
import { GestiondemandeComponent } from './gestiondemande/gestiondemande.component';
import { DetailparticipantComponent } from './detailparticipant/detailparticipant.component';
import { FormationencoursComponent } from './formationencours/formationencours.component';
import { ValidationformateurComponent } from './validationformateur/validationformateur.component';
import { EssaiComponent } from './essai/essai.component';
import { EtreformateurComponent } from './etreformateur/etreformateur.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashboardComponent,
    AjoutformationComponent,
    DetailformationComponent,
    DetailutilisateurComponent,
    AjoututilisateurComponent,
    GestionparticipantComponent,
    GestionparticipantComponent,
    MenuComponent,
    GestiondemandeComponent,
    GestiondemandeComponent,
    DetailparticipantComponent,
    FormationencoursComponent,
    ValidationformateurComponent,
    EssaiComponent,
    EtreformateurComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //:::::::::::::
    FormsModule, //:::::::::
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule, //::::::::::
    // httpInterceptorProviders
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
