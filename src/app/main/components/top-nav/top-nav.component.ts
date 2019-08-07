import {Component} from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.sass"]
})
export class TopNavComponent {

  onSideNavCollapse() {
    // Toggle collapsed class to side-nav
    document.getElementById("side-nav").classList.toggle("collapsed");
  }
}
