import {Component} from "@angular/core";
import {environment} from "../../../../environments/environment";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent {

  year: number = new Date().getFullYear();
  settings = environment;
}
