import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [fromContainers.MainComponent]
})
export class MainModule { }
