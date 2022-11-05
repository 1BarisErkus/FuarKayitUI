import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZiyaretciModel } from '../models/ZiyaretciModel';

@Injectable({
  providedIn: 'root'
})
export class ZiyaretciServiceService {

  apiUrl: string = "http://localhost:5008/Ziyaretci";

  constructor(
    private http: HttpClient
  ) { }

  ZiyaretciListeGetirSvc(id: number, fuarID: number) {
    return this.http.get<ZiyaretciModel[]>(this.apiUrl + '/liste?id=' + id + '&fuarID=' + fuarID);
  }

  ZiyaretciKayitSilSvc(id: number) {
    return this.http.delete(this.apiUrl + '/' + id)
  }

  ZiyaretciKayitEkle_GuncelleSvc(ziyaret: ZiyaretciModel) {
    if (ziyaret.ID > 0)
      return this.http.put(this.apiUrl, ziyaret);
    else
      return this.http.post(this.apiUrl, ziyaret);
  }

  ZiyaretciKayitAraSvc(gelenAd: string, fuarID:number) {
    return this.http.get<ZiyaretciModel[]>(this.apiUrl + '/ara?gelenAd=' + gelenAd + '&fuarID=' + fuarID)
  }

}
