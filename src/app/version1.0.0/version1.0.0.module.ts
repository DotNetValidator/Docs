import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {Version100RoutingModule} from "./version1.0.0-routing.module";
import {SharedModule} from "../shared";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";



@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS
  ],
  imports: [
    CommonModule,
    Version100RoutingModule,
    SharedModule.forRoot()
  ]
})
export class Version100Module {}
