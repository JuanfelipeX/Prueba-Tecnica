import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'company', loadChildren: () => import('./pages/company/company/company.module').then(m => m.CompanyModule) }, { path: 'empanada', loadChildren: () => import('./pages/company/empanada/empanada.module').then(m => m.EmpanadaModule) }, { path: 'home', loadChildren: () => import('./pages/company/home/home.module').then(m => m.HomeModule) }, { path: 'contact', loadChildren: () => import('./pages/company/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
