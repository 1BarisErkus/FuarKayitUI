import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirmaModel } from '../models/FirmaModel';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {
  apiUrl: string = "http://localhost:5008/Firma";
  currentFirmaSubject: BehaviorSubject<FirmaModel>;
  currentFirma: Observable<FirmaModel>;

  constructor(
    private http: HttpClient) {
    this.currentFirmaSubject = new BehaviorSubject<FirmaModel>(JSON.parse(localStorage.getItem('currentFirma') || '{"ID": 0, "FIRMA_AD": "", "EMAIL": "", "SIFRE": ""}'));
    this.currentFirma = this.currentFirmaSubject.asObservable();
  }

  get currentFirmaValue(): FirmaModel {
    return this.currentFirmaSubject.value;
  }

  loginControl(email: string, sifre: string){
    let firma1: FirmaModel = new FirmaModel();
    firma1.EMAIL = email;
    firma1.SIFRE = sifre;
    return this.http.post<FirmaModel>(this.apiUrl + '/loginKontrol', firma1);
  }

  FirmaListeGetirSvc(){
    return this.http.get<FirmaModel[]>(this.apiUrl + '/liste');
  }

}