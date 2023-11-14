declare module "resource://gre/modules/SearchSuggestionController.sys.mjs" {
    export class SearchSuggestionController {
        constructor();
        engineOffersSuggestions(engine?, fetchTrending?);
        get firstPartyDomains();
        fetch(searchTerm?, privateMode?, engine?);
        stop();
    }
}