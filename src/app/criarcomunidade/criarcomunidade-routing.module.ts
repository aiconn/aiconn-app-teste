import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarcomunidadePage } from './criarcomunidade.page';

const routes: Routes = [
  {
    path: '',
    component: CriarcomunidadePage
  },
  {
    path: 'personalizarcomunidade',
    loadChildren: () => import('./personalizarcomunidade/personalizarcomunidade.module').then( m => m.PersonalizarcomunidadePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarcomunidadePageRoutingModule {}
