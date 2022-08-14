import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CrewCardPageComponent } from './crew-card-page/crew-card-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HomePageComponent],
})
export class HomePageModule {}
