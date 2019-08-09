import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";
import * as fromServices from "./services";
import * as fromPipes from "./pipes";

import {MainRoutingModule} from "./main-routing.module";

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
    NgxDynamicTemplateModule.forRoot()
  ],
  providers: [
    ...fromServices.SERVICES
  ],
  bootstrap: [fromContainers.MainComponent]
})
export class MainModule {}
