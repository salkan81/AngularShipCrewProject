import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { HomePageModule } from './home-page/home-page.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, LayoutsModule, HomePageModule,MatDialogModule
  ],
  exports: [LayoutsModule, HomePageModule]
})
export class HomeModule { }
