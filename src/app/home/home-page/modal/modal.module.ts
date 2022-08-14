import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { CertificatesModule } from '../certificates/certificates.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,MatDialogModule,CertificatesModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
