import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OracionesPage } from './oraciones.page';

describe('OracionesPage', () => {
  let component: OracionesPage;
  let fixture: ComponentFixture<OracionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OracionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
