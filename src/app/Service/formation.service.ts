import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environements/environment.prod';
import { Formation } from '../Class/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  env = environment;

  constructor(private http:HttpClient) { }

    // """"""""""""""""""Affiche tout les formations"""""""""""""
    getFormation(): Observable<object>{
      return this.http.get("http://localhost:8089/formation/voir/")
    }

     // """"""""""""""""""Affiche tout les formations à venir"""""""""""""
     getFormationavenir(): Observable<object>{
      return this.http.get("http://localhost:8089/formation/regarder/initier")
    }

        // """"""""""""""""""Affiche tout les formations_encours"""""""""""""
        getFormationencours(): Observable<object>{
          return this.http.get("http://localhost:8089/formation/regarder/encours")
        }

          // """"""""""""""""""Affiche tout les formations Terminer"""""""""""""
          getFormationterminer(): Observable<object>{
            return this.http.get("http://localhost:8089/formation/regarder/termine")
          }

     // """"""""""""""""""Affiche les formations Par_ID """""""""""""
     getFormationId(idFormat:number): Observable<Formation>{
      return this.http.get<Formation>(`http://localhost:8089/formation/voir/${idFormat}`)
    }

     // """"""""""""""""""Mettre Etats Formations Encours """""""""""""
     postFormationstatus(idFormat:number,formationstatus:string): Observable<Formation>{
      return this.http.post<Formation>(`http://localhost:8089/formation/${formationstatus}/${idFormat}`,formationstatus)
    }

    // """"""""""""""""""Supprimer Demande formation """""""""""""
  SupFormation(idDemand:number): Observable<object>{
    return this.http.delete(`http://localhost:8089/formation/supprimer/${idDemand}`)
  }


         // """"""""""""""""""Ajouter les formation """""""""""""
      AjoutFormat(titre:any,moduletitre:any,lieu:any,description:any,contact:any,heuretemps:any,datedebut:any,datefin:any, etatlieu:any, idutilisateur:number, formateur:string,file:any): Observable<any>{
        const data: FormData = new  FormData();
        data.append('file', file);
        let form=[
          {
            "titre": titre,
            "moduletitre": moduletitre,
            "lieu": lieu,
            "description": description,
            "contact": contact,
            "heuretemps":heuretemps,
            // "emailformateur": emailformateur,
            "datedebut": datedebut,
            "datefin": datefin,
            "etatlieu": etatlieu
            // "Etat": Etat,
        }
      ];
      data.append('formateur', formateur)
      data.append('formati', JSON.stringify(form).slice(1,JSON.stringify(form).lastIndexOf(']')));
      return this.http.post(`http://localhost:8089/formation/ajout/${idutilisateur}`, data);
      }

      //




    // """"""""""""""""""Affiche tout les Etats de formation"""""""""""""
    getEtat(): Observable<object>{
      return this.http.get("http://localhost:8089/formation/enumValues")
    }

      // """"""""""""""""""Afficher Lieu  formation"""""""""""""
   VoirLieuFormation(): Observable<object>{
    return this.http.get("http://localhost:8089/formation/lieuformation")
  }

  EtatFormationFormateur(): Observable<object>{
    return this.http.get("http://localhost:8089/formation/voirvalidformateur")
  }
   // """"""""""""""""""Mettre Etats Formations Encours """""""""""""
   postFormationFormateur(idFormat:number,formationstatus:string): Observable<Formation>{
    return this.http.post<Formation>(`http://localhost:8089/formation/VALIDER/${idFormat}`,formationstatus)
  }

      // """"""""""""""""""Afficher etat  formation formateur"""""""""""""
      VoiretatFormationformateurv(): Observable<object>{
        return this.http.get("http://localhost:8089/formation/regardetat/valider")
      }

      // """"""""""""""""""Afficher etat  formation formateur"""""""""""""
      VoiretatFormationformateurn(): Observable<object>{
        return this.http.get("http://localhost:8089/formation/regardetat/nonvalider")
      }

}
