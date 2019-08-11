import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../shared";

@Component({
  selector: "app-getting-started",
  templateUrl: "./getting-started.component.html",
  styleUrls: ["./getting-started.component.sass"]
})
export class GettingStartedComponent implements OnInit {

  versionId = "1.0.0";
  postId = "getting-started";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person {
    public string Name {get; set;}
    public int Age {get; set;}
  }`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
