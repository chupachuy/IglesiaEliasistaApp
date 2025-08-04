import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PredicasPage } from './predicas.page';

describe('PredicasPage', () => {
  let component: PredicasPage;
  let fixture: ComponentFixture<PredicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PredicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
