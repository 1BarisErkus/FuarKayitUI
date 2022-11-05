import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirmaLoginComponent } from './components/firma-login/firma-login.component';
import { FuarListeComponent } from './components/fuar-liste/fuar-liste.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnaMenuComponent } from './components/ana-menu/ana-menu.component';
import { FuarKayitComponent } from './components/fuar-kayit/fuar-kayit.component';
import { ZiyaretciListeComponent } from './components/ziyaretci-liste/ziyaretci-liste.component';
import { ZiyaretciKayitComponent } from './components/ziyaretci-kayit/ziyaretci-kayit.component';
import { FirmaLogoutComponent } from './components/firma-logout/firma-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    FirmaLoginComponent,
    FuarListeComponent,
    NavbarComponent,
    AnaMenuComponent,
    FuarKayitComponent,
    ZiyaretciListeComponent,
    ZiyaretciKayitComponent,
    FirmaLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
