import { NgModule } from '@angular/core';
import { CorosPage } from './coros.page';
import { CorosPageRoutingModule } from './coros-routing.module';

@NgModule({
  imports: [
    CorosPageRoutingModule,
    CorosPage
  ]
})
export class CorosPageModule {}
