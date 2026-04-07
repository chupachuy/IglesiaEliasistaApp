import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PRedicas } from './Predicas';

@Injectable({
  providedIn: 'root'
})
export class PredicasService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=predicas`;
  private clientHttp = inject(HttpClient);

  obtenerPredicas(): Observable<PRedicas[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(predicas => {
        return (Array.isArray(predicas) ? predicas : []).map(pred => {
          const mapped: PRedicas = {
            id: pred.id || '',
            title: pred.title || pred.name || '',
            description: pred.description || '',
            url: pred.url || ''
          };
          if (mapped.url && !mapped.url.startsWith('http')) {
            mapped.url = `${environment.apiUrl}/${mapped.url}`;
          }
          return mapped;
        });
      }),
      catchError(err => {
        return of([]);
      })
    );
  }
}
