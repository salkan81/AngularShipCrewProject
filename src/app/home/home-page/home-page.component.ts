import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  
  model = new Model()

  getCrewList(){
    return this.model.crewList
  }

  ngOnInit(): void {
  }

}
