import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devocionarios } from './Devocionarios';

@Injectable({
  providedIn: 'root'
})
export class DevocionarioService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=devocionarios`;
  private clientHttp = inject(HttpClient);

  obtenerDevocionarios(): Observable<Devocionarios[]> {
    console.log('Fetching devocionarios from:', this.API);
    return this.clientHttp.get<any[]>(this.API).pipe(
      tap({
        next: (data) => console.log('Devocionarios API response:', data),
        error: (error) => console.error('Devocionarios API error:', error)
      }),
      map(devocionarios => {
        return (Array.isArray(devocionarios) ? devocionarios : []).map(dev => {
          const mapped: Devocionarios = {
            id: dev.id || '',
            title: dev.title || dev.name || '',
            description: dev.description || '',
            url: dev.url || ''
          };
          if (mapped.url && !mapped.url.startsWith('http')) {
            mapped.url = `${environment.apiUrl}/${mapped.url}`;
          }
          return mapped;
        });
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching devocionarios:', error);
        return of([]);
      })
    );
  }
}
