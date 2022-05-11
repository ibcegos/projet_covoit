import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CguComponent } from './components/pages/cgu/cgu.component';
import { AdminComponent } from './components/pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CguComponent,
    AdminComponent
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
