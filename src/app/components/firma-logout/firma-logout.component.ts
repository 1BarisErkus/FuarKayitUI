import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmaModel } from 'src/app/entity/models/FirmaModel';
import { FirmaService } from 'src/app/entity/services/firma.service';

@Component({
  selector: 'app-firma-logout',
  templateUrl: './firma-logout.component.html',
  styleUrls: ['./firma-logout.component.css']
})
export class FirmaLogoutComponent implements OnInit {

  constructor(
    private router: Router, 
    private apiSvc: FirmaService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.apiSvc.currentFirmaSubject.next(new FirmaModel());
    this.router.navigateByUrl('login');
  }

}
