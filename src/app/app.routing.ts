import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {WorkspaceComponent} from './workspace/workspace.component';
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'workspace', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'workspace', component: WorkspaceComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
