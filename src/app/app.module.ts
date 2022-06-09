import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PropositionTrajetComponent } from './components/pages/proposition-trajet/proposition-trajet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { TrajetsComponent } from './components/pages/trajets/trajets.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AdminComponent } from './components/pages/admin/admin.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ConnectedPageComponent } from './components/pages/connected-page/connected-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { HistoriqueComponent } from './components/pages/historique/historique.component';





@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    HomePageComponent,
    PropositionTrajetComponent,
    HeaderComponent,
    FooterComponent,
    CguComponent,
    TrajetsComponent,
    AdminComponent,
    ConnectedPageComponent,
    ContactComponent,
    ProfilComponent,
    HistoriqueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    {provide: LOCALE_ID, useValue: 'fr-FR'},{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
 }
}
