import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuarListeComponent } from './fuar-liste.component';

describe('FuarListeComponent', () => {
  let component: FuarListeComponent;
  let fixture: ComponentFixture<FuarListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuarListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuarListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
