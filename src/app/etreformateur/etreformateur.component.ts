import { Component, OnInit } from '@angular/core';
import { EtreformateurService } from '../Service/etreformateur.service';

@Component({
  selector: 'app-etreformateur',
  templateUrl: './etreformateur.component.html',
  styleUrls: ['./etreformateur.component.css']
})
export class EtreformateurComponent implements OnInit{
  etformateur: any;

  constructor(
    private etreformateur: EtreformateurService,
    ) {}

  ngOnInit(): void {

    this.etreformateur.getDemand().subscribe(data=>{
      this.etformateur = data
    })
  }

}
