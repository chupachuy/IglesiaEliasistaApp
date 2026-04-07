import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DevocionarioService } from 'src/app/services/devocionario.service';

@Component({
  selector: 'app-devocionario',
  templateUrl: './devocionario.page.html',
  styleUrls: ['./devocionario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class DevocionarioPage implements OnInit {

  Devocionarios: any;
  servicioDevocionarios = inject(DevocionarioService);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor() { }

  ngOnInit() {
    this.servicioDevocionarios.obtenerDevocionarios().subscribe((respuesta: any) =>{
      console.log(respuesta);
      this.Devocionarios = respuesta;
    });
  }

  increaseFont(): void {
    if (this.fontSize < this.maxFontSize) {
      this.fontSize += this.fontStep;
    }
  }

  decreaseFont(): void {
    if (this.fontSize > this.minFontSize) {
      this.fontSize -= this.fontStep;
    }
  }

  resetFont(): void {
    this.fontSize = this.defaultFontSize;
  }

}
