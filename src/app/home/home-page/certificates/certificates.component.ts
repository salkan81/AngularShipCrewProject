import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/model';

@Component({
  selector: 'certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  
  crewId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {

  }

  model = new Model()

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.crewId = res.id;
    });
  }

  getCertificates(){
     const crewPerson =  this.model.crewList.filter(item => item.id == this.crewId)
    return crewPerson[0].certificates
  }

}
