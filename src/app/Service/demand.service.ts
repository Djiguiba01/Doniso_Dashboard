import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environements/environment.prod';
import { Demand } from '../Class/demand';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  // SupDemande(idDemand: any) {
  //   throw new Error('Method not implemented.');
  // }
  env = environment;
  idDemand:any;

  constructor(private http:HttpClient) { }

  // """"""""""""""""""Affiche tout les Participants"""""""""""""
  getDemand(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/voir/")
  }

   // """"""""""""""""""Affiche Participants par Id """""""""""""
   getDemandId(idDemand:number): Observable<Demand>{
    return this.http.get<Demand>(`http://localhost:8089/demandpart/voir/${idDemand}`)
  }

   // """"""""""""""""""Afficher tout Etat Demande formation"""""""""""""
   VoirToutEtat(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/enumValues")
  }

  // """"""""""""""""""Afficher tout Demande Encours"""""""""""""
  VoirDemandEncours(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/regarder/encours")
  }

   // """"""""""""""""""Afficher tout Demande Accepter"""""""""""""
   VoirDemandAccepter(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/regarder/accepter")
  }

   // """"""""""""""""""Afficher tout Demande Rejeter"""""""""""""
   VoirDemandRejeter(): Observable<object>{
    return this.http.get("http://localhost:8089/demandpart/regarder/rejeter")
  }


   // """"""""""""""""""Afficher Demande formation par User """""""""""""
  VoirParUser(idDemand:number): Observable<object>{
    return this.http.get(`http://localhost:8089/demandpart/voirformation/${idDemand}`)
  }

  // """"""""""""""""""Changement Etats Demandes """""""""""""
  postDemandestatus(idDemand:number,demandestatus:string): Observable<any>{
    console.log("S "+demandestatus)
    console.log("ID "+idDemand)
    return this.http.post(`http://localhost:8089/demandpart/${demandestatus}/${idDemand}`,demandestatus)
  }

  // """"""""""""""""""Supprimer Demande formation """""""""""""
  SupDemande(idDemand:number): Observable<object>{
    return this.http.delete(`http://localhost:8089/demandpart/supprimer/${idDemand}`)
  }

      // """"""""""""""""""Ajouter demande formation par user """""""""""""
      ajoutDemandeformat(structure:any,lieu:any,email:any,type:any,personnes:any, file:any,iduser : number): Observable<any>{
        const data: FormData = new  FormData();
        // data.append('file', file);
        let form=[
          {
            "structure": structure,
            "lieu": lieu,
            "email": email,
            "type": type,
            "personnes":personnes,

        }
      ];
      data.append('file',file )
      data.append('donneesaudit', JSON.stringify(form).slice(1,JSON.stringify(form).lastIndexOf(']')));
      return this.http.post(`http://localhost:8089/demandpart/ajout/${iduser}`, data);

      }

}
