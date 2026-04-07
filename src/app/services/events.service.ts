import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './Eventos';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=eventos`;
  private readonly IMAGE_BASE = 'https://iglesiaeliasista.org.mx/api2026';
  private clientHttp = inject(HttpClient);

  obtenerEventos(): Observable<Evento[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(eventos => {
        return (Array.isArray(eventos) ? eventos : []).map(evento => {
          const mapped: Evento = {
            ...evento
          };
          if (mapped.image_url && !mapped.image_url.startsWith('http')) {
            mapped.image_url = `${this.IMAGE_BASE}/${mapped.image_url}`;
          }
          return mapped;
        });
      }),
      catchError(err => {
        return of([]);
      })
    );
  }
}
