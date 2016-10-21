import {Component, OnInit, EventEmitter} from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './app/workspace/home/home.html'
})
export class HomeComponent implements OnInit {

    name:string;
    x:number = 300;
    y:number;
    click = new EventEmitter();

    constructor() {
    }

    setName(name:string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    onClicked() {
        this.click.emit('event');
        console.log('click');
    }

    ngOnInit() {
        console.log(this.name + "Home component initialized ...");
    }
}
