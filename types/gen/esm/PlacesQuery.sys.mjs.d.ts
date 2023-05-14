declare module "resource://gre/modules/PlacesQuery.sys.mjs" {
    export class PlacesQuery {
        getHistory();
        observeHistory();
        close();
    }
}