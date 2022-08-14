import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CertificateModel } from 'src/app/model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
   modalId : number;
   modalCertificates: CertificateModel[];

   constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) data: { id : number, modalCertif: CertificateModel[]}) { 
   this.modalId = data.id,
   this.modalCertificates = data.modalCertif
  }

   getModalCertificates(){
    return this.modalCertificates
   }
   closeDialog(){
    this.dialog.closeAll()
    console.log("modal",this.modalCertificates)
   } 

   ngOnInit(): void {
   }

}
