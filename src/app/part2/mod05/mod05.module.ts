import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod05RoutingModule } from './mod05-routing.module';
import { Mod05Component } from './mod05.component';


@NgModule({
  declarations: [
    Mod05Component
  ],
  imports: [
    CommonModule,
    Mod05RoutingModule
  ]
})
export class Mod05Module { }
