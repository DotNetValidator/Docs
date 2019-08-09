import {Pipe, PipeTransform} from "@angular/core";
import {DocService} from "../services";

/**
 * Use this pipe to inject post's html in post's article without sanitization
 */
@Pipe({
  name: "post"
})
export class PostPipe implements PipeTransform {

  constructor (private docService: DocService) {}

  transform(value: string, version: string) {

    return this.docService.GetPostHtml(version, value);

  }

  // transform(value: string, version: string): void {

  //   this.docService.GetPostHtml(version, value)
  //     .subscribe(html => {
  //       document.getElementById("post-article").innerHTML = html;
  //       document.getElementById("post-article").scroll(0, 0);
  //     });

  // }

}
