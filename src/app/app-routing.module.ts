import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { DummythreeComponent } from './dummythree/dummythree.component';


const routes: Routes = [

  {
    path:'onedummy',
    component:DummyoneComponent
  },
  {
    path:'twodummy',
    component:DummytwoComponent
  },
  {
    path:'threedummy',
    component:DummythreeComponent 
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
