import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { TrajetsComponent } from './components/pages/trajets/trajets.component';
import { PropositionTrajetComponent } from './components/pages/proposition-trajet/proposition-trajet.component';
import { ConnectedPageComponent } from './components/pages/connected-page/connected-page.component';
import { RoleGuard } from './components/shared/role.guard';
import { AuthGuard } from './components/shared/auth.guard';






const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'trajets', component: TrajetsComponent},
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard]},
  { path: 'proposition-trajet', component:PropositionTrajetComponent, canActivate: [AuthGuard]},
  { path: 'connected-page', component: ConnectedPageComponent,canActivate: [AuthGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
