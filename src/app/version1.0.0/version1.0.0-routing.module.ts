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
      },


      {
        path: "validator-class",
        component: fromComponents.ValidatorClassComponent
      },
      {
        path: "validation-error-class",
        component: fromComponents.ValidationErrorClassComponent
      },
      {
        path: "validation-result-class",
        component: fromComponents.ValidationResultClassComponent
      },

      {
        path: "black-list-func",
        component: fromComponents.BlackListFuncComponent
      },
      {
        path: "contains-func",
        component: fromComponents.ContainsFuncComponent
      },
      {
        path: "custom-validator-func",
        component: fromComponents.CustomValidatorFuncComponent
      },
      {
        path: "ends-with-func",
        component: fromComponents.EndsWithFuncComponent
      },
      {
        path: "is-alpha-func",
        component: fromComponents.IsAlphaFuncComponent
      },
      {
        path: "is-alpha-numeric-func",
        component: fromComponents.IsAlphaNumericFuncComponent
      },
      {
        path: "is-ascii-func",
        component: fromComponents.IsAsciiFuncComponent
      },
      {
        path: "is-base64-func",
        component: fromComponents.IsBase64FuncComponent
      },
      {
        path: "is-credit-card-func",
        component: fromComponents.IsCreditCardFuncComponent
      },
      {
        path: "is-email-func",
        component: fromComponents.IsEmailFuncComponent
      },
      {
        path: "is-file-uri-func",
        component: fromComponents.IsFileUriFuncComponent
      },
      {
        path: "is-fqdn-func",
        component: fromComponents.IsFqdnFuncComponent
      },
      {
        path: "is-guid-func",
        component: fromComponents.IsGuidFuncComponent
      },
      {
        path: "is-in-range-func",
        component: fromComponents.IsInRangeFuncComponent
      },
      {
        path: "is-ip-func",
        component: fromComponents.IsIpFuncComponent
      },
      {
        path: "is-isbn-func",
        component: fromComponents.IsIsbnFuncComponent
      },
      {
        path: "is-isrc-func",
        component: fromComponents.IsIsrcFuncComponent
      },
      {
        path: "is-issn-func",
        component: fromComponents.IsIssnFuncComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version100RoutingModule {}
