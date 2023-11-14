declare module "resource://gre/modules/PlacesFrecencyRecalculator.sys.mjs" {
    export class PlacesFrecencyRecalculator {
        get alternativeFrecencyInfo();
        constructor();
        recalculateSomeFrecencies(param0?);
        recalculateAnyOutdatedFrecencies();
        get isRecalculationPending();
        maybeStartFrecencyRecalculation();
        decay();
        observe(subject?, topic?, data?);
    }
}