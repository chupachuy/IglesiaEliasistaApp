import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {

  Eventos: any;

  constructor(private serviceEvents:EventsService) { }

  ngOnInit(): void {
    this.serviceEvents.obtenerEventos().subscribe( (respuesta:any) => {
      console.log(respuesta);
      this.Eventos = respuesta;
    });
  }
    
}
