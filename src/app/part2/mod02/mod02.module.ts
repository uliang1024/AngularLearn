import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod02RoutingModule } from './mod02-routing.module';
import { Mod02Component } from './mod02.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    Mod02Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    Mod02RoutingModule,
  ]
})
export class Mod02Module { }
