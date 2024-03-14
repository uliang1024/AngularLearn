import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod01Component } from './mod01.component';
import { PromiseDemo1Component } from './promise-demo1/promise-demo1.component';
import { PromiseDemo2Component } from './promise-demo2/promise-demo2.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';

export const routes: Routes = [
  {
    path: '', component: Mod01Component,
    children: [
      { path: 'promise-demo1', component: PromiseDemo1Component, title: 'Promise-demo1' },
      { path: 'promise-demo2', component: PromiseDemo2Component, title: 'Promise-demo2' },
      { path: 'demo1', component: Demo1Component, title: 'demo1' },
      { path: 'demo2', component: Demo2Component, title: 'demo2' },
      { path: 'demo3', component: Demo3Component, title: 'demo3' },
      { path: 'demo4', component: Demo4Component, title: 'demo4' },
    ]
  }
];
// export const routeList = routes.flatMap(route => route.children);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Mod01RoutingModule { }
