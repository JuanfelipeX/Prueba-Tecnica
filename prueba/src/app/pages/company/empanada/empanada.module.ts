import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpanadaRoutingModule } from './empanada-routing.module';
import { EmpanadaComponent } from './empanada.component';


@NgModule({
  declarations: [
    EmpanadaComponent
  ],
  imports: [
    CommonModule,
    EmpanadaRoutingModule
  ]
})
export class EmpanadaModule { }
