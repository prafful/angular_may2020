import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetmesleepComponent } from './letmesleep/letmesleep.component';
import { NoontimeComponent } from './noontime/noontime.component';
import { MidnightComponent } from './midnight/midnight.component';


const routes: Routes = [
  {
    path:'',
    component:LetmesleepComponent
  },
  {
    path:'noon',
    component:NoontimeComponent
  },
  {
    path:'midnight',
    component:MidnightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadlazyRoutingModule { }
