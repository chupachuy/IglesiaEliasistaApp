import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { WordpressService, WpPost } from '../services/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {

  posts: WpPost[] = [];
  private router = inject(Router);
  private wordpressService = inject(WordpressService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.wordpressService.loadPosts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.posts = data;
      });
  }

  openPost(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/post/', id]);
    }
  }
}
