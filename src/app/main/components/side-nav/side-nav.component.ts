import {Component, Input} from "@angular/core";
import {DocumentationVersion} from "../../models";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.sass"]
})
export class SideNavComponent {

  @Input() version: DocumentationVersion;
}
