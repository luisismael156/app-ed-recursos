import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalsocialPage } from './personalsocial.page';

describe('PersonalsocialPage', () => {
  let component: PersonalsocialPage;
  let fixture: ComponentFixture<PersonalsocialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalsocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
