import {Component, OnInit} from "@angular/core";

@Component({
    templateUrl: './app/workspace/home/components/home.html'
})
export class HomeComponent implements OnInit {

    ngOnInit() {
        console.log("Home component initialized ...");
    }
}
