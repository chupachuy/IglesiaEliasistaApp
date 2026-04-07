import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface WpPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  jetpack_featured_media_url?: string;
  _embedded?: any;
}

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private readonly url = `${environment.wpApiUrl}/posts`;
  private httpClient = inject(HttpClient);

  loadPosts(): Observable<WpPost[]> {
    return this.httpClient.get<WpPost[]>(this.url).pipe(
      catchError(err => {
        console.error('Error al cargar posts:', err);
        return of([]);
      })
    );
  }

  loadPost(id: number): Observable<WpPost | null> {
    return this.httpClient.get<WpPost>(`${this.url}/${id}`).pipe(
      catchError(err => {
        console.error(`Error al cargar post ${id}:`, err);
        return of(null);
      })
    );
  }
}
