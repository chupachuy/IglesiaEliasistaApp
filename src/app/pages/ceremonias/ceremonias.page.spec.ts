import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CeremoniasPage } from './ceremonias.page';

describe('CeremoniasPage', () => {
  let component: CeremoniasPage;
  let fixture: ComponentFixture<CeremoniasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CeremoniasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
