import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-post-header",
  templateUrl: "./post-header.component.html",
  styleUrls: ["./post-header.component.sass"]
})
export class PostHeaderComponent {
  @Input() title: string;
}
