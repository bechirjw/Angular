import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component'; // Ajout de l'import
import { RdetailComponent } from './rdetail/rdetail.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';

//routage :
const routes: Routes = [
  //path:'residence'
  { path: 'residence', component: ResidenceComponent },
  { path: 'residencedetails/:id', component: RdetailComponent },
  {path : 'formulaire',component: FormulaireComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
