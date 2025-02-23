import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceListComponent } from './components/residence-list/residence-list.component';
import { AppartementListComponent } from './components/appartement-list/appartement-list.component';
import { AchatComponent } from './components/achat/achat.component';
import { ChercheComponent } from './components/cherche/cherche.component';  
import { AjoutResidenceComponent } from './components/ajout-residence/ajout-residence.component';

const routes: Routes = [
  { path: '', component: ResidenceListComponent },
  { path: 'appartements/:id', component: AppartementListComponent },
  { path: 'achat', component: AchatComponent },
  { path: 'cherche', component: ChercheComponent }, 
  { path: 'ajout-residence', component: AjoutResidenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
