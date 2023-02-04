
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutformationComponent } from './ajoutformation/ajoutformation.component';
import { DetailformationComponent } from './detailformation/detailformation.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
   { path: 'Dashboard', component: DashboardComponent },
   { path: 'AjoutFormat', component: AjoutformationComponent },
   { path: 'Detailformation', component: DetailformationComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
