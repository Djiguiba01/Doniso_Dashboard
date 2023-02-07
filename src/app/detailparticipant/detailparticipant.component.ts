import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../Service/participant.service';

@Component({
  selector: 'app-detailparticipant',
  templateUrl: './detailparticipant.component.html',
  styleUrls: ['./detailparticipant.component.css']
})
export class DetailparticipantComponent implements OnInit{

  participant : any;

  constructor(private participantService: ParticipantService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const idFormat = +this.route.snapshot.params["idPart"];
    //  const id = this.route.snapshot.params['id'];
    // console.log(id);

    this.participantService.getParticipantid(idFormat).subscribe(
      (data) => {
        this.participant = data;
        console.log(this.participant);
      }
    )
  }


}
