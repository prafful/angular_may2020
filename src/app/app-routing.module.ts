import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { DummythreeComponent } from './dummythree/dummythree.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { FullstackComponent } from "./parent-child/fullstack/fullstack.component";
import { StackComponent } from './parent-child/stack/stack.component';


const routes: Routes = [
 
  {
    path:'',
    redirectTo:'threedummy',
    pathMatch:'full'
  }
  ,
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
  },
  {
    path:'fullstack',
    component:StackComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
