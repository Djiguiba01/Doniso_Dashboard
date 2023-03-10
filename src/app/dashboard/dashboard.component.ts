import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  form: any = {
    idformat: '',
    etat: '',
  };

  // Pagination
  p: number = 1;
  // Utilisateurs
  admintout: any;
  formateur: any;
  auditeur: any;
  idutilisateur!: any;

  // Formations
  formationvenir: any;
  formationencours: any;
  formationterminer: any;
  toutformation: any;
  etatformation: any;
  formationtout: any;
  idFormat: any;
  mesEtats: any;

  constructor(
    private formateurserv: UtilisateurService,
    private format: FormationService,
    private storageService: StorageService,
    private decon: AuthService
  ) {}

  ngOnInit() {
    // Actualisation appel méthode  étape 2/3::::::::::::::::::::::
    this.formationsTerminer();//:::::::
    
    this.formationsEncour();//:::::::

    //::::::::::::::::::::::::::::::::::::::::: RECUPERATION DES ETATS
    this.format.getEtat().subscribe((data) => {
      this.mesEtats = data;
    });

    // USER Voir tout les Admin:::::::::::::::::::::
    this.formateurserv.voirFormateuradmin().subscribe((data) => {
      this.admintout = data;
      console.log(this.admintout);
    });
    this.idutilisateur = JSON.parse(localStorage.getItem('auth-user')!).id;
    console.log(localStorage.getItem('auth-user'));

    // USER Voir tout les formateurs:::::::::::::::::::::
    this.formateurserv.voirFormateurformateur().subscribe((data) => {
      this.formateur = data;
      console.log(this.formateur);
    });
    this.idutilisateur = JSON.parse(localStorage.getItem('auth-user')!).id;
    console.log(localStorage.getItem('auth-user'));

    // USER Voir tout les Auditeurs:::::::::::::::::::::
    this.formateurserv.voirFormateurauditeur().subscribe((data) => {
      this.auditeur = data;
      console.log(this.auditeur);
    });
    this.idutilisateur = JSON.parse(localStorage.getItem('auth-user')!).id;
    console.log(localStorage.getItem('auth-user'));

    // Formations en t:::::::::::::::::
    this.format.getFormation().subscribe((data) => {
      this.toutformation = data;
    });

    // Formations en INITIER:::::::::::::::::
    this.format.getFormationavenir().subscribe((data) => {
      this.formationvenir = data;
    });

    //  // Formations en Terminer:::::::::::::::::
    //  this.format.getFormationterminer().subscribe(data=>{
    //   this.formationterminer=data;
    // });

    // Toutes les Formations:::::::::::::::::
    this.format.getFormation().subscribe((data) => {
      this.formationtout = data;
      for (let former of this.formationtout) {
        this.idFormat = former.idFormat;
        // console.log("ghggg" +this.idFormat)
      }
    });
  }

  // Actualisation méthode étape 1/3::::::::::::::::::::::::::::::::::::
  // Formations en cours:::::::::::::::::
  formationsEncour() {
    this.format.getFormationencours().subscribe((data) => {
      this.formationencours = data;
    });
  }

  // Formations Terminer:::::::::::::::::
  formationsTerminer() {
    this.format.getFormationterminer().subscribe((data) => {
      this.formationterminer = data;
    });
  }

  // Méthode Changement d'état::::::::::::::::::::::::::::
  ModifierEtat(encours: any) {
    console.log('id ----- ' + encours.idFormat);
    const statusformation = encours.etat;
    // Changement Etat  Formation:::::::::::::::::
    this.format
      .postFormationstatus(encours.idFormat, statusformation)
      .subscribe((data) => {
        this.etatformation = data;
        // Actualisation au niveau du button d'envoye étape 3/3:::::::::::::::::::::::
        this.formationsTerminer();//:::::::::
        this.formationsEncour();//:::::::
      });
  }
}
