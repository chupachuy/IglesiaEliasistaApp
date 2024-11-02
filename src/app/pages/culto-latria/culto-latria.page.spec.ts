import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CultoLatriaPage } from './culto-latria.page';

describe('CultoLatriaPage', () => {
  let component: CultoLatriaPage;
  let fixture: ComponentFixture<CultoLatriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CultoLatriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
