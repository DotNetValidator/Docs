import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import * as fromContainers from "./containers";

@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [fromContainers.MainComponent]
})
export class MainModule { }
