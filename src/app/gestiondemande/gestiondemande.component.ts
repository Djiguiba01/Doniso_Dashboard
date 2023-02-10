import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../Class/demand';
import { DemandService } from '../Service/demand.service';
import { ParticipantService } from '../Service/participant.service';

@Component({
  selector: 'app-gestiondemande',
  templateUrl: './gestiondemande.component.html',
  styleUrls: ['./gestiondemande.component.css']
})


export class GestiondemandeComponent implements OnInit{

  demandvoir:any;
  mesEtats:any;
  demandencours:any;
  demandaccepter:any;
  demandrejeter:any;
  p:any;
  idDemand:any;
  etatparicipant:any;
encours: any;

  constructor(
    private demand: DemandService ,
    ) { }


  ngOnInit(): void {

     // Voir Tout Etat :::::::::::::::::::::
     this.demand.VoirToutEtat().subscribe(data=>{
      this.mesEtats=data;
    });

     // Voir Tout les Demandes Encours :::::::::::::::::::::
     this.demand.VoirDemandEncours().subscribe(data=>{
      this.demandencours=data;
    });

     // Voir Tout les Demandes Accepter:::::::::::::::::::::
     this.demand.VoirDemandAccepter().subscribe(data=>{
      this.demandaccepter=data;
    });

     // Voir Tout les Demandes Rejeter:::::::::::::::::::::
     this.demand.VoirDemandRejeter().subscribe(data=>{
      this.demandrejeter=data;
    });

        // Voir Tout les Demandes :::::::::::::::::::::
        this.demand.getDemand().subscribe(data=>{
          this.demandvoir=data;
          // for(let former of this.demandvoir){
          //   this.idDemand = former.idDemand
          //   console.log("ghggg" +this.idDemand)
          // }
          console.log(this.demandvoir);
        });

  }


  ModifierEtat(voir:any){
    const statusformation =voir.auditstatus
     console.log("status ----- "+voir.auditstatus)
      // Changement Etat  Formation:::::::::::::::::
      this.demand.postParticipantstatus(voir.idDemand,statusformation).subscribe(data=>{
        this.etatparicipant=data;
      });
  }

}
