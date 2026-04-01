import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Latrias } from './Latrias';

@Injectable({
  providedIn: 'root'
})
export class LatriaService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=latria`;

  constructor(private httpClient: HttpClient) { }

  obtenerLatrias(): Observable<Latrias[]> {
    return this.httpClient.get<Latrias[]>(this.API).pipe(
      map(latrias => {
        return latrias.map(lat => {
          // Si la url es relativa, construir la URL completa usando la base del API
          if (lat.url && !lat.url.startsWith('http')) {
            lat.url = `${environment.apiUrl}/${lat.url}`;
          }
          return lat;
        });
      }),
      catchError(err => {
        console.error('Error al obtener latrias:', err);
        return of([]);
      })
    );
  }
}
