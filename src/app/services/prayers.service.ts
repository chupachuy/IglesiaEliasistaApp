import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrayersService {
  
  //API: string = 'http://localhost/eliasistaapi/apiprayer/';
  API: string = 'https://iglesiaeliasista.org.mx/api/apiprayer/';

  constructor(private clientHttp:HttpClient) { }
  

  getPrayers(){
    return this.clientHttp.get(this.API);
  }


}
