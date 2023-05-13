declare module "resource://app/modules/TRRPerformance.sys.mjs" {
    export class DNSLookup {
        constructor(domain, trrServer, callback);
        doLookup();
        onLookupComplete();
    }
    export class LookupAggregator {
        constructor(onCompleteCallback, trrList);
        run();
        abort();
        markUnstableNetwork();
        markCaptivePortal();
        recordResults();
    }
    export class TRRRacer {
        constructor(onCompleteCallback, trrList);
        run();
        onComplete();
        getFastestTRR();
        _getFastestTRRFromResults();
        _runNewAggregator();
        observe();
    }
}