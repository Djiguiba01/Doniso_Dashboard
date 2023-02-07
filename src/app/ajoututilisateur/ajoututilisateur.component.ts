import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-ajoututilisateur',
  templateUrl: './ajoututilisateur.component.html',
  styleUrls: ['./ajoututilisateur.component.css']
})
export class AjoututilisateurComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    nom: null,
    profession:null,
    contact: null,
    sexe: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, nom, contact, profession, sexe } = this.form;

    this.authService.register(username, email, password, nom, contact, profession, sexe).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // Redirection page
        this.route.navigateByUrl("/connexion")

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
