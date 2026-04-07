import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gacetas } from './Gacetas';

@Injectable({
  providedIn: 'root'
})
export class GacetasService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=gacetas`;
  private clientHttp = inject(HttpClient);

  obtenerGacetas(): Observable<Gacetas[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(gacetas => {
        return (Array.isArray(gacetas) ? gacetas : []).map(gaceta => {
          const mapped: Gacetas = {
            id: gaceta.id || '',
            name: gaceta.name || gaceta.title || '',
            date: gaceta.date || '',
            url: gaceta.url || ''
          };
          if (mapped.url && !mapped.url.startsWith('http')) {
            mapped.url = `${environment.apiUrl}/${mapped.url}`;
          }
          return mapped;
        });
      }),
      catchError((err: any) => {
        return of([]);
      })
    );
  }
}
