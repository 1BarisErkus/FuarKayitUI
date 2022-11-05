import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaLogoutComponent } from './firma-logout.component';

describe('FirmaLogoutComponent', () => {
  let component: FirmaLogoutComponent;
  let fixture: ComponentFixture<FirmaLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmaLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
