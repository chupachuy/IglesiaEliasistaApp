import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PredicasService } from 'src/app/services/predicas.service';

@Component({
  selector: 'app-predicas',
  templateUrl: './predicas.page.html',
  styleUrls: ['predicas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PredicasPage implements OnInit {

  Predicas: any[] = [];
  loaded = false;
  error = false;
  servicePredicas = inject(PredicasService);
  private cdr = inject(ChangeDetectorRef);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  ngOnInit() {
    this.cargarPredicas();
  }

  cargarPredicas() {
    this.loaded = false;
    this.error = false;
    this.servicePredicas.obtenerPredicas().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.Predicas = data;
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
