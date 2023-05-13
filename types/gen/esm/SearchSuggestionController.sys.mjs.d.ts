declare module "resource://gre/modules/SearchSuggestionController.sys.mjs" {
    export class SearchSuggestionController {
        engineOffersSuggestions();
        get firstPartyDomains();
        fetch();
        stop();
    }
}