import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PropositionTrajetComponent } from './components/pages/proposition-trajet/proposition-trajet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { TrajetSimpleComponent } from './components/pages/proposition-trajet/trajet-simple/trajet-simple.component';
import { TrajetRecurrentComponent } from './components/pages/proposition-trajet/trajet-récurrent/trajet-recurrent.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    HomePageComponent,
    PropositionTrajetComponent,
    HeaderComponent,
    FooterComponent,
    CguComponent,
    AdminComponent, 
    TrajetSimpleComponent, 
    TrajetRecurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
