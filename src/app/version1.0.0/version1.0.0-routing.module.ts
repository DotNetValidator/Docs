import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";

const routes: Routes = [
  {
    path: "",
    component: fromContainers.MainComponent,
    children: [
      {
        path: "getting-started",
        component: fromComponents.GettingStartedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version100RoutingModule {}
