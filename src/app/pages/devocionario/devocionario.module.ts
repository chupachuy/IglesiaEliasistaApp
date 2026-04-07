import { NgModule } from '@angular/core';
import { DevocionarioPageRoutingModule } from './devocionario-routing.module';
import { DevocionarioPage } from './devocionario.page';

@NgModule({
  imports: [
    DevocionarioPageRoutingModule,
    DevocionarioPage
  ]
})
export class DevocionarioPageModule {}