import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../Service/participant.service';

@Component({
  selector: 'app-detailparticipant',
  templateUrl: './detailparticipant.component.html',
  styleUrls: ['./detailparticipant.component.css']
})
export class DetailparticipantComponent implements OnInit{

  p:any;
  participant : any;
  mesEtats:any
  etatparticipant:any;
  participformation:any;
  participantencours:any;
  participantValid:any;
  participantNonValid:any;
  etatparicipant:any;

  constructor(
    private participantService: ParticipantService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {

     //::::::::::::::::::::::::::::::::::::::::: RECUPERATION DES ETATS
     this.participantService.VoirToutEtat().subscribe(data=>{
      this.mesEtats = data
    });

     // Voir Encours Participants d'une Formations en fonction de son status:::::::::::::::::
     const idPart = +this.route.snapshot.params["idPart"];
    this.participantService.getParticipantEncoursFormation(idPart).subscribe(
      (data) => {
        this.participantencours = data;
        console.log(this.participant);
      }
    );

    // Voir Participants Non_Valider d'une Formations en fonction de son status:::::::::::::::::
    this.participantService.getParticipantNonFormation(idPart).subscribe(
      (data) => {
        this.participantNonValid = data;
        console.log(this.participant);
      }
    );

    // Voir  Participants Valider d'une Formations en fonction de son status:::::::::::::::::
    this.participantService.getParticipantValidFormation(idPart).subscribe(
      (data) => {
        this.participantValid = data;
        console.log(this.participant);
      }
    );

     // Voir tout Participants d'une Formations :::::::::::::::::
     const idFormat = +this.route.snapshot.params["idPart"];
    this.participantService.getParticipantEncoursFormation(idFormat).subscribe(
      (data) => {
        this.participant = data;
        console.log(this.participant);
      }
    );

  }

   // Méthode changement sur le button
   ModifierEtat(voir: any) {
    const demandestatus = voir.status;
    console.log('status ----- ' + voir.status);
    // Changement Etat  Formation:::::::::::::::::
    this.participantService
      .postParticipantstatus(voir.idPart, demandestatus)
      .subscribe((data) => {
        this.etatparicipant = data;
      });
  }


}
