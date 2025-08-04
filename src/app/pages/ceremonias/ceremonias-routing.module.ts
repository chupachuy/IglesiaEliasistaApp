import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeremoniasPage } from './ceremonias.page';

const routes: Routes = [
  {
    path: '',
    component: CeremoniasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeremoniasPageRoutingModule {}
