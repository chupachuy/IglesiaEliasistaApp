import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devocionarios } from './Devocionarios';

@Injectable({
  providedIn: 'root'
})
export class DevocionarioService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=devocionarios`;

  constructor(private clientHttp: HttpClient) { }

  obtenerDevocionarios(): Observable<Devocionarios[]> {
    return this.clientHttp.get<Devocionarios[]>(this.API).pipe(
      map(devocionarios => {
        return devocionarios.map(dev => {
          // Si la url es relativa, construir la URL completa usando la base del API
          if (dev.url && !dev.url.startsWith('http')) {
            dev.url = `${environment.apiUrl}/${dev.url}`;
          }
          return dev;
        });
      }),
      catchError(err => {
        console.error('Error al obtener devocionarios:', err);
        return of([]);
      })
    );
  }
}
