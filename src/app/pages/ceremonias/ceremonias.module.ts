import { NgModule } from '@angular/core';
import { CeremoniasPage } from './ceremonias.page';
import { CeremoniasPageRoutingModule } from './ceremonias-routing.module';

@NgModule({
  imports: [
    CeremoniasPageRoutingModule,
    CeremoniasPage
  ]
})
export class CeremoniasPageModule {}
