import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devocionarios } from './Devocionarios';

@Injectable({
  providedIn: 'root'
})
export class DevocionarioService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=devocionarios`;
  private clientHttp = inject(HttpClient);

  obtenerDevocionarios(): Observable<Devocionarios[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
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
      catchError(err => {
        return of([]);
      })
    );
  }
}
