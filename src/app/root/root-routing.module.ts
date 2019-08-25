import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import * as fromShared from "../shared";

import * as fromContainers from "./containers";

const routes: Routes = [
    {
        path: "",
        redirectTo: "docs",
        pathMatch: "full"
    },
    {
        path: "docs",
        component: fromContainers.LayoutComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "v1.0.0"
            },
            {
                path: "v1.0.0",
                loadChildren: () => import("../version1.0.0").then(m => m.Version100Module)
            }
        ]
    },
    {
        path: "versions",
        component: fromContainers.LayoutComponent,
        children: [
            {
                path: "",
                component: fromShared.VersionsComponent
            },
            {
                path: "**",
                pathMatch: "full",
                redirectTo: ""
            },
        ]
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
