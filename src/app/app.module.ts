import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {WorkspaceComponent} from "./workspace/workspace.component";

import {WorkspaceModule} from "./workspace/workspace.module";

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        WorkspaceModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        WorkspaceComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
