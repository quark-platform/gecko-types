declare module "resource://gre/modules/MatchURLFilters.sys.mjs" {
    export class MatchURLFilters {
        constructor(filters);
        matches();
        matchURLFilter();
        testMatchOnURLComponent();
        serialize();
    }
}