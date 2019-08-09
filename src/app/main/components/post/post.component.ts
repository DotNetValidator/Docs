import {Component, Input} from "@angular/core";
import {Post, DocumentationVersion} from "../../models";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.sass"]
})
export class PostComponent {
  @Input() post: Post;
  @Input() version: DocumentationVersion;
}
