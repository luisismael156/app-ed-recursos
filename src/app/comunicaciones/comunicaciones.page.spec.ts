import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunicacionesPage } from './comunicaciones.page';

describe('ComunicacionesPage', () => {
  let component: ComunicacionesPage;
  let fixture: ComponentFixture<ComunicacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComunicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
