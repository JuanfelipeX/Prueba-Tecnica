import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpanadaComponent } from './empanada.component';

const routes: Routes = [{ path: '', component: EmpanadaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpanadaRoutingModule { }
