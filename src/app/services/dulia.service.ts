import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dulias } from './Dulias';

@Injectable({
  providedIn: 'root'
})
export class DuliaService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=dulia`;

  constructor(private clientHttp: HttpClient) { }

  obtenerDulias(): Observable<Dulias[]> {
    return this.clientHttp.get<Dulias[]>(this.API).pipe(
      map(dulias => {
        return dulias.map(dul => {
          // Si la url es relativa, construir la URL completa usando la base del API
          if (dul.url && !dul.url.startsWith('http')) {
            dul.url = `${environment.apiUrl}/${dul.url}`;
          }
          return dul;
        });
      }),
      catchError(err => {
        console.error('Error al obtener dulias:', err);
        return of([]);
      })
    );
  }
}
