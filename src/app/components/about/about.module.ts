import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { HistoriaComponent } from './pages/historia/historia.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HistoriaComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
