import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dulias } from './Dulias';

@Injectable({
  providedIn: 'root'
})
export class DuliaService {

  private readonly API = `${environment.apiUrl}/apidulia/`;

  constructor(private clientHttp: HttpClient) { }

  obtenerDulias(): Observable<Dulias[]> {
    return this.clientHttp.get<Dulias[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener dulias:', err);
        return of([]);
      })
    );
  }
}
