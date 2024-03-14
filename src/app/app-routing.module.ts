import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Part2Component } from './part2/part2.component';
import { Mod01Component } from './part2/mod01/mod01.component';
import { Mod02Component } from './part2/mod02/mod02.component';
import { Mod03Component } from './part2/mod03/mod03.component';
import { Mod05Component } from './part2/mod05/mod05.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'part2', component: Part2Component, title: 'part2',
    children: [
      { path: 'mod01', component: Mod01Component, title: 'Mod01' },
      { path: 'mod02', component: Mod02Component, title: 'Mod02' },
      { path: 'mod03', component: Mod03Component, title: 'Mod03' },
      { path: 'mod05', component: Mod05Component, title: 'Mod05' },
    ]
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
