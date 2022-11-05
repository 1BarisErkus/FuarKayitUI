import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirmaModel } from 'src/app/entity/models/FirmaModel';
import { FuarModel } from 'src/app/entity/models/FuarModel';
import { FirmaService } from 'src/app/entity/services/firma.service';
import { FuarServiceService } from 'src/app/entity/services/fuar-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fuar-kayit',
  templateUrl: './fuar-kayit.component.html',
  styleUrls: ['./fuar-kayit.component.css']
})
export class FuarKayitComponent implements OnInit {

  kayitRef: number = 0;
  fuar = new FuarModel();
  firmaAd: FirmaModel[] = [];
  firma = new FirmaModel();

  constructor(
    private apiSvc: FuarServiceService,
    private firmaApiSvc: FirmaService
  ) { }

  ngOnInit(): void {
    this.kayitRef = Number(localStorage.getItem('fid'));
    this.fuar = JSON.parse(localStorage.getItem('fuar') || '{}')
    localStorage.removeItem('fid')
    if (this.kayitRef > 0) {
      this.getFuar();
    }
    this.getFirmaAd();
    this.firma = JSON.parse(localStorage.getItem('currentFirma') || '{"ID": 0, "FIRMA_AD": "", "EMAIL": "", "SIFRE": ""}');
  }

  getFuar() {
    this.firma = JSON.parse(localStorage.getItem('currentFirma') || '{"ID": 0, "FIRMA_AD": "", "EMAIL": "", "SIFRE": ""}');
    this.apiSvc.FuarListeGetirSvc(this.kayitRef, this.firma.ID)
      .subscribe((result) => {
        this.fuar = result[0];
        this.modelToForm();
      });
  }

  fgKayit = new FormGroup(
    {
      firma_id: new FormControl(''),
      fuar_adi: new FormControl(''),
      aciklama: new FormControl('')
    }
  );

  modelToForm() {
    this.fgKayit.controls.firma_id.setValue(this.firma.ID.toString());
    this.fgKayit.controls.fuar_adi.setValue(this.fuar.FUAR_AD.toString());
    this.fgKayit.controls.aciklama.setValue(this.fuar.ACIKLAMA.toString());
  }

  formToModel() {
    this.fuar.FIRMA_ID = Number(this.firma.ID);
    this.fuar.FUAR_AD = this.fgKayit.controls.fuar_adi.value || '';
    this.fuar.ACIKLAMA = this.fgKayit.controls.aciklama.value || '';
  }

  FuarKayitEkle_Guncelle(){
    this.formToModel();
    this.apiSvc.FuarKayitEkle_GuncelleSvc(this.fuar).subscribe({
      next: result => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Kayıt Düzenlendi',
            showConfirmButton: false,
            timer: 1500
          })
      },
      error: error => {
        Swal.fire(
          'Kayıt Başarısız',
          error.error,
          'error');
      }
    });
  }

  getFirmaAd(){
      this.firmaApiSvc.FirmaListeGetirSvc()
        .subscribe((result: FirmaModel[]) => {
          this.firmaAd = result;
        })
  }

}
