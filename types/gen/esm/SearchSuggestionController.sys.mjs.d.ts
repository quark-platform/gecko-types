declare module "resource://gre/modules/SearchSuggestionController.sys.mjs" {
    export class SearchSuggestionController {
        constructor(param0);
        engineOffersSuggestions(engine?, fetchTrending?);
        get firstPartyDomains();
        fetch(searchTerm?, privateMode?, engine?, param3?, param4?, param5?, param6?);
        stop();
    }
}