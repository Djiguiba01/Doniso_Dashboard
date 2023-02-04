import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailformation',
  templateUrl: './detailformation.component.html',
  styleUrls: ['./detailformation.component.css']
})
export class DetailformationComponent implements OnInit{

  idFormat:any;
  
  constructor(
    private route:ActivatedRoute,
  ){}


  ngOnInit(): void {
    this.idFormat=this.route.snapshot.params['idFormat'];
  }

}
