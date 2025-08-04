import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  private id:any;
  post: any;

  constructor(private activatedRouted:ActivatedRoute, private wordpressService:WordpressService) { }

  ngOnInit() {
    this.id = this.activatedRouted.snapshot.paramMap.get('id'),
    this.wordpressService.loadPost(this.id).subscribe(data =>{
      this.post = data;
      console.log(this.post);
    })
  }

}
