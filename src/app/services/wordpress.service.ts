
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private url = "https://iglesiaeliasista.org.mx/wp-json/wp/v2/posts";

  constructor(private httpClient: HttpClient) { }

  loadPosts(){
    return this.httpClient.get(this.url, {});
  }
  
  loadPost(id: any){
    return this.httpClient.get(this.url+'/'+id, {})
  }
}
