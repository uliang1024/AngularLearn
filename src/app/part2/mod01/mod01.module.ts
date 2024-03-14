import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Mod01RoutingModule } from './mod01-routing.module';
import { Mod01Component } from './mod01.component';
import { PromiseDemo1Component } from './promise-demo1/promise-demo1.component';
import { PromiseDemo2Component } from './promise-demo2/promise-demo2.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { MatTabsModule } from '@angular/material/tabs'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Mod01Component,
    PromiseDemo1Component,
    PromiseDemo2Component,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    Mod01RoutingModule,
    MatTabsModule
  ]
})
export class Mod01Module { }
