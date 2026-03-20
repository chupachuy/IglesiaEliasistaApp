import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Track } from '../pages/coros/coros.page';

@Injectable({
  providedIn: 'root'
})
export class CorosService {

  private readonly API = `${environment.apiUrl}/apicoros/`;

  constructor(private clientHttp: HttpClient) { }

  obtenerCoros(): Observable<Track[]> {
    return this.clientHttp.get<{ title: string; url: string; lyrics?: string }[]>(this.API).pipe(
      map(coros => coros.map(coro => ({
        name: coro.title,
        path: coro.url,
        lyrics: coro.lyrics || ''
      }))),
      catchError(err => {
        console.error('Error al obtener coros:', err);
        return of([]);
      })
    );
  }
}
