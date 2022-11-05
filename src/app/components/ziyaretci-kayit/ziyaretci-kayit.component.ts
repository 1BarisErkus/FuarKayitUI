import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FuarModel } from 'src/app/entity/models/FuarModel';
import { ZiyaretciModel } from 'src/app/entity/models/ZiyaretciModel';
import { FirmaModel } from 'src/app/entity/models/FirmaModel';
import { FuarServiceService } from 'src/app/entity/services/fuar-service.service';
import { ZiyaretciServiceService } from 'src/app/entity/services/ziyaretci-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ziyaretci-kayit',
  templateUrl: './ziyaretci-kayit.component.html',
  styleUrls: ['./ziyaretci-kayit.component.css']
})
export class ZiyaretciKayitComponent implements OnInit {

  kayitRef: number = 0;
  ziyaretci = new ZiyaretciModel();
  fuarID: FuarModel[] = [];
  firma = new FirmaModel();
  idFuar: number = 0;

  constructor(
    private apiSvc: ZiyaretciServiceService,
    private fuarApiSvc: FuarServiceService
  ) { }

  ngOnInit(): void {
    this.kayitRef = Number(localStorage.getItem('zid'));
    this.ziyaretci = JSON.parse(localStorage.getItem('ziyaretci') || '{}')
    localStorage.removeItem('id')
    if (this.kayitRef > 0) {
      this.getZiyaretci();
    }
    this.getFuarId();
    this.idFuar = Number(localStorage.getItem('fid') || '');
  }

  getZiyaretci() {
    this.idFuar = Number(localStorage.getItem('fid') || '');
    this.apiSvc.ZiyaretciListeGetirSvc(this.kayitRef, this.idFuar)
      .subscribe((result) => {
        this.ziyaretci = result[0];
        this.modelToForm();
      });
  }

  fgKayit = new FormGroup(
    {
      fuar_id: new FormControl(''),
      ziyaret_tarihi: new FormControl(''),
      ziyaretci_ad_soyad: new FormControl(''),
      email: new FormControl(''),
      telefon: new FormControl(''),
      firma_adi: new FormControl(''),
      aciklama: new FormControl('')
    }
  );

  modelToForm() {
    this.fgKayit.controls.fuar_id.setValue(this.idFuar.toString());
    this.fgKayit.controls.ziyaret_tarihi.setValue(this.ziyaretci.ZIYARET_TARIH!.toString().substring(0,10));
    this.fgKayit.controls.ziyaretci_ad_soyad.setValue(this.ziyaretci.ZIYARETCI_AD_SOYAD.toString());
    this.fgKayit.controls.email.setValue(this.ziyaretci.EMAIL.toString());
    this.fgKayit.controls.telefon.setValue(this.ziyaretci.TELEFON.toString());
    this.fgKayit.controls.firma_adi.setValue(this.ziyaretci.FIRMA_AD.toString());
    this.fgKayit.controls.aciklama.setValue(this.ziyaretci.ACIKLAMA.toString());
  }

  formToModel() {
    this.ziyaretci.FUAR_ID = Number(this.idFuar);
    this.ziyaretci.ZIYARET_TARIH = this.inputControlToModel(this.fgKayit.controls.ziyaret_tarihi.value);
    this.ziyaretci.ZIYARETCI_AD_SOYAD = this.fgKayit.controls.ziyaretci_ad_soyad.value || '';
    this.ziyaretci.EMAIL = this.fgKayit.controls.email.value || '';
    this.ziyaretci.TELEFON = this.fgKayit.controls.telefon.value || '';
    this.ziyaretci.FIRMA_AD = this.fgKayit.controls.firma_adi.value || '';
    this.ziyaretci.ACIKLAMA = this.fgKayit.controls.aciklama.value || '';
  }


  inputControlToModel(tarihUnput: any): any {
    if (typeof(tarihUnput) == 'string'){
      return tarihUnput;
    }
    else{
      if (tarihUnput == null) return null;
    }
  }

  ZiyaretciKayitEkle_Guncelle(){
    this.formToModel();
    this.apiSvc.ZiyaretciKayitEkle_GuncelleSvc(this.ziyaretci)
    .subscribe({
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

  getFuarId(){
    this.firma = JSON.parse(localStorage.getItem('currentFirma') || '{"ID": 0, "FIRMA_AD": "", "EMAIL": "", "SIFRE": ""}');
    this.fuarApiSvc.FuarListeGetirSvc(0, this.firma.ID)
      .subscribe((result: FuarModel[]) => {
        this.fuarID = result;
      })
}

}
