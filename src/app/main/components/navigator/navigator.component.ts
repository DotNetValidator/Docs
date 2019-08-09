import {Component, Input} from "@angular/core";
import {DocumentationVersion, Post} from "../../models";
import * as _ from "lodash";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.sass"]
})
export class NavigatorComponent {

  private previous: Post;
  private next: Post;
  private version: DocumentationVersion;

  @Input() set data(data: {version: DocumentationVersion, post: Post}) {

    if (data) {
      const posts = _.flatMap(data.version.groups, group => group.posts);
      const postIndex = posts.findIndex(post => post.id === data.post.id);

      this.previous = posts[postIndex - 1];
      this.next = posts[postIndex + 1];

      this.version = data.version;
    }

  }

}
