import {Injectable} from '@angular/core';

@Injectable()
export class WorkspaceService {
    private appstructure = [
        {id: 0, type: 'irm_menu'},
        {id: 1, type: 'irm_dashboard'},
        {id: 2, type: 'irm_widget'},
        {id: 3, type: 'irm_dock'},
        {id: 4, type: 'irm_app'},
        {id: 5, type: 'irm_app'}
    ];
    constructor () {
      console.log("WorkspaceService constructed ...");
    }
    getData() {
      return this.appstructure;
    }
}
