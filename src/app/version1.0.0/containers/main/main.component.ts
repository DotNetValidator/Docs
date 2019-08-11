import {Component, OnInit} from "@angular/core";
import {IVersion, DocService} from "../../../shared";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"]
})
export class MainComponent implements OnInit {

  versionId = "1.0.0";
  version: IVersion;

  ngOnInit(): void {
    this.version = DocService.findVersion(this.versionId);
  }

}
