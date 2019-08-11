import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import {RootRoutingModule} from "./root-routing.module";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";
import * as fromServices from "./services";

@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ...fromServices.SERVICES
  ],
  bootstrap: [fromContainers.RootComponent]
})
export class RootModule {}
