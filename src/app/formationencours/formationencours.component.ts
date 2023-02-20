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

     // Formations en INITIER:::::::::::::::::
     this.format.getFormationavenir().subscribe(data=>{
      this.formation=data;
    });

  }

    // Méthode Suppression
    suppression(idFormat:any){
      this.format.SupFormation(idFormat).subscribe(data=>{
        this.supFormat=data
        console.log(data)
    });
   }

   ModifierEtat(voir:any){
    console.log("id ----- "+voir.idFormat)
    const statusformation =voir.etat
    // console.log("status ----- "+statusformation)
      // Changement Etat  Formation:::::::::::::::::
      this.format.postFormationstatus(voir.idFormat,statusformation).subscribe(data=>{
        this.etatformation=data;
      });
  }

}
