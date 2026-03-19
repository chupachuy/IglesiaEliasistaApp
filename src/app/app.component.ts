import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.checkDarkTheme();
  }

  private checkDarkTheme(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      document.body.classList.add('dark');
    }
    // Escuchar cambios en tiempo real
    prefersDark.addEventListener('change', (e) => {
      document.body.classList.toggle('dark', e.matches);
    });
  }
}
