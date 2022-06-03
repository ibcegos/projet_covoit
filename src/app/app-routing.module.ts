import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { PropositionTrajetComponent } from './components/pages/proposition-trajet/proposition-trajet.component';
import { TrajetRecurrentComponent } from './components/pages/proposition-trajet/trajet-récurrent/trajet-recurrent.component';
import { TrajetSimpleComponent } from './components/pages/proposition-trajet/trajet-simple/trajet-simple.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'proposition-trajet', component: PropositionTrajetComponent },
  { path: 'proposition-trajet/trajet-simple', component: TrajetSimpleComponent },
  { path: 'proposition-trajet/trajet-recurrent', component: TrajetRecurrentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
