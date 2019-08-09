import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.sass"]
})
export class PostComponent {
  @Input() title: string;
  @Input() route: string;
}
