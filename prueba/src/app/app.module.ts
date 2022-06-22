import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { ContanctComponent } from './shared/components/contanct/contanct.component';
import { ContanctModule } from './shared/components/contanct/contanct.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContanctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ContanctModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
