import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";

@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [fromContainers.MainComponent]
})
export class MainModule { }
