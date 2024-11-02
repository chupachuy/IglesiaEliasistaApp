import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prayers } from './Prayers';

@Injectable({
  providedIn: 'root'
})
export class PrayersService {
  
  API: string = 'http://localhost/eliasistaapi/apiprayer'

  constructor(private clientHttp:HttpClient) { }
  

  getPrayers(){
    return this.clientHttp.get(this.API);
  }


}
