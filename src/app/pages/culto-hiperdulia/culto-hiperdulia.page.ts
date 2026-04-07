import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HiperduliaService } from 'src/app/services/hiperdulia.service';
import { Hiperdulias } from 'src/app/services/Hiperdulia';

@Component({
  selector: 'app-culto-hiperdulia',
  templateUrl: './culto-hiperdulia.page.html',
  styleUrls: ['./culto-hiperdulia.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CultoHiperduliaPage implements OnInit {

  Hiperdulias: Hiperdulias[] = [];
  loading = true;
  serviceHiperdulias = inject(HiperduliaService);
  private cdr = inject(ChangeDetectorRef);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor() { }

  ngOnInit() {
    this.serviceHiperdulias.obtenerHiperdulias().subscribe({
      next: (respuesta) => {
        console.log('Datos recibidos:', respuesta);
        this.Hiperdulias = respuesta;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.loading = false;
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
