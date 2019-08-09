import {Component, Input} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {share} from "rxjs/operators";
import {Post, DocumentationVersion} from "../../models";

@Component({
  selector: "app-section-nav",
  templateUrl: "./section-nav.component.html",
  styleUrls: ["./section-nav.component.sass"]
})
export class SectionNavComponent {

  activeSection = this.route.fragment.pipe(share());

  @Input() post: Post;
  @Input() version: DocumentationVersion;

  constructor (public route: ActivatedRoute) {}

  // Use this method to scroll manually to a given html element id
  onSectionClick(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }
}
