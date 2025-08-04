import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorosPage } from './coros.page';

describe('CorosPage', () => {
  let component: CorosPage;
  let fixture: ComponentFixture<CorosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
