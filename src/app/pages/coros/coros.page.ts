import { Component, DestroyRef, OnDestroy, OnInit, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonRange, LoadingController, ModalController } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { CorosService } from 'src/app/services/coros.service';
import { Howl } from 'howler';
import { LyricsModalComponent } from './lyrics-modal/lyrics-modal.component';

export interface Track {
  id: string;
  name: string;
  path: string;
  description?: string;
  lyrics?: string;
}

@Component({
  selector: 'app-coros',
  templateUrl: './coros.page.html',
  styleUrls: ['./coros.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CorosPage implements OnInit, OnDestroy {

  playlist: Track[] = [];
  filteredPlaylist: Track[] = [];
  activeTrack: Track | null = null;
  player: Howl | null = null;
  isPlaying = false;
  progress = 0;
  searchQuery = '';
  volume = 1;
  playerExpanded = true;
  lastTouchY = 0;

  @ViewChild('range', { static: false }) range!: IonRange;
  loading: HTMLIonLoadingElement | undefined;

  private progressInterval: ReturnType<typeof setInterval> | null = null;
  private destroyRef = inject(DestroyRef);
  private loadingCtrl = inject(LoadingController);
  private corosService = inject(CorosService);
  private modalController = inject(ModalController);
  private cdr = inject(ChangeDetectorRef);

  constructor() { }

  ngOnInit(): void {
    this.loadCoros();
  }

  ngOnDestroy(): void {
    this.clearProgressInterval();
    this.player?.stop();
    this.player?.unload();
  }

  async loadCoros(): Promise<void> {
    try {
      const corosData = await firstValueFrom(this.corosService.obtenerCoros());
      if (Array.isArray(corosData) && corosData.length > 0) {
        this.playlist = corosData;
        this.filteredPlaylist = corosData;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      } else {
        this.playlist = [];
        this.filteredPlaylist = [];
        this.cdr.markForCheck();
      }
    } catch (error) {
      this.playlist = [];
      this.filteredPlaylist = [];
    }
  }

  onSearch(event: any): void {
    const query = event.target.value?.toLowerCase() || '';
    const normalizedQuery = this.normalizeText(query);
    this.searchQuery = query;
    
    if (!query.trim()) {
      this.filteredPlaylist = this.playlist;
      return;
    }

    this.filteredPlaylist = this.playlist.filter(track => 
      this.normalizeText(track.name).includes(normalizedQuery) ||
      (track.lyrics && this.normalizeText(track.lyrics).includes(normalizedQuery))
    );
  }

  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  start(track: Track): void {
    this.presentLoading('Descargando audio...');
    const isSameTrack = this.activeTrack?.id === track.id;
    
    if (this.player) {
      if (isSameTrack) {
        if (this.player.playing()) {
          this.player.pause();
          this.isPlaying = false;
        } else {
          this.player.play();
          this.isPlaying = true;
        }
        return;
      }
      this.player.stop();
      this.player.unload();
    }
    this.clearProgressInterval();

    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        this.loading?.dismiss();
        this.isPlaying = true;
        this.activeTrack = track;
        this.startProgressInterval();
        this.cdr.detectChanges();
      },
      onend: () => {
        this.isPlaying = false;
        this.clearProgressInterval();
        this.cdr.detectChanges();
      },
      onstop: () => {
        this.isPlaying = false;
        this.clearProgressInterval();
        this.cdr.detectChanges();
      },
      onloaderror: (_id: number, error: unknown) => {
        this.loading?.dismiss();
        console.error('Error cargando audio:', error);
      }
    });

    this.player.play();
  }

  togglePlayer(pause: boolean): void {
    this.isPlaying = !pause;
    if (pause) {
      this.player?.pause();
    } else {
      this.player?.play();
    }
  }

  next(): void {
    if (!this.activeTrack) return;
    const index = this.playlist.indexOf(this.activeTrack);
    const nextIndex = index < this.playlist.length - 1 ? index + 1 : 0;
    this.start(this.playlist[nextIndex]);
  }

  prev(): void {
    if (!this.activeTrack) return;
    const index = this.playlist.indexOf(this.activeTrack);
    const prevIndex = index > 0 ? index - 1 : this.playlist.length - 1;
    this.start(this.playlist[prevIndex]);
  }

  seek(): void {
    if (!this.player) return;
    const newValue = +this.range.value;
    const duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  setVolume(): void {
    if (!this.player) return;
    this.player.volume(this.volume);
  }

  private startProgressInterval(): void {
    this.clearProgressInterval();
    this.progressInterval = setInterval(() => {
      if (this.player && this.isPlaying) {
        const seek = this.player.seek() as number;
        this.progress = (seek / this.player.duration()) * 100 || 0;
      }
    }, 1000);
  }

  private clearProgressInterval(): void {
    if (this.progressInterval !== null) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  async presentLoading(message: string): Promise<void> {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'crescent',
      cssClass: 'custom-ios-loading',
      duration: 15000,
      showBackdrop: true,
      backdropDismiss: true
    });
    await this.loading.present();
  }

  async showLyrics(): Promise<void> {
    if (!this.activeTrack) return;
    const modal = await this.modalController.create({
      component: LyricsModalComponent,
      componentProps: {
        title: this.activeTrack.name,
        lyrics: this.activeTrack.lyrics || 'Letra no disponible'
      }
    });
    await modal.present();
  }

  onPlayerTouchStart(event: TouchEvent): void {
    this.lastTouchY = event.touches[0].clientY;
  }

  onPlayerTouchEnd(event: TouchEvent): void {
    const currentY = event.changedTouches[0].clientY;
    const diff = currentY - this.lastTouchY;
    const threshold = 50;

    // Swipe down - minimizar
    if (diff > threshold) {
      this.playerExpanded = false;
    }
    // Swipe up - expandir
    else if (diff < -threshold) {
      this.playerExpanded = true;
    }
  }

  stop(): void {
    if (this.player) {
      this.player.stop();
      this.player.unload();
      this.player = null;
    }
    this.isPlaying = false;
    this.activeTrack = null;
    this.progress = 0;
    this.clearProgressInterval();
    this.cdr.detectChanges();
  }
}
