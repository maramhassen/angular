import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceListComponent } from './components/residence-list/residence-list.component';
import { AppartementListComponent } from './components/appartement-list/appartement-list.component';
import { AchatComponent } from './components/achat/achat.component';
import { ChercheComponent } from './components/cherche/cherche.component';
import { AjoutResidenceComponent } from './components/ajout-residence/ajout-residence.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceListComponent,
    AppartementListComponent,
    AchatComponent,
    ChercheComponent,
    AjoutResidenceComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Ajouté ici ✅
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
