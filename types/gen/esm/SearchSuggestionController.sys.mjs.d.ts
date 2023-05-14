declare module "resource://gre/modules/SearchSuggestionController.sys.mjs" {
    export class SearchSuggestionController {
        constructor();
        engineOffersSuggestions();
        get firstPartyDomains();
        fetch();
        stop();
    }
}