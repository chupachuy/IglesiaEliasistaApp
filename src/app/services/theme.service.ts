import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'darkMode';
  private darkMode = false;

  constructor() {
    this.loadPreference();
  }

  private loadPreference(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored !== null) {
      this.darkMode = stored === 'true';
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  toggle(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem(this.STORAGE_KEY, String(this.darkMode));
    this.applyTheme();
  }

  setDarkMode(enabled: boolean): void {
    this.darkMode = enabled;
    localStorage.setItem(this.STORAGE_KEY, String(this.darkMode));
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark', this.darkMode);
  }
}
