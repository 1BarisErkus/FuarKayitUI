import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmaModel } from 'src/app/entity/models/FirmaModel';
import { FuarModel } from 'src/app/entity/models/FuarModel';
import { FuarServiceService } from 'src/app/entity/services/fuar-service.service';
import Swal from 'sweetalert2';
import { FirmaLoginComponent } from '../firma-login/firma-login.component';

@Component({
  selector: 'app-fuar-liste',
  templateUrl: './fuar-liste.component.html',
  styleUrls: ['./fuar-liste.component.css']
})

export class FuarListeComponent implements OnInit {

  fuarListe: FuarModel[] = [];
  firma = new FirmaModel();
  inputArama: string = "";

  constructor(
    private apiSvc: FuarServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.FuarListeGetir();
  }

  FuarListeGetir(){
    this.firma = JSON.parse(localStorage.getItem('currentFirma') || '{"ID": 0, "FIRMA_AD": "", "EMAIL": "", "SIFRE": ""}');
    this.apiSvc.FuarListeGetirSvc(0, this.firma.ID)
    .subscribe((result) => {
      this.fuarListe = result;
    })
  }

  FuarKayitSil(id: number){
    this.apiSvc.FuarKayitSilSvc(id)
    .subscribe({
      next: result => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Kayıt Silindi',
            showConfirmButton: false,
            timer: 1500
          })
          this.FuarListeGetir();
      },
      error: error => {
        Swal.fire(
          'Kayıt Başarısız',
          error.error,
          'error');
      }
    });
    
  }

  FuarKayitEklemeyeGit(){
    localStorage.setItem('fid', '0');
    this.router.navigate(['/ana-menu/fuar-kayit']);
  }

  FuarKayitDegistirmeyeGit(id: number){
    localStorage.setItem('fid', id.toString());
    this.router.navigate(['/ana-menu/fuar-kayit']);
  }

  ZiyaretciListeyeGit(id: number){
    localStorage.setItem('fid', id.toString());
    this.router.navigate(['/ana-menu/ziyaretci-liste']);
  }

  FuarKayitAra(inputArama: string){
    this.apiSvc.FuarKayitAraSvc(inputArama, this.firma.ID)
    .subscribe((result)=>{
      this.fuarListe = result;
    })
  }



}
