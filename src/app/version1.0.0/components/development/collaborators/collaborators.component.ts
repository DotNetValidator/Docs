import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: "app-collaborators",
  templateUrl: "./collaborators.component.html",
  styleUrls: ["./collaborators.component.sass"]
})
export class CollaboratorsComponent implements OnInit {

  versionId = "1.0.0";
  postId = "collaborators";

  post: IPost;
  previous: IPost;
  next: IPost;
  settings = environment;

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
