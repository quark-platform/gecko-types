declare module "resource://gre/modules/SearchSuggestions.sys.mjs" {
    export class SearchSuggestAutoComplete extends SuggestAutoComplete {
        classID;
        serviceURL;
    }
}