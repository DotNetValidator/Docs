import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import * as fromContainers from "./containers";

const routes: Routes = [
    {
        path: "docs",
        component: fromContainers.LayoutComponent,
        children: [
            {
                path: "v1.0.0",
                loadChildren: () => import("../version1.0.0").then(m => m.Version100Module)
            }
        ]
    },
    {
        path: "",
        redirectTo: "docs/v1.0.0/getting-started",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            // Automatic scrolling
            anchorScrolling: "enabled",
            // Use this value to scroll to the html element with a suitable view
            scrollOffset: [0, 60]
        }
    )
    ],
    exports: [RouterModule]
})
export class RootRoutingModule {}
