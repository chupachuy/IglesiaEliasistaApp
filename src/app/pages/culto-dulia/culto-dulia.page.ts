import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DuliaService } from 'src/app/services/dulia.service';
import { Dulias } from 'src/app/services/Dulias';

@Component({
  selector: 'app-culto-dulia',
  templateUrl: './culto-dulia.page.html',
  styleUrls: ['./culto-dulia.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CultoDuliaPage implements OnInit {

  Dulias: Dulias[] = [];
  loading = true;
  serviceDulias = inject(DuliaService);
  private cdr = inject(ChangeDetectorRef);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor() { }

  ngOnInit() {
    this.serviceDulias.obtenerDulias().subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.Dulias = respuesta;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
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
