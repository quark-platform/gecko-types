declare module "resource://gre/modules/PlacesQuery.sys.mjs" {
    export class PlacesQuery {
        getHistory();
        initializeCache();
        fetchHistory();
        appendToCache();
        insertSortedIntoCache();
        observeHistory();
        close();
        handlePageVisited();
        handlePageTitleChanged();
        getStartOfDayTimestamp();
        getStartOfMonthTimestamp();
    }
}