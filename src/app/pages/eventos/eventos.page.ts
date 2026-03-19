import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventsService } from 'src/app/services/events.service';
import { Evento } from 'src/app/services/Eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  eventos: Evento[] = [];
  private destroyRef = inject(DestroyRef);

  constructor(private serviceEvents: EventsService) { }

  ngOnInit(): void {
    this.serviceEvents.obtenerEventos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(respuesta => {
        this.eventos = respuesta;
      });
  }
}
