import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HiperduliaService {

  Hiperdulias: any;

  API: string = 'https://iglesiaeliasista.org.mx/api/apihiperdulia/';

  constructor(private clientHttp:HttpClient) { }

  obtenerHiperdulias(){
    return this.clientHttp.get(this.API);
  }

}
