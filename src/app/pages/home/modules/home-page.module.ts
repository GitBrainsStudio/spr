import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { LayoutModule } from 'src/app/features/layout/modules/layout.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LayoutModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule {}
