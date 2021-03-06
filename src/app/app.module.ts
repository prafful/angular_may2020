import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { DummyoneComponent } from './dummyone/dummyone.component';
import { DummytwoComponent } from './dummytwo/dummytwo.component';
import { DummythreeComponent } from './dummythree/dummythree.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { FullstackComponent } from './parent-child/fullstack/fullstack.component';
import { FrontendComponent } from './parent-child/frontend/frontend.component';
import { MiddlewareComponent } from './parent-child/middleware/middleware.component';
import { TestingComponent } from './parent-child/testing/testing.component';
import { DevopsComponent } from './parent-child/devops/devops.component';
import { SpringComponent } from './parent-child/spring/spring.component';
import { NodeComponent } from './parent-child/node/node.component';
import { CloudComponent } from './parent-child/cloud/cloud.component';
import { CicdComponent } from './parent-child/cicd/cicd.component';
import { StackComponent } from './parent-child/stack/stack.component';
import { AlldirectivesComponent } from './directives/alldirectives/alldirectives.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from './directives/if/if.component';
import { SwitchcaseComponent } from './directives/switchcase/switchcase.component';
import { CssclassComponent } from './directives/cssclass/cssclass.component';
import { CssstyleComponent } from './directives/cssstyle/cssstyle.component';
import { TodoallComponent } from './todo/todoall/todoall.component';
import { AllpipesComponent } from './pipesdemo/allpipes/allpipes.component';
import { InbuiltComponent } from './pipesdemo/inbuilt/inbuilt.component';
import { CustomComponent } from './pipesdemo/custom/custom.component';
import { SortStringArrayPipe } from './custompipes/sort-string-array.pipe';
import { SortNumberPipe } from './custompipes/sort-number.pipe';
import { LivesearchPipe } from './custompipes/livesearch.pipe';
import { AllformsComponent } from './forms/allforms/allforms.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { ConsumeoneComponent } from './consume/consumeone/consumeone.component';
import { ConsumetwoComponent } from './consume/consumetwo/consumetwo.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { ConsumefakerestComponent } from './consume/consumefakerest/consumefakerest.component';
import { AddnewfriendComponent } from './consume/addnewfriend/addnewfriend.component';
import { EditfriendComponent } from './consume/editfriend/editfriend.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { ChildComponent } from './eventbinding/child/child.component';
import { GrandchildComponent } from './eventbinding/grandchild/grandchild.component';
import { TexteffectComponent } from './animation/texteffect/texteffect.component';
import { SetbgDirective } from './customdirective/setbg.directive';
import { HideMeDirective } from './customdirective/hide-me.directive';
import { BasicComponent } from './express-mongodb/basic/basic.component';



@NgModule({
  declarations: [
    RootComponent,
    DummyoneComponent,
    DummytwoComponent,
    DummythreeComponent,
    NotfoundComponent,
    FullstackComponent,
    FrontendComponent,
    MiddlewareComponent,
    TestingComponent,
    DevopsComponent,
    SpringComponent,
    NodeComponent,
    CloudComponent,
    CicdComponent,
    StackComponent,
    AlldirectivesComponent,
    ForComponent,
    IfComponent,
    SwitchcaseComponent,
    CssclassComponent,
    CssstyleComponent,
    TodoallComponent,
    AllpipesComponent,
    InbuiltComponent,
    CustomComponent,
    SortStringArrayPipe,
    SortNumberPipe,
    LivesearchPipe,
    AllformsComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ConsumeoneComponent,
    ConsumetwoComponent,
    RemoteComponent,
    ConsumefakerestComponent,
    AddnewfriendComponent,
    EditfriendComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    TexteffectComponent,
    SetbgDirective,
    HideMeDirective,
    BasicComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
