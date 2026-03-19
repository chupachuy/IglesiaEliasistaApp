import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './Eventos';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly API = `${environment.apiUrl}/api/`;

  constructor(private clientHttp: HttpClient) { }

  obtenerEventos(): Observable<Evento[]> {
    return this.clientHttp.get<Evento[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener eventos:', err);
        return of([]);
      })
    );
  }
}
