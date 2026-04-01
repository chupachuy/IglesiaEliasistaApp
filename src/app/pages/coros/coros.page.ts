import { Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonRange, LoadingController, ModalController } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { CorosService } from 'src/app/services/coros.service';
import { Howl } from 'howler';
import { LyricsModalComponent } from './lyrics-modal/lyrics-modal.component';

export interface Track {
  name: string;
  path: string;
  lyrics?: string;
}

@Component({
  selector: 'app-coros',
  templateUrl: './coros.page.html',
  styleUrls: ['./coros.page.scss'],
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

  constructor(
    private loadingCtrl: LoadingController,
    private corosService: CorosService,
    private modalController: ModalController
  ) { }

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
      if (Array.isArray(corosData)) {
        this.playlist = corosData;
        this.filteredPlaylist = corosData;
      }
    } catch (error) {
      console.error('Error al cargar los coros:', error);
    }
  }

  onSearch(event: any): void {
    const query = event.target.value?.toLowerCase() || '';
    this.searchQuery = query;
    
    if (!query.trim()) {
      this.filteredPlaylist = this.playlist;
      return;
    }

    this.filteredPlaylist = this.playlist.filter(track => 
      track.name.toLowerCase().includes(query) ||
      (track.lyrics && track.lyrics.toLowerCase().includes(query))
    );
  }

  start(track: Track): void {
    this.presentLoading('Descargando coro...');
    if (this.player) {
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
      },
      onend: () => {
        this.isPlaying = false;
        this.clearProgressInterval();
      },
      onstop: () => {
        this.isPlaying = false;
        this.clearProgressInterval();
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
    this.loading = await this.loadingCtrl.create({ message });
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
}
