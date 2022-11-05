import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuarKayitComponent } from './fuar-kayit.component';

describe('FuarKayitComponent', () => {
  let component: FuarKayitComponent;
  let fixture: ComponentFixture<FuarKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuarKayitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuarKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
