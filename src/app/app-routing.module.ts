import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaMenuComponent } from './components/ana-menu/ana-menu.component';
import { FirmaLoginComponent } from './components/firma-login/firma-login.component';
import { FirmaLogoutComponent } from './components/firma-logout/firma-logout.component';
import { FuarKayitComponent } from './components/fuar-kayit/fuar-kayit.component';
import { FuarListeComponent } from './components/fuar-liste/fuar-liste.component';
import { ZiyaretciKayitComponent } from './components/ziyaretci-kayit/ziyaretci-kayit.component';
import { ZiyaretciListeComponent } from './components/ziyaretci-liste/ziyaretci-liste.component';
import { AuthGuard } from './entity/services/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: FirmaLoginComponent
  },

  {
    path: 'login',
    component: FirmaLoginComponent
  },

  {
    path: 'logout',
    component: FirmaLogoutComponent
  },

  {
    path: 'ana-menu',
    component: AnaMenuComponent,
    children:
    [
      {
        path: '',
        component: FuarListeComponent
      },

      {
        path: 'fuar-liste',
        canActivate: [AuthGuard],
        component: FuarListeComponent
      },

      {
        path: 'fuar-kayit',
        component: FuarKayitComponent
      },

      {
        path: 'ziyaretci-liste',
        component: ZiyaretciListeComponent
      },

      {
        path: 'ziyaretci-kayit',
        component: ZiyaretciKayitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
