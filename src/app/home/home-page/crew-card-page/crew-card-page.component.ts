import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-crew-card-page',
  templateUrl: './crew-card-page.component.html',
  styleUrls: ['./crew-card-page.component.scss']
})
export class CrewCardPageComponent implements OnInit {

  crewId: number = 0;
  model = new Model()
  
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.crewId = res.id;
    });
  }

  getCrewId(){
    return this.crewId
  }

  getCrewDetail(){
    return this.model.crewList.filter(item => item.id == this.crewId)[0]
  }

  getCrew(){
    return this.model.crewList
  }

}
