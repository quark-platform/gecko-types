declare module "resource://app/modules/TRRPerformance.sys.mjs" {
    export class DNSLookup {
        constructor(domain, trrServer, callback);
        doLookup();
        onLookupComplete(request?, record?, status?);
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
        getFastestTRR(param0?);
        _getFastestTRRFromResults(results?, param1?);
        _runNewAggregator();
        observe(subject?, topic?, data?);
    }
}