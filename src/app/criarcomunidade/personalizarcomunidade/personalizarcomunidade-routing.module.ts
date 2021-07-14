import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizarcomunidadePage } from './personalizarcomunidade.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizarcomunidadePage
  },
  {
    path: 'concluido',
    loadChildren: () => import('./concluido/concluido.module').then( m => m.ConcluidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizarcomunidadePageRoutingModule {}
