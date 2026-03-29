import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gacetas } from './Gacetas';

@Injectable({
  providedIn: 'root'
})
export class GacetasService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=gacetas`;

  constructor(private clientHttp: HttpClient) { }

  obtenerGacetas(): Observable<Gacetas[]> {
    return this.clientHttp.get<Gacetas[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener gacetas:', err);
        return of([]);
      })
    );
  }
}
