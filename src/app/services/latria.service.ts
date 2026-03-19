import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Latrias } from './Latrias';

@Injectable({
  providedIn: 'root'
})
export class LatriaService {

  private readonly API = `${environment.apiUrl}/apilatria/`;

  constructor(private httpClient: HttpClient) { }

  obtenerLatrias(): Observable<Latrias[]> {
    return this.httpClient.get<Latrias[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener latrias:', err);
        return of([]);
      })
    );
  }
}
