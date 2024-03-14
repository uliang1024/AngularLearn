import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Part2Component } from './part2.component';

const routes: Routes = [
  { path: '', component: Part2Component },
  { path: 'mod01', loadChildren: () => import('./mod01/mod01.module').then(m => m.Mod01Module) },
  { path: 'mod02', loadChildren: () => import('./mod02/mod02.module').then(m => m.Mod02Module) },
  { path: 'mod03', loadChildren: () => import('./mod03/mod03.module').then(m => m.Mod03Module) },
  { path: 'mod05', loadChildren: () => import('./mod05/mod05.module').then(m => m.Mod05Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class Part2RoutingModule { }
