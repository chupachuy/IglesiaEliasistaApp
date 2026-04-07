import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Latrias } from './Latrias';

@Injectable({
  providedIn: 'root'
})
export class LatriaService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=latria`;
  private readonly AUDIO_BASE = 'https://iglesiaeliasista.org.mx/api2026';
  private httpClient = inject(HttpClient);

  obtenerLatrias(): Observable<Latrias[]> {
    return this.httpClient.get<any[]>(this.API).pipe(
      map(latrias => {
        return (Array.isArray(latrias) ? latrias : []).map(lat => {
          const mapped: Latrias = {
            id: lat.id || '',
            title: lat.title || lat.name || '',
            description: lat.description || '',
            url: lat.url || ''
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
