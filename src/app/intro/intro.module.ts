import { NgModule } from '@angular/core';
import { IntroPage } from './intro.page';
import { IntroPageRoutingModule } from './intro-routing.module';

@NgModule({
  imports: [
    IntroPageRoutingModule,
    IntroPage
  ]
})
export class IntroPageModule {}
