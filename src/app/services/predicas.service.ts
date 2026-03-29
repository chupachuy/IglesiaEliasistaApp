import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PRedicas } from './Predicas';

@Injectable({
  providedIn: 'root'
})
export class PredicasService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=predicas`;

  constructor(private clientHttp: HttpClient) { }

  obtenerPredicas(): Observable<PRedicas[]> {
    return this.clientHttp.get<PRedicas[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener predicas:', err);
        return of([]);
      })
    );
  }
}
