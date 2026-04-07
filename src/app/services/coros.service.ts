import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Track } from '../pages/coros/coros.page';

@Injectable({
  providedIn: 'root'
})
export class CorosService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=coros`;
  private clientHttp = inject(HttpClient);

  obtenerCoros(): Observable<Track[]> {
    return this.clientHttp.get<any>(this.API).pipe(
      map(coros => {
        const corosArray = Array.isArray(coros) ? coros : (coros?.data ? coros.data : []);
        const mapped = corosArray.map((coro: any) => {
          const mapped: Track = {
            id: coro.id || '',
            name: coro.title || coro.name || '',
            path: coro.url || '',
            description: coro.description || '',
            lyrics: coro.lyrics || ''
          };
          if (mapped.path && !mapped.path.startsWith('http')) {
            mapped.path = `${environment.apiUrl}/${mapped.path}`;
          }
          return mapped;
        });
        return mapped;
      }),
      catchError((err: any) => {
        return of([]);
      })
    );
  }
}
