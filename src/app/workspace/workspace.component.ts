import {Component, OnInit} from "@angular/core";
import {HomeComponent} from "./home/components/home.component";

@Component({
    selector: "workspace",
    templateUrl: './app/workspace/workspace.html'
})
export class WorkspaceComponent implements OnInit {

    ngOnInit() {
        console.log("Workspace component initialized ...");
    }
}
