import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtreformateurService {

  constructor(private http:HttpClient) { }

    
    // """"""""""""""""""Affiche tout les Participants"""""""""""""
  getDemand(): Observable<object>{
    return this.http.get("http://localhost:8089/demandetreformateur/voir")
  }

  
}
