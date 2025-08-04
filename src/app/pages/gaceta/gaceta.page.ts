import { Component, OnInit } from '@angular/core';
import { GacetasService } from 'src/app/services/gacetas.service';

@Component({
  selector: 'app-gaceta',
  templateUrl: './gaceta.page.html',
  styleUrls: ['./gaceta.page.scss'],
})
export class GacetaPage implements OnInit {

  Gacetas: any;


  constructor(private serviceGacetas:GacetasService) { }

  ngOnInit() {
    this.serviceGacetas.obtenerGacetas().subscribe(( respuesta:any) =>{
      console.log(respuesta);
      this.Gacetas = respuesta;
    });
  }

}
