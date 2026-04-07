import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hiperdulias } from './Hiperdulia';

@Injectable({
  providedIn: 'root'
})
export class HiperduliaService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=hiperdulia`;
  private readonly AUDIO_BASE = 'https://iglesiaeliasista.org.mx/api2026';
  private clientHttp = inject(HttpClient);

  obtenerHiperdulias(): Observable<Hiperdulias[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(hiperdulias => {
        console.log('Service - Datos crudos:', hiperdulias);
        return (Array.isArray(hiperdulias) ? hiperdulias : []).map(hip => {
          const mapped: Hiperdulias = {
            id: hip.id || '',
            title: hip.title || hip.name || '',
            description: hip.description || '',
            url: hip.url || ''
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
