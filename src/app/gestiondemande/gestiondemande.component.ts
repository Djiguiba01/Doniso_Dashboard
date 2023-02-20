import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Demand } from '../Class/demand';
import { DemandService } from '../Service/demand.service';
import { ParticipantService } from '../Service/participant.service';

@Component({
  selector: 'app-gestiondemande',
  templateUrl: './gestiondemande.component.html',
  styleUrls: ['./gestiondemande.component.css'],
})
export class GestiondemandeComponent implements OnInit {
  demandvoir: any;
  mesEtats: any;
  demandencours: any;
  demandaccepter: any;
  demandrejeter: any;
  p: any;
  r: any;
  e: any;
  idDemand: any;
  etatparicipant: any;
  encours: any;
  supDemand: any;

  constructor(
    private demand: DemandService,
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
    // Voir Tout Etat :::::::::::::::::::::
    this.demand.VoirToutEtat().subscribe((data) => {
      this.mesEtats = data;
    });

    // Voir Tout les Demandes Encours :::::::::::::::::::::
    this.demand.VoirDemandEncours().subscribe((data) => {
      this.demandencours = data;
    });

    // Voir Tout les Demandes Accepter:::::::::::::::::::::
    this.demand.VoirDemandAccepter().subscribe((data) => {
      this.demandaccepter = data;
    });

    // Voir Tout les Demandes Rejeter:::::::::::::::::::::
    this.demand.VoirDemandRejeter().subscribe((data) => {
      this.demandrejeter = data;
    });

    // Voir Tout les Demandes :::::::::::::::::::::
    this.demand.getDemand().subscribe((data) => {
      this.demandvoir = data;
      console.log(this.demandvoir);
    });
  }

  // Méthode Suppression
  suppression(idDemand:any){
    this.demand.SupDemande(idDemand).subscribe(data=>{
      this.supDemand=data
      console.log(data)
  });

}

  // Méthode changement sur le button
  ModifierEtat(voir: any) {
    const statusformation = voir.auditstatus;
    console.log('status ----- ' + voir.auditstatus);
    // Changement Etat  Formation:::::::::::::::::
    this.demand
      .postDemandestatus(voir.idDemand, statusformation)
      .subscribe((data) => {
        this.etatparicipant = data;
      });

  }

}

  // :::::::::::
  // removeItem(element){
  //   this.demandencours.forEach((value,index) =>{
  //     if(value == element)
  //     this.demandencours.splice(index,1);
  //   });

  // }




