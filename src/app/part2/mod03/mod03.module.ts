import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod03RoutingModule } from './mod03-routing.module';
import { Mod03Component } from './mod03.component';


@NgModule({
  declarations: [
    Mod03Component
  ],
  imports: [
    CommonModule,
    Mod03RoutingModule
  ]
})
export class Mod03Module { }
