import {Component, OnInit} from "@angular/core";
import {GlobalService} from "../../services";
import {Observable} from "rxjs";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.sass"]
})
export class TopNavComponent implements OnInit {

  version$: Observable<string>;

  constructor (private globalService: GlobalService) {}

  ngOnInit(): void {
    this.version$ = this.globalService.version$;
  }

  onSideNavCollapse() {
    // Toggle collapsed class to side-nav
    document.getElementById("side-nav").classList.toggle("collapsed");
  }
}
