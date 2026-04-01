import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hiperdulias } from './Hiperdulia';

@Injectable({
  providedIn: 'root'
})
export class HiperduliaService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=hiperdulia`;

  constructor(private clientHttp: HttpClient) { }

  obtenerHiperdulias(): Observable<Hiperdulias[]> {
    return this.clientHttp.get<Hiperdulias[]>(this.API).pipe(
      map(hiperdulias => {
        return hiperdulias.map(hip => {
          // Si la url es relativa, construir la URL completa usando la base del API
          if (hip.url && !hip.url.startsWith('http')) {
            hip.url = `${environment.apiUrl}/${hip.url}`;
          }
          return hip;
        });
      }),
      catchError(err => {
        console.error('Error al obtener hiperdulias:', err);
        return of([]);
      })
    );
  }
}
