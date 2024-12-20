import { Component, OnInit } from '@angular/core';
import { PredicasService } from 'src/app/services/predicas.service';

@Component({
  selector: 'app-predicas',
  templateUrl: './predicas.page.html',
  styleUrls: ['./predicas.page.scss'],
})
export class PredicasPage implements OnInit {

  Predicas: any;

  constructor(private servicePredicas:PredicasService) { }

  ngOnInit() {
    this.servicePredicas.obtenerPredicas().subscribe((respuesta:any) =>{
      console.log(respuesta);
      this.Predicas = respuesta;
    });
  }

}
