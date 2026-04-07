import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prayer } from './Prayers';

@Injectable({
  providedIn: 'root'
})
export class PrayersService {

  private readonly API = `${environment.apiUrl}/router.php?endpoint=oraciones`;
  private clientHttp = inject(HttpClient);

  getPrayers(): Observable<Prayer[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(prayers => {
        return (Array.isArray(prayers) ? prayers : []).map(prayer => {
          const mapped: Prayer = {
            id: prayer.id || '',
            title_pray: prayer.title_pray || '',
            description_pray: prayer.description_pray || '',
            subject_pray: prayer.subject_pray || '',
            pray_for: prayer.pray_for || '',
            pray_to: prayer.pray_to || '',
            date_pray: prayer.date_pray || '',
            lyrics_pray: prayer.lyrics_pray || ''
          };
          return mapped;
        });
      }),
      catchError(err => {
        return of([]);
      })
    );
  }
}
