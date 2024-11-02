import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredicasPage } from './predicas.page';

const routes: Routes = [
  {
    path: '',
    component: PredicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredicasPageRoutingModule {}
