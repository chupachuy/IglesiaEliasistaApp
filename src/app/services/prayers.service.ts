import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prayer } from './Prayers';

@Injectable({
  providedIn: 'root'
})
export class PrayersService {

  private readonly API = `${environment.apiUrl}/apiprayer/`;

  constructor(private clientHttp: HttpClient) { }

  getPrayers(): Observable<Prayer[]> {
    return this.clientHttp.get<Prayer[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener oraciones:', err);
        return of([]);
      })
    );
  }
}
