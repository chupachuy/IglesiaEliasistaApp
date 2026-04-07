import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lyrics-modal',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="ion-text-center">{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="close()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="lyrics-content">
      <div class="font-controls">
        <ion-button size="small" (click)="decreaseFont()">
          <ion-icon name="remove-circle"></ion-icon>
        </ion-button>
        <ion-button size="small" (click)="resetFont()">
          <ion-icon name="refresh"></ion-icon>
        </ion-button>
        <ion-button size="small" (click)="increaseFont()">
          <ion-icon name="add-circle"></ion-icon>
        </ion-button>
      </div>
      <div class="lyrics-container">
        <pre class="lyrics-text" [style.font-size.px]="fontSize">{{ lyrics }}</pre>
      </div>
    </ion-content>
  `,
  styles: [`
    ion-toolbar {
      --background: var(--ion-color-primary);
      --color: white;
    }
    ion-title {
      font-weight: bold;
    }
    .lyrics-content {
      --background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    }
    .font-controls {
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 10px;
    }
    .lyrics-container {
      padding: 20px;
      display: flex;
      justify-content: center;
    }
    .lyrics-text {
      white-space: pre-wrap;
      word-wrap: break-word;
      text-align: center;
      font-family: 'Georgia', serif;
      line-height: 1.8;
      color: #e0e0e0;
      max-width: 100%;
    }
  `],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LyricsModalComponent {
  @Input() title: string = '';
  @Input() lyrics: string = '';
  
  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor(private modalController: ModalController) {}

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

  close(): void {
    this.modalController.dismiss();
  }
}
