import {ViewChild, ComponentFactoryResolver, Component, OnInit, ViewContainerRef} from '@angular/core';
import {WorkspaceService} from './workspace.service';
import {HomeComponent} from './home/home.component';

@Component({
    selector: "workspace",
    templateUrl: './app/workspace/workspace.component.html',
    providers: [
        WorkspaceService
    ]
})
export class WorkspaceComponent implements OnInit {
    uiDataElements:any[];
    private irmFactory:any;
    private irmComponent:any[] = [];

    @ViewChild('initpoint', {read: ViewContainerRef}) myChild :ViewContainerRef;

    constructor(private uiInitElement: WorkspaceService, private componentFactoryResolver: ComponentFactoryResolver) {
        console.log("WorkspaceComponent constructed ...");
    }
    parserUiData(item:any, i:number){

    }

    ngOnInit() {
        console.log("WorkspaceComponent ngOnInit ...");
        // get service ui element data
        this.uiDataElements = this.uiInitElement.getData();

        console.log(this.uiDataElements[3].type);
        this.irmFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
        console.log(this.irmFactory);
        this.irmComponent.push(this.irmFactory);
        this.irmComponent.pop().instance.setName('first');
        console.log(this.irmComponent.pop().instance.getName);

        this.uiDataElements.forEach(function(value, i){
            
        });
        
       /* this.irmComponent.forEach(function(value, i){
            console.log(value);
        });*/

    /*
        console.log("Workspace component initialized ...");
        console.log("Childs - " + this.myChild.length);
         let homeComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
         let myHome = this.myChild.createComponent(homeComponentFactory);
         myHome.instance.setName('first');
         myHome.instance.setXY(20, 25);
        //console.log(myHome.hostView);
        console.log("myHome indexOf = " + this.myChild.indexOf(myHome.hostView));
        myHome.instance.click.subscribe(() => {
            this.myChild.move(myHome.hostView, this.myChild.length - 1);
        });*/
    }
}
