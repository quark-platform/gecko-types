declare module "resource://gre/modules/AutoCompleteSimpleSearch.sys.mjs" {
    export class AutoCompleteSimpleSearch {
        constructor();
        overrideNextResult(result?);
        startSearch(searchString?, searchParam?, previousResult?, listener?);
        stopSearch();
    }
}