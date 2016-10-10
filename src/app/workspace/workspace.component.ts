import {ViewChild, ComponentFactoryResolver, NgModule, Component, OnInit, ViewContainerRef} from "@angular/core";
import {HomeComponent} from "./home/home.component";

@Component({
    selector: "workspace",
    templateUrl: './app/workspace/workspace.html'
})
export class WorkspaceComponent implements OnInit {
    @ViewChild('childview', {read: ViewContainerRef}) myChild :ViewContainerRef;
    //firstHome = new HomeComponent('first');
    //secondHome = new HomeComponent('second');

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
        console.log("Workspace component initialized ...");
        console.log("Childs - " + this.myChild.length);
         let homeComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
         let myHome = this.myChild.createComponent(homeComponentFactory);
         myHome.instance.setName('first');
         myHome.instance.setXY(20,25);
        console.log(homeComponentFactory);
        console.log(myHome);
        console.log("Childs - " + this.myChild.length);

        let twoComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
        let twoHome = this.myChild.createComponent(twoComponentFactory);
        twoHome.instance.setName('second');
        twoHome.instance.setXY(80,80);
       console.log(twoComponentFactory);
       console.log(twoHome);
       console.log("Childs - " + this.myChild.length);

       let tComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);
       let tHome = this.myChild.createComponent(tComponentFactory);
       tHome.instance.setName('second');
       tHome.instance.setXY(200,200);
      console.log(tComponentFactory);
      console.log(tHome);
      console.log("Childs - " + this.myChild.length);
    }
}
