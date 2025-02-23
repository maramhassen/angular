import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceListComponent } from './components/residence-list/residence-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/residences', pathMatch: 'full' }, 
  { path: 'residences', component: ResidenceListComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/residences' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
