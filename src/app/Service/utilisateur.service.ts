import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Class/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  // """"""""""""""""""Affiche tout les Admin"""""""""""""
  voirFormateuradmin(): Observable<object>{
    let valeur = "admin"
    return this.http.get(`http://localhost:8089/utlisateursecond/roles/${valeur}`)
  }

  // """"""""""""""""""Affiche tout les formateurs"""""""""""""
  voirFormateurformateur(): Observable<object>{
    let valeur = "form"
    return this.http.get(`http://localhost:8089/utlisateursecond/roles/${valeur}`)
  }

    // """"""""""""""""""Affiche tout les Auditeur"""""""""""""
    voirFormateurauditeur(): Observable<object>{ 
      let valeur = "audiaaaaa"
      return this.http.get(`http://localhost:8089/utlisateursecond/roles/${valeur}`)
    }

     // """"""""""""""""""Affiche les Utilisateurs Par_ID """""""""""""
     voirToutUtilisateur(id:number): Observable<Utilisateur>{
      return this.http.get<Utilisateur>(`http://localhost:8089/utlisateursecond/voir/${id}`)
    }
 
}
