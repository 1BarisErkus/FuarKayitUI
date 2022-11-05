import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuarModel } from '../models/FuarModel';

@Injectable({
  providedIn: 'root'
})
export class FuarServiceService {

  apiUrl: string = "http://localhost:5008/Fuar";

  constructor(
    private http: HttpClient
  ) { }

  FuarListeGetirSvc(id: number, firmaID: number) {
    return this.http.get<FuarModel[]>(this.apiUrl + '/liste?id=' + id + '&firmaID=' + firmaID);
  }

  FuarKayitSilSvc(id: number) {
    return this.http.delete(this.apiUrl + '/' + id)
  }

  FuarKayitEkle_GuncelleSvc(fuar: FuarModel) {
    if (fuar.ID > 0)
      return this.http.put(this.apiUrl, fuar);
    else
      return this.http.post(this.apiUrl, fuar);
  }

  FuarKayitAraSvc(gelenAd: string, firmaID: number) {
    return this.http.get<FuarModel[]>(this.apiUrl + '/ara?gelenAd=' + gelenAd + '&firmaID=' + firmaID)
  }

}