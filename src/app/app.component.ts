import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {

  isDarkMode: boolean = false;
  private themeService = inject(ThemeService);

  constructor() {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit() {}

  toggleDarkMode(): void {
    this.themeService.toggle();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  exitApp(): void {
    App.exitApp();
  }
}
