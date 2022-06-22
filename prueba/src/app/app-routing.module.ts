import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'company', loadChildren: () => import('./pages/company/company/company.module').then(m => m.CompanyModule) }, { path: 'empanada', loadChildren: () => import('./pages/company/empanada/empanada.module').then(m => m.EmpanadaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
