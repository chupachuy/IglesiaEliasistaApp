import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevocionarioPage } from './devocionario.page';

describe('DevocionarioPage', () => {
  let component: DevocionarioPage;
  let fixture: ComponentFixture<DevocionarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DevocionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
