import {Component, OnInit, EventEmitter} from "@angular/core";

@Component({
    selector: 'plate',
    templateUrl: './app/workspace/plate/plate.component.html'
})
export class PlateComponent {
    name:string;
    id:number;
    x:number;
    y:number;
    width:number;
    height:number;

    constructor() {

    }



}
