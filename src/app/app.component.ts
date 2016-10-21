import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./app/app.component.html"
})
export class AppComponent implements OnInit {
    constructor () {
        console.log("AppComponent constructed ...");
    }
    ngOnInit() {
        console.log("AppComponent ngOnInit ...");
    }
}
