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

         // """"""""""""""""""Affiche les Participants Par_ID """""""""""""
      getParticipantid(idPart:number): Observable<Participant>{
        return this.http.get<Participant>("http://localhost:8089/participant/voir/${idPart}")
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

 