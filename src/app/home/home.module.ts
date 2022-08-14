import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { HomePageModule } from './home-page/home-page.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, LayoutsModule, HomePageModule
  ],
  exports: [LayoutsModule, HomePageModule]
})
export class HomeModule { }
