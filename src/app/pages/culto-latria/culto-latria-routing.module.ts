import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultoLatriaPage } from './culto-latria.page';

const routes: Routes = [
  {
    path: '',
    component: CultoLatriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultoLatriaPageRoutingModule {}
