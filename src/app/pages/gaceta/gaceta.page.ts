import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GacetasService } from 'src/app/services/gacetas.service';
import { Gacetas } from 'src/app/services/Gacetas';

@Component({
  selector: 'app-gaceta',
  templateUrl: './gaceta.page.html',
  styleUrls: ['./gaceta.page.scss'],
})
export class GacetaPage implements OnInit {

  Gacetas: Gacetas[] = [];
  private destroyRef = inject(DestroyRef);

  constructor(private serviceGacetas: GacetasService) { }

  ngOnInit(): void {
    this.serviceGacetas.obtenerGacetas()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(respuesta => {
        // Invertimos el arreglo para que las más recientes (últimos IDs) aparezcan primero
        this.Gacetas = respuesta.reverse();
      });
  }
}
