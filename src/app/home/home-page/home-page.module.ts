import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesModule } from './certificates/certificates.module';
import { ModalModule } from './modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes),CertificatesModule,ModalModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
