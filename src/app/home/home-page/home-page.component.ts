import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificateModel, Model } from 'src/app/model';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(crewId: number, crewCertificates: CertificateModel[]) {
    this.dialog.open(ModalComponent,{ data: {id: crewId, modalCertif:  crewCertificates}});
  }
  
  model = new Model()

  getCrewList(){
    return this.model.crewList
  }

  ngOnInit(): void {
  }

}
