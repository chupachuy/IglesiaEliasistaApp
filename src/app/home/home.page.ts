import { Component } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: any;

  constructor(private router:Router, private wordpressService:WordpressService) {}

  ngOnInit(){
    this.wordpressService.loadPosts().subscribe(data=>{
      this.posts = data;
      //console.log(data)
    })
  }
  openPost(id: any){
    this.router.navigate(['/post/', id])
  }

}
