import {Component, Input} from "@angular/core";

@Component({
  selector: "app-side-navigator-item",
  templateUrl: "./side-navigator-item.component.html",
  styleUrls: ["./side-navigator-item.component.sass"]
})
export class SideNavigatorItemComponent {
  @Input() title: string;
  @Input() route: string;
}
