import { NgModule } from '@angular/core';
import { PostPageRoutingModule } from './post-routing.module';
import { PostPage } from './post.page';

@NgModule({
  imports: [
    PostPageRoutingModule,
    PostPage
  ]
})
export class PostPageModule {}
