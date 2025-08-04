import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CultoHiperduliaPage } from './culto-hiperdulia.page';

describe('CultoHiperduliaPage', () => {
  let component: CultoHiperduliaPage;
  let fixture: ComponentFixture<CultoHiperduliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CultoHiperduliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
