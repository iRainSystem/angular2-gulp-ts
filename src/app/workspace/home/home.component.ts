import {Component, NgModule, OnInit} from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './app/workspace/home/home.html'
})
export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log("Home component initialized ...");
    }
}
