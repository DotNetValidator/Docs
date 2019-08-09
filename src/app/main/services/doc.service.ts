import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import * as _ from "lodash";
import {Database, DocumentationVersion, Post, PostGroup} from "../models";


/**
 * Documentation Service
 */
@Injectable()
export class DocService {

  constructor (private http: HttpClient) {}

  /**
   * Gets the whole database file
   */
  private GetData(): Observable<Database> {
    return this.http.get<Database>("assets/data/data.json", {responseType: "json"});
  }

  /**
   * Gets the latest documentation version
   */
  public GetLatestVersion(): Observable<DocumentationVersion> {
    return this.GetData()
      .pipe(
        map(data => data.versions.find(version => version.isLatest))
      );
  }

  /**
   * Gets all documentation versions
   */
  public GetVersions(): Observable<DocumentationVersion[]> {
    return this.GetData()
      .pipe(
        map(data => data.versions)
      );
  }

  /**
   * Gets all post groups in the given documentation version
   * @param versionId The documentation version, if omitted, the
   * latest documentation version will be used
   */
  public GetGroups(versionId?: string): Observable<PostGroup[]> {
    return this.GetData()
      .pipe(
        map(data => data.versions.find(version => version.version === versionId).groups)
      );
  }

  /**
   * Gets the documentation version with the given id
   * @param versionId The documentation version id
   */
  public GetVersion(versionId: string): Observable<DocumentationVersion> {
    return this.GetData()
      .pipe(
        map(data => data.versions.find(version => version.version === versionId))
      );
  }

  /**
   * Gets the documentation post with the given id in the given version
   * @param versionId The documentation version id
   * @param postId The documentation post id
   */
  public GetPost(versionId: string, postId: string): Observable<Post> {
    return this.GetData()
      .pipe(
        map(data =>
          _.flatMap(
            data.versions.find(version => version.version === versionId)
              .groups,
            (group) => group.posts
          ).find(post => post.id === postId)
        )
      );
  }

  /**
   * Gets the given post file's Html
   * @param versionId The documentation version id
   * @param fileName The html file name
   */
  public GetPostHtml(versionId: string, fileName: string): Observable<string> {
    return this.http.get(`assets/docs/${versionId}/${fileName}`, {responseType: "text"});
  }
}
