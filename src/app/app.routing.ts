import {Routes, RouterModule} from "@angular/router";
import {WorkspaceComponent} from './workspace/workspace.component';
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'workspace', pathMatch: 'full'},
    {path: 'workspace', component: WorkspaceComponent, data: {title: 'Workspace'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
