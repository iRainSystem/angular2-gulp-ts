import {Component, OnInit} from "@angular/core";

@Component({
    selector: "login",
    templateUrl: './app/login/login.html'
})
export class LoginComponent implements OnInit {

    ngOnInit() {
        console.log("Login component initialized ...");
    }
}
