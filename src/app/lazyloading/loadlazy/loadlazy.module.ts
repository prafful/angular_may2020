import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadlazyRoutingModule } from './loadlazy-routing.module';
import { LetmesleepComponent } from './letmesleep/letmesleep.component';
import { NoontimeComponent } from './noontime/noontime.component';
import { MidnightComponent } from './midnight/midnight.component';


@NgModule({
  declarations: [LetmesleepComponent, NoontimeComponent, MidnightComponent],
  imports: [
    CommonModule,
    LoadlazyRoutingModule
  ]
})
export class LoadlazyModule { }
