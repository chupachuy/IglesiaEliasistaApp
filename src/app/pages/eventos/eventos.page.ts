import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventsService } from 'src/app/services/events.service';
import { Evento } from 'src/app/services/Eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EventosPage implements OnInit {

  eventos: Evento[] = [];
  loading = true;
  private destroyRef = inject(DestroyRef);
  private serviceEvents = inject(EventsService);
  private cdr = inject(ChangeDetectorRef);

  constructor() { }

  ngOnInit(): void {
    this.serviceEvents.obtenerEventos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(respuesta => {
        this.eventos = respuesta;
        this.loading = false;
        this.cdr.detectChanges();
      });
  }
}
