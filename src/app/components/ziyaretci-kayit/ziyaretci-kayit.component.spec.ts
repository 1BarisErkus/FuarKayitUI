import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiyaretciKayitComponent } from './ziyaretci-kayit.component';

describe('ZiyaretciKayitComponent', () => {
  let component: ZiyaretciKayitComponent;
  let fixture: ComponentFixture<ZiyaretciKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiyaretciKayitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZiyaretciKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
