import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LatriaService } from 'src/app/services/latria.service';

@Component({
  selector: 'app-culto-latria',
  templateUrl: './culto-latria.page.html',
  styleUrls: ['./culto-latria.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CultoLatriaPage {

  Latrias: any;
  serviceLatria = inject(LatriaService);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor() { }

  ngOnInit() {
    this.serviceLatria.obtenerLatrias().subscribe((response:any) =>{
      console.log(response);
      this.Latrias = response;
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
