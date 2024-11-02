import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CultoDuliaPage } from './culto-dulia.page';

describe('CultoDuliaPage', () => {
  let component: CultoDuliaPage;
  let fixture: ComponentFixture<CultoDuliaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CultoDuliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
