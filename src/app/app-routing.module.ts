import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./post/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'culto',
    loadChildren: () => import('./pages/culto/culto.module').then( m => m.CultoPageModule)
  },
  {
    path: 'coros',
    loadChildren: () => import('./pages/coros/coros.module').then( m => m.CorosPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  /*{
    path: 'predicas',
    loadChildren: () => import('./pages/predicas/predicas.module').then( m => m.PredicasPageModule)
  },*/
  {
    path: 'devocionario',
    loadChildren: () => import('./pages/devocionario/devocionario.module').then( m => m.DevocionarioPageModule)
  },
  {
    path: 'culto-hiperdulia',
    loadChildren: () => import('./pages/culto-hiperdulia/culto-hiperdulia.module').then( m => m.CultoHiperduliaPageModule)
  },
  {
    path: 'culto-dulia',
    loadChildren: () => import('./pages/culto-dulia/culto-dulia.module').then( m => m.CultoDuliaPageModule)
  },
  {
    path: 'ceremonias',
    loadChildren: () => import('./pages/ceremonias/ceremonias.module').then( m => m.CeremoniasPageModule)
  },
  {
    path: 'culto-latria',
    loadChildren: () => import('./pages/culto-latria/culto-latria.module').then( m => m.CultoLatriaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'gaceta',
    loadChildren: () => import('./pages/gaceta/gaceta.module').then( m => m.GacetaPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'oraciones',
    loadChildren: () => import('./pages/oraciones/oraciones.module').then( m => m.OracionesPageModule)
  },
  {
    path: 'predicas',
    loadChildren: () => import('./pages/predicas/predicas.module').then( m => m.PredicasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
