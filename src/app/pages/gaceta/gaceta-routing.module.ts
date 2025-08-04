import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GacetaPage } from './gaceta.page';

const routes: Routes = [
  {
    path: '',
    component: GacetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GacetaPageRoutingModule {}
