declare module "resource://gre/modules/GeckoViewSessionStore.sys.mjs" {
    export var GeckoViewSessionStore: {
        _browserSHistoryListener;
        observe(aSubject?, aTopic?, aData?);
        onTabStateUpdate(permanentKey?, win?, data?);
        getOrCreateSHistoryListener(permanentKey?, browsingContext?, collectImmediately?);
    };
}