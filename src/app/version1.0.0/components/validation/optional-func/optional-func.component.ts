import {Component, OnInit} from "@angular/core";
import {IPost, DocService} from "../../../../shared";

@Component({
  selector: "app-optional-func",
  templateUrl: "./optional-func.component.html",
  styleUrls: ["./optional-func.component.sass"]
})
export class OptionalFuncComponent implements OnInit {

  versionId = "1.0.0";
  postId = "optional-func";

  post: IPost;
  previous: IPost;
  next: IPost;

  //#region Codes
  person1 = `
  public class Person
  {
      public string Name { get; set; }
  }`;

  example1 = `
  var model = new Person
  {
      Name = "John Smith"
  };

  var validator = Validator.Create(model, "Name")
      .MinLength(20, "Invalid length.");

  var errors = validator.Validate();

  /*
     errors value will be a List<ValidationError>

     [
        {
          PropertyName = "Name",
          ErrorMessages = [
            "Invalid length."
          ]
        }
     ]
  */`;

  example2 = `
  var model = new Person
  {
      Name = null
  };

  var validator = Validator.Create(model, "Name")
      .Optional()
      .MinLength(20, "Invalid length.");

  var errors = validator.Validate();

  /*
     errors value will be null because the person's name is null and marked as optional.
  */`;
  //#endregion

  ngOnInit(): void {
    this.post = DocService.findPost(this.versionId, this.postId);

    const prevNext = DocService.GetPrevNextPosts(this.versionId, this.postId);
    this.previous = prevNext.previous;
    this.next = prevNext.next;
  }

}
