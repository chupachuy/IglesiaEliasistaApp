import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dulias } from './Dulias';

@Injectable({
  providedIn: 'root'
})
export class DuliaService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=dulia`;
  private readonly AUDIO_BASE = 'https://iglesiaeliasista.org.mx/api2026';
  private clientHttp = inject(HttpClient);

  obtenerDulias(): Observable<Dulias[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(dulias => {
        return (Array.isArray(dulias) ? dulias : []).map(dul => {
          const mapped: Dulias = {
            id: dul.id || '',
            title: dul.title || dul.name || '',
            description: dul.description || '',
            url: dul.url || ''
          };
          if (mapped.url && !mapped.url.startsWith('http')) {
            mapped.url = `${this.AUDIO_BASE}/${mapped.url}`;
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
