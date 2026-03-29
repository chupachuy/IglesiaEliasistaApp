import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devocionarios } from './Devocionarios';

@Injectable({
  providedIn: 'root'
})
export class DevocionarioService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=devocionarios`;

  constructor(private clientHttp: HttpClient) { }

  obtenerDevocionarios(): Observable<Devocionarios[]> {
    return this.clientHttp.get<Devocionarios[]>(this.API).pipe(
      catchError(err => {
        console.error('Error al obtener devocionarios:', err);
        return of([]);
      })
    );
  }
}
