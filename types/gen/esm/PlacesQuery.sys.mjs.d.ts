declare module "resource://gre/modules/PlacesQuery.sys.mjs" {
    export class PlacesQuery {
        getHistory();
        initializeCache();
        fetchHistory();
        appendToCache(visit?);
        insertSortedIntoCache(visit?);
        observeHistory(callback?);
        close();
        handlePageVisited(event?);
        handlePageTitleChanged(event?);
        getStartOfDayTimestamp(date?);
        getStartOfMonthTimestamp(date?);
    }
}