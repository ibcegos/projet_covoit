import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { TrajetsComponent } from './components/pages/trajets/trajets.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'trajets', component: TrajetsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
