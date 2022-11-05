import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiyaretciListeComponent } from './ziyaretci-liste.component';

describe('ZiyaretciListeComponent', () => {
  let component: ZiyaretciListeComponent;
  let fixture: ComponentFixture<ZiyaretciListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiyaretciListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZiyaretciListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
