import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'matematica',
    loadChildren: () => import('./matematica/matematica.module').then( m => m.MatematicaPageModule)
  },
  {
    path: 'ciencia',
    loadChildren: () => import('./ciencia/ciencia.module').then( m => m.CienciaPageModule)
  },
  {
    path: 'comunicaciones',
    loadChildren: () => import('./comunicaciones/comunicaciones.module').then( m => m.ComunicacionesPageModule)
  },
  {
    path: 'personalsocial',
    loadChildren: () => import('./personalsocial/personalsocial.module').then( m => m.PersonalsocialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
