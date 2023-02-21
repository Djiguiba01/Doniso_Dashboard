import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';

@Component({
  selector: 'app-formationencours',
  templateUrl: './formationencours.component.html',
  styleUrls: ['./formationencours.component.css']
})
export class FormationencoursComponent implements OnInit{

  formation:any;
  p:any;
  supFormat: any;
  etatformation:any;
  mesEtats: any;

  constructor(
    private format: FormationService,
    ) {}

  ngOnInit(): void {

      //::::::::::::::::::::::::::::::::::::::::: RECUPERATION DES ETATS
      this.format.getEtat().subscribe(data=>{
        this.mesEtats = data
      })

      // Actualisation appel méthode  étape 2/3::::::::::::::::::::::
      this.formationsVenir();//:::::::

     // Formations en INITIER:::::::::::::::::
    //  this.format.getFormationavenir().subscribe(data=>{
    //   this.formation=data;
    // });

  }

    // Méthode Suppression
    suppression(idFormat:any){
      this.format.SupFormation(idFormat).subscribe(data=>{
        this.supFormat=data
        console.log(data)
    });
   }

    // Actualisation méthode étape 1/3::::::::::::::::::::::::::::::::::::

  // Formations en cours:::::::::::::::::
  formationsVenir() {
     this.format.getFormationavenir().subscribe(data=>{
      this.formation=data;
    });
  }

   ModifierEtat(voir:any){
    console.log("id ----- "+voir.idFormat)
    const statusformation =voir.etat
    // console.log("status ----- "+statusformation)
      // Changement Etat  Formation:::::::::::::::::
      this.format.postFormationstatus(voir.idFormat,statusformation).subscribe(data=>{
        this.etatformation=data;
        // Actualisation au niveau du button d'envoye étape 3/3:::::::::::::::::::::::
        this.formationsVenir();//:::::::::
      });
  }

}
