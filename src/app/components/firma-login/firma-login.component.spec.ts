import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaLoginComponent } from './firma-login.component';

describe('FirmaLoginComponent', () => {
  let component: FirmaLoginComponent;
  let fixture: ComponentFixture<FirmaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
