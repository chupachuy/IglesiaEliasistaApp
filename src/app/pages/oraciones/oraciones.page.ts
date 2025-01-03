import { Component, OnInit } from '@angular/core';
import { PrayersService } from 'src/app/services/prayers.service';

@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.page.html',
  styleUrls: ['./oraciones.page.scss'],
})
export class OracionesPage {

  Prayers: any;

  constructor(private prayersService:PrayersService) { }

  ngOnInit():void {
    this.prayersService.getPrayers().subscribe((respuesta: any) =>{
      console.log(respuesta);
      this.Prayers = respuesta;
    });
    

  }
  
  /*isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }*/

}
