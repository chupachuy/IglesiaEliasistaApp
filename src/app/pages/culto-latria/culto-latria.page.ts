import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LatriaService } from 'src/app/services/latria.service';

@Component({
  selector: 'app-culto-latria',
  templateUrl: './culto-latria.page.html',
  styleUrls: ['culto-latria.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CultoLatriaPage implements OnInit {

  Latrias: any[] = [];
  loaded = false;
  error = false;
  serviceLatria = inject(LatriaService);
  private cdr = inject(ChangeDetectorRef);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  ngOnInit() {
    this.cargarLatrias();
  }

  cargarLatrias() {
    this.loaded = false;
    this.error = false;
    this.serviceLatria.obtenerLatrias().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.Latrias = data;
        this.loaded = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = true;
        this.loaded = true;
        this.cdr.detectChanges();
      }
    });
  }

  increaseFont(): void {
    if (this.fontSize < this.maxFontSize) {
      this.fontSize += this.fontStep;
    }
  }

  decreaseFont(): void {
    if (this.fontSize > this.minFontSize) {
      this.fontSize -= this.fontStep;
    }
  }

  resetFont(): void {
    this.fontSize = this.defaultFontSize;
  }

}
