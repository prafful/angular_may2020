import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
