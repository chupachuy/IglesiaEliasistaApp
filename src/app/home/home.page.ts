import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { WordpressService, WpPost } from '../services/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  posts: WpPost[] = [];
  private destroyRef = inject(DestroyRef);

  constructor(private router: Router, private wordpressService: WordpressService) {}

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
