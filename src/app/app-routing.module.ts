import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { PropositionTrajetComponent } from './components/pages/proposition-trajet/proposition-trajet.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'proposition-trajet', component: PropositionTrajetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
