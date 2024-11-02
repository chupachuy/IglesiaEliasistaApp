import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CultoPage } from './culto.page';

describe('CultoPage', () => {
  let component: CultoPage;
  let fixture: ComponentFixture<CultoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CultoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
