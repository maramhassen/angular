import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceListComponent } from './components/residence-list/residence-list.component';
import { AppartementListComponent } from './components/appartement-list/appartement-list.component';
import { AchatComponent } from './components/achat/achat.component';
import { ChercheComponent } from './components/cherche/cherche.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResidencesComponent } from './components/residences/residences/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { ApartmentsComponent } from './components/apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceListComponent,
    AppartementListComponent,
    AchatComponent,
    ChercheComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddResidenceComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
