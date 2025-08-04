import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OracionesPage } from './oraciones.page';

const routes: Routes = [
  {
    path: '',
    component: OracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OracionesPageRoutingModule {}
