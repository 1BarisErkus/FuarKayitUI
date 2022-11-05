import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmaModel } from 'src/app/entity/models/FirmaModel';
import { FirmaService } from 'src/app/entity/services/firma.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-firma-login',
  templateUrl: './firma-login.component.html',
  styleUrls: ['./firma-login.component.css']
})
export class FirmaLoginComponent implements OnInit {

  gEmail: string = '';
  gSifre: string = '';

  constructor(
    private apiSvc: FirmaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  girisYap() {
    this.apiSvc.loginControl(this.gEmail, this.gSifre).subscribe(
      {
        next: dataResult => { 
          if (dataResult.ID > 0) {
            localStorage.setItem('currentFirma', JSON.stringify(dataResult));
            this.apiSvc.currentFirmaSubject.next(dataResult);
            this.router.navigateByUrl('ana-menu/fuar-liste');
          }
        },
        error: hata => {
          Swal.fire({
            icon: 'error',
            title: 'Hata oluştu!',
            text: hata.error,
          })
        }
      }
    );


    /*

    this.apiSvc.loginControl(this.gEmail, this.gSifre)
      .subscribe((result) => {
        if (result == 1) {
          this.router.navigate(['ana-menu/fuar-liste'])
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Eksik veya hatalı giriş yaptınız!',
          })
        }
      })
      */
  }

}
