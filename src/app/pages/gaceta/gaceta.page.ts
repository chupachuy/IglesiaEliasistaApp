import { Component, DestroyRef, inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GacetasService } from 'src/app/services/gacetas.service';
import { Gacetas } from 'src/app/services/Gacetas';

@Component({
  selector: 'app-gaceta',
  templateUrl: './gaceta.page.html',
  styleUrls: ['./gaceta.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GacetaPage implements OnInit {

  Gacetas: Gacetas[] = [];
  private destroyRef = inject(DestroyRef);
  private serviceGacetas = inject(GacetasService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    console.log('GacetaPage: Iniciando carga de gacetas...');
    this.serviceGacetas.obtenerGacetas()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (respuesta) => {
          console.log('GacetaPage: Gacetas recibidas:', respuesta);
          // Invertimos el arreglo para que las más recientes (últimos IDs) aparezcan primero
          this.Gacetas = respuesta.length > 0 ? respuesta.reverse() : [];
          console.log('GacetaPage: Gacetas asignadas:', this.Gacetas);
          console.log('GacetaPage: Longitud de Gacetas:', this.Gacetas.length);
          // Force change detection
          this.cdr.markForCheck();
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('GacetaPage: Error al cargar gacetas:', err);
          this.Gacetas = [];
          this.cdr.markForCheck();
        }
      });
  }

  trackByGacetaId(index: number, gaceta: Gacetas): string {
    return gaceta.id;
  }
}
