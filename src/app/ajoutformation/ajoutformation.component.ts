import { Component, OnInit } from '@angular/core';
import { FormationService } from '../Service/formation.service';
import { UtilisateurService } from '../Service/utilisateur.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent implements OnInit{

  // Formation
    idFormat:any;
    titre!: any;
    moduletitre!:any;
    lieu!: any;
    description!: any;
    contact!: any;
    // heure!:any;
    heuretemps!: any;
    emailformateur!: any;
    datedebut!: any;
    datefin!: any;
    etatlieu: any;
    // image: any;
    Etat: any;
    tout:any
  image: any;
  idutilisateur! : any
  LieuFormat: any;

  // Méthode pour vider le champs lors d'ajout
  form1(){
    this.titre= '',
    this.moduletitre= '',
    this.lieu = '',
    this.description= '',
    this.contact= '',
    // this.heure= '',
    this.heuretemps= '',
    this.emailformateur= '',
    this.datedebut= '',
    this.datefin= '',
    this.etatlieu,
    this.image= ''
  }

  // Formateur
  formateurs:any;
  nomformateur! :string

  constructor(
    private formatioservice: FormationService,
    private formateurserv: UtilisateurService,
    private storageService: StorageService
    ) {}

  ngOnInit() {
    // Voir formateurs:::::::::::::::::::::
    this.formateurserv.voirFormateurformateur().subscribe(data=>{
      this.formateurs=data;
      console.log(this.formateurs);
    });
    this.idutilisateur = JSON.parse(localStorage.getItem("auth-user")!).id;
    console.log(localStorage.getItem("auth-user"))

     // Voir Lieu Formation:::::::::::::::::::::
     this.formatioservice.VoirLieuFormation().subscribe(data=>{
      this.LieuFormat=data;
      console.log(this.formateurs);
    });

  }

  // Ajout formation::::::::::::::::::::::::::::
  currentUser: any;
  form=[
    {
      "titre": this.titre,
      "moduletitre":this.moduletitre,
      "lieu": this.lieu,
      "description": this.description,
      "contact": this.contact,
      // "heure": this.heure,
      "heuretemps": this.heuretemps,
      // "emailformateur": this.emailformateur,
      "datedebut": this.datedebut,
      "datefin": this.datefin,
      // "LieuFormation": this.LieuFormation,
      // "Etat": Etat,
  }
]
// Ajout image
recupererImage(event:any){
  this.image = event.target.files[0];
  console.log(this.image)
}
  // Création méthode Sur le button formation
  Ajoutformation(){
    console.log(this.nomformateur)
    this.formatioservice.AjoutFormat(this.titre,this.moduletitre,this.lieu,this.description,this.contact,this.heuretemps,this.datedebut,this.datefin, this.etatlieu,this.idutilisateur,this.nomformateur,this.image).subscribe(data =>{
      this.tout=data;
      console.log("ajout"+this.tout)
});
// Vider le champs Quand on clique sur button
this.form1();
}

}
