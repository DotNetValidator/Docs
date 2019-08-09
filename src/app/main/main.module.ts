import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import {MainRoutingModule} from "./main-routing.module";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";
import * as fromServices from "./services";
import * as fromPipes from "./pipes";

@NgModule({
  declarations: [
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS,
    ...fromPipes.PIPES
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ...fromServices.SERVICES
  ],
  bootstrap: [fromContainers.MainComponent]
})
export class MainModule {}
