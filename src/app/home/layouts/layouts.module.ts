import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { NavbarModule } from './navbar/navbar.module';

const routes: Routes = [
  {
    path:'',
    component:LayoutsComponent
  },
];

@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NavbarModule],
  exports: [LayoutsComponent]
  
})
export class LayoutsModule { }
