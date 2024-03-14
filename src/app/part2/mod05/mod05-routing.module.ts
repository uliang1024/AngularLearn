import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod05Component } from './mod05.component';

const routes: Routes = [{ path: '', component: Mod05Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod05RoutingModule { }
