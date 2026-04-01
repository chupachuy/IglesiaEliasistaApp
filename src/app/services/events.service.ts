import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './Eventos';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=eventos`;

  constructor(private clientHttp: HttpClient) { }

  obtenerEventos(): Observable<Evento[]> {
    return this.clientHttp.get<Evento[]>(this.API).pipe(
      map(eventos => {
        return eventos.map(evento => {
          // Si la imagen_url es relativa, construir la URL completa usando la base del API
          if (evento.image_url && !evento.image_url.startsWith('http')) {
            evento.image_url = `${environment.apiUrl}/${evento.image_url}`;
          }
          return evento;
        });
      }),
      catchError(err => {
        console.error('Error al obtener eventos:', err);
        return of([]);
      })
    );
  }
}
