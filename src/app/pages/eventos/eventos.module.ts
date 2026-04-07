import { NgModule } from '@angular/core';
import { EventosPageRoutingModule } from './eventos-routing.module';
import { EventosPage } from './eventos.page';

@NgModule({
  imports: [
    EventosPageRoutingModule,
    EventosPage
  ]
})
export class EventosPageModule {}
