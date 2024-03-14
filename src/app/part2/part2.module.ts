import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part2Component } from './part2.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Part2RoutingModule } from './part2-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    Part2Component,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Part2RoutingModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class Part2Module { }
