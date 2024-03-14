import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod03Component } from './mod03.component';

const routes: Routes = [{ path: '', component: Mod03Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod03RoutingModule { }
