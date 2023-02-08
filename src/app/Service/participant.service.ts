import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../Class/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http:HttpClient) { }


    // """"""""""""""""""Affiche tout les Participant"""""""""""""
    getParticipant(): Observable<object>{
      return this.http.get("http://localhost:8089/participant/voir/")
    }

       // """"""""""""""""""Affiche tout les Participant_Valider"""""""""""""
       getParticipantValider(): Observable<object>{
        return this.http.get("http://localhost:8089/participant/status/valider")
      }

         // """"""""""""""""""Affiche tout les Participant_Valider"""""""""""""
         getParticipantNonValider(): Observable<object>{
          return this.http.get("http://localhost:8089/participant/status/desoler")
        }

        // """"""""""""""""""Affiche tout les Initiale"""""""""""""
        getParticipantInitial(): Observable<object>{
          return this.http.get("http://localhost:8089/formation/regarder/initier")
        }

         // """"""""""""""""""Affiche les Participants Par_ID """""""""""""
      getParticipantid(idPart:number): Observable<Participant>{
        return this.http.get<Participant>(`http://localhost:8089/participant/voir/${idPart}`)
      }
         // """"""""""""""""""Affiche les Participants Par_ID """""""""""""
         VoirParticipantParFormation(idPart:number): Observable<Participant>{
          return this.http.get<Participant>(`http://localhost:8089/participant/voirpart/${idPart}`)
        }

              // """"""""""""""""""Affiche tout les Etats des participants"""""""""""""
    getEtat(): Observable<object>{
      return this.http.get("http://localhost:8089/participant/enumValues")
    }
     // """"""""""""""""""Etats Partipants validation """""""""""""
     ValidationParticipant(idPart:number,participantstatus:string): Observable<Participant>{
      return this.http.post<Participant>(`http://localhost:8089/participant/valide/${idPart}`,participantstatus)
    }
     // """"""""""""""""""Etats Partipants validation """""""""""""
     NonValideParticipant(idPart:number,participantstatus:string): Observable<Participant>{
      return this.http.post<Participant>(`http://localhost:8089/participant/rejeter/${idPart}`,participantstatus)
    }

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // """""""""""""""""""""Voir Participant  encours d'une formation""""""""""""""""""""""
     getParticipantEncoursFormation(idPart:number): Observable<Participant>{
      return this.http.get<Participant>(`http://localhost:8089/participant/encoursparticip/ENCOURS_TRAITEMENT/${idPart}`)
    }

     // """""""""""""""""""""Voir Participant  Non_Valider d'une formation""""""""""""""""""""""
     getParticipantNonFormation(idPart:number): Observable<Participant>{
      return this.http.get<Participant>(`http://localhost:8089/participant/encoursparticip/NON_VALIDER/${idPart}`)
    }

     // """""""""""""""""""""Voir Participant  encours d'une formation""""""""""""""""""""""
     getParticipantValidFormation(idPart:number): Observable<Participant>{
      return this.http.get<Participant>(`http://localhost:8089/participant/encoursparticip/VALIDER/${idPart}`)
    }


// Ajouter Participant:::::::::::::::::::::::::::::::::::::::
     AjoutParticipant(nom:any,deuxNom:any,sexe:any,contact:any,profession:any,email:any): Observable<any>{
        let particip=
          {
            "nom": nom,
            "deuxNom": deuxNom,
            "sexe": sexe,
            "contact": contact,
            "profession":profession,
            "email": email,

        };
        return this.http.post(`http://localhost:8089/participant/ajout`,particip);
      }

      //

}

