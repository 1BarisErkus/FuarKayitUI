import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZiyaretciModel } from 'src/app/entity/models/ZiyaretciModel';
import { ZiyaretciServiceService } from 'src/app/entity/services/ziyaretci-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ziyaretci-liste',
  templateUrl: './ziyaretci-liste.component.html',
  styleUrls: ['./ziyaretci-liste.component.css']
})
export class ZiyaretciListeComponent implements OnInit {

  ziyaretciListe: ZiyaretciModel[] = [];
  fuarID: number = 0;
  inputArama: string = "";

  constructor(
    private apiSvc: ZiyaretciServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ZiyaretciListeGetir();
  }

  ZiyaretciListeGetir() {
    this.fuarID = Number(localStorage.getItem('fid') || '');
    this.apiSvc.ZiyaretciListeGetirSvc(0, this.fuarID)
      .subscribe((result) => {
        this.ziyaretciListe = result;
      })
  }

  ZiyaretciKayitSil(id: number) {
    this.apiSvc.ZiyaretciKayitSilSvc(id)
      .subscribe({
        next: result => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Kayıt Silindi',
              showConfirmButton: false,
              timer: 1500
            })
            this.ZiyaretciListeGetir();
        },
        error: error => {
          Swal.fire(
            'Kayıt Başarısız',
            error.error,
            'error');
        }
      });
    this.ZiyaretciListeGetir();
  }

  ZiyaretciKayitEklemeyeGit(id: number) {
    localStorage.setItem('zid', '0');
    this.router.navigate(['/ana-menu/ziyaretci-kayit']);
  }

  ZiyaretciKayitDegistirmeyeGit(id: number) {
    localStorage.setItem('zid', id.toString());
    this.router.navigate(['/ana-menu/ziyaretci-kayit']);
  }

  ZiyaretciKayitAra(inputArama: string) {
    this.apiSvc.ZiyaretciKayitAraSvc(inputArama, this.fuarID)
      .subscribe((result) => {
        this.ziyaretciListe = result;
      })
  }

}
