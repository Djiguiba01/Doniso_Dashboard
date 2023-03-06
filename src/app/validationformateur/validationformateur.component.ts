import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-validationformateur',
  templateUrl: './validationformateur.component.html',
  styleUrls: ['./validationformateur.component.css']
})
export class ValidationformateurComponent implements OnInit{

  formatformateur:any;
  formatformateurvalide:any;
  formatformateurnonvalide:any;
  etatformation:any;
  formationsTerminer:any;
  formationsEncour:any;
  mesEtats:any;
  mesformaformateur:any;

constructor(
  private formateurserv: UtilisateurService,
  private service:FormationService
){}


  ngOnInit(): void {

      // Actualisation appel méthode  étape 2/3::::::::::::::::::::::
      this.formationsNonValid();//:::::::
      this.formationsValid();//:::::::

    // this.lesFormations();
     // Formations Par ID:::::::::::::::::

     //::::::::::::::::::::::::::::::::::::::::: RECUPERATION DES ETATS
    this.service.getEtat().subscribe((data) => {
      this.mesEtats = data;
    });



      // Formation etat formateurs:::::::::::::::::
      this.service.EtatFormationFormateur().subscribe(data=>{
        this.formatformateur=data;
      });


      //  Voir valide Formation formateurs:::::::::::::::::
      // this.service.VoiretatFormationformateurv().subscribe(data=>{
      //   this.formatformateurvalide=data;
      // });

       //  Voir non valide Formation formateurs:::::::::::::::::
      //  this.service.VoiretatFormationformateurn().subscribe(data=>{
      //   this.formatformateurnonvalide=data;
      // });
      

      //  Voir non valide Formation formateurs:::::::::::::::::
      this.service.EtatFormationFormateur().subscribe(data=>{
        this.mesformaformateur=data;
      });
      

  }

    // Actualisation méthode étape 1/3::::::::::::::::::::::::::::::::::::
       //  Voir non valide Formation formateurs:::::::::::::::::
       formationsNonValid() {
        this.service.VoiretatFormationformateurn().subscribe(data=>{
          this.formatformateurnonvalide=data;
        });
      }
      //  Voir non valide Formation formateurs:::::::::::::::::
      formationsValid() {
        this.service.VoiretatFormationformateurv().subscribe(data=>{
          this.formatformateurvalide=data;
        });
      }


    // Méthode Changement d'état::::::::::::::::::::::::::::
    ModifierEtat(voir: any) {
      console.log('id ----- ' + voir.idFormat);
      const statusformation = voir.etat;
      // Changement Etat  Formation:::::::::::::::::
      this.service
        .postFormationstatus(voir.idFormat, statusformation)
        .subscribe((data) => {
          this.etatformation = data;
          // Actualisation au niveau du button d'envoye étape 3/3:::::::::::::::::::::::
          this.formationsNonValid();//:::::::::
          this.formationsValid();//:::::::
        });
    }

}
