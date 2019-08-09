import {Component} from "@angular/core";
import {DocService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {DocumentationVersion, Post} from "../../models";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.sass"]
})
export class LayoutComponent {

  private version$: Observable<DocumentationVersion>;
  private post$: Observable<Post>;

  constructor (private route: ActivatedRoute, private router: Router, private docService: DocService) {


    this.route.paramMap.pipe(
      tap(params => {

        const versionId = params.get("versionId");
        const postId = params.get("postId");

        if (!versionId || !postId) {
          this.docService.GetLatestVersion().pipe(
            tap(version =>
              this.router.navigate([`/docs/${version.version}/${version.groups[0].posts[0].id}`])
            )
          ).subscribe();
        } else {

          if (!this.version$) {
            this.version$ = this.docService
              .GetVersion(versionId).pipe(
                tap(version => {
                  if (!version) {
                    this.router.navigate([`/docs`]);
                  }
                })
              );
          }

          this.post$ = this.docService.GetPost(versionId, postId).pipe(
            tap(post => {
              if (!post) {
                this.router.navigate([`/docs`]);
              }
            })
          );

        }
      })
    ).subscribe();
  }
}
