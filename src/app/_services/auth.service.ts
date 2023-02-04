import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8089/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'connexion',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, nom: String, contact:String, profession: String, sexe: String): Observable<any> {
    const data = new FormData();
    const donnee = [{
        "username":username,
        "nomcomplet":nom,
        "contact":contact,
        "profession":profession,
        "sexe":sexe,
        "email":email,
        "password":password
        
    }]
    data.append('data', JSON.stringify(donnee).slice(1,JSON.stringify(donnee).lastIndexOf(']')));

    return this.http.post(
      AUTH_API + 'inscription', data);
    //   {
    //     username,
    //     email,
    //     password,
    //   },
    //   httpOptions
    // );
  }

  logout():Observable<any>{
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
      return this.http.request(req);
  }
}