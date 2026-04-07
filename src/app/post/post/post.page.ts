import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PostPage implements OnInit {

  private id:any;
  post: any;
  private activatedRouted = inject(ActivatedRoute);
  private wordpressService = inject(WordpressService);

  constructor() { }

  ngOnInit() {
    this.id = this.activatedRouted.snapshot.paramMap.get('id'),
    this.wordpressService.loadPost(this.id).subscribe(data =>{
      this.post = data;
      console.log(this.post);
    })
  }

}
