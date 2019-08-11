import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-post-article",
  templateUrl: "./post-article.component.html",
  styleUrls: ["./post-article.component.sass"]
})
export class PostArticleComponent {
  @Input() title: string;
}
