import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GacetaPage } from './gaceta.page';

describe('GacetaPage', () => {
  let component: GacetaPage;
  let fixture: ComponentFixture<GacetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GacetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
