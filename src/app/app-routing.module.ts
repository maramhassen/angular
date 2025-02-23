import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ResidencesComponent } from './components/residences/residences/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './components//apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'residences', component: ResidencesComponent }, 
  { path: 'residences/:id', component: ResidenceDetailsComponent }, 
  { path: 'residences/add', component: AddResidenceComponent }, 
  { path: 'residences/:id/edit', component: AddResidenceComponent }, 

  { path: 'apartments', component: ApartmentsComponent }, 
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent }, 
  { path: 'apartments/add', component: AddApartmentComponent }, 
  { path: 'apartments/:id/edit', component: AddApartmentComponent }, 

  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
