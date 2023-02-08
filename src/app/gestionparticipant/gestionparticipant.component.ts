import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../Service/formation.service';
import { ParticipantService } from '../Service/participant.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-gestionparticipant',
  templateUrl: './gestionparticipant.component.html',
  styleUrls: ['./gestionparticipant.component.css']
})
export class GestionparticipantComponent implements OnInit{
   obj:any
   idPart:any;
   formationencours:any;
   formationterminer:any;
   formationvenir:any;

  form:any={

    idformat:"",
    etat:""

  }

    // Pagination
    p: number =1;

    // Formations
    toutformation:any;
    titre:any;

    // Participants
    participt:any;
    valider:any;
    nonvalider:any;
    initial:any;



    constructor(
      private route:ActivatedRoute,
      private formateurserv: UtilisateurService,
      private format: FormationService,
      private particip: ParticipantService,
      ) { }

    ngOnInit() {

      //this.idPart=this.route.snapshot.params['idPart'];

      // Formations en to:::::::::::::::::
      this.format.getFormation().subscribe(data=>{
        this.toutformation=data;
      });

       // Formations en INITIER:::::::::::::::::
     this.format.getFormationavenir().subscribe(data=>{
      this.formationvenir=data;
    });

       // Formations en cours:::::::::::::::::
       this.format.getFormationencours().subscribe(data=>{
        this.formationencours=data;
        console.log(this.formationencours)
      });

       // Formations en Terminer:::::::::::::::::
     this.format.getFormationterminer().subscribe(data=>{
      this.formationterminer=data;
    });

       //  Tout les Participations :::::::::::::::::
       this.particip.getParticipant().subscribe(data=>{
        this.participt=data;
      });

      //  Participant Accepter :::::::::::::::::
      this.particip.getParticipantValider().subscribe(data=>{
        this.valider=data;
      });

      //  Participants Non Accepter :::::::::::::::::
      this.particip.getParticipantNonValider().subscribe(data=>{
        this.nonvalider=data;
      });

      //  Participants Initiale :::::::::::::::::
      this.particip.getParticipantInitial().subscribe(data=>{
        this.initial=data;
      });


    }

  }
