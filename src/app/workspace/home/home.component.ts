import {Component, OnInit, EventEmitter} from "@angular/core";
import {NgStyle} from "@angular/common";

@Component({
    selector: 'home',
    templateUrl: './app/workspace/home/home.html'
})
export class HomeComponent implements OnInit {
    myStyle:NgStyle;
    name:string;
    x:number = 300;
    y:number;
    close = new EventEmitter();

    constructor() {
    }

    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }

    setXY(x:number = 0,y:number = 0) {
        this.x = x;
        this.y = y;
    }

    setName(name:string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    ngOnInit() {
        console.log(this.name + "Home component initialized ...");
    }
}
