import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";

const routes: Routes = [
    {
        path: "",
        component: fromContainers.LayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            // Automatic scrolling
            anchorScrolling: "enabled",
            // Use this value to scroll to the html element with a suitable view
            scrollOffset: [0, 50]
        }
    )
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
