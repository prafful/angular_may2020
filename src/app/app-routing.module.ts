import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { DummythreeComponent } from './dummythree/dummythree.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { FullstackComponent } from "./parent-child/fullstack/fullstack.component";
import { StackComponent } from './parent-child/stack/stack.component';
import { AlldirectivesComponent } from './directives/alldirectives/alldirectives.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from './directives/if/if.component';
import { CssclassComponent } from './directives/cssclass/cssclass.component';
import { CssstyleComponent } from './directives/cssstyle/cssstyle.component';
import { SwitchcaseComponent } from './directives/switchcase/switchcase.component';
import { TodoallComponent } from './todo/todoall/todoall.component';


const routes: Routes = [
 
  {
    path:'',
    redirectTo:'fullstack',
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
    path:'alldirectives',
    component:AlldirectivesComponent,
    children:[
      {
        path:'',
        redirectTo:'fordirective',
        pathMatch:'full'

      },
      {
        path:'fordirective',
        component:ForComponent
      },
      {
        path:'ifdirective',
        component:IfComponent
      },
      {
        path:'switchcasedirective',
        component:SwitchcaseComponent
      },
      {
        path:'ngstyledirective',
        component:CssstyleComponent
      },
      {
        path:'ngclassdirective',
        component:CssclassComponent
      }
    ]
  },
  {
    path:'todo',
    component:TodoallComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
