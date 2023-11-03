declare module "resource://gre/modules/GeckoViewTelemetry.sys.mjs" {
    var InitializationTracker: {
        initialized;
        onInitialized(profilerTime?);
    };
    export class HistogramStopwatch {
        constructor(aName, aAssociated);
        isRunning();
        start();
        finish();
        cancel();
        timeElapsed();
    }
}