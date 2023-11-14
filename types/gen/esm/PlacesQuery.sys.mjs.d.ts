declare module "resource://gre/modules/PlacesQuery.sys.mjs" {
    export class PlacesQuery {
        getHistory(param0?);
        initializeCache(param0?);
        fetchHistory();
        appendToCache(visit?);
        insertSortedIntoCache(visit?);
        observeHistory(callback?);
        close();
        handlePageVisited(event?);
        handlePageTitleChanged(event?);
        getStartOfDayTimestamp(date?);
        getStartOfMonthTimestamp(date?);
        cachedHistory;
        cachedHistoryOptions;
    }
}