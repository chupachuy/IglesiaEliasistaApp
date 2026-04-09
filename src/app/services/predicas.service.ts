import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PRedicas } from './Predicas';

@Injectable({
  providedIn: 'root'
})
export class PredicasService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=predicas`;
  private clientHttp = inject(HttpClient);

  obtenerPredicas(): Observable<PRedicas[]> {
    console.log('Fetching predicas from:', this.API);
    return this.clientHttp.get<any[]>(this.API).pipe(
      tap({
        next: (data) => console.log('Predicas API response:', data),
        error: (error) => console.error('Predicas API error:', error)
      }),
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
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching predicas:', error);
        return of([]);
      })
    );
  }
}
