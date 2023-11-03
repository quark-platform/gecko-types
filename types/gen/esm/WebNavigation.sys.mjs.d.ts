declare module "resource://gre/modules/WebNavigation.sys.mjs" {
    var WebNavigationManager: {
        listeners;
        init();
        uninit();
        addListener(type?, listener?);
        removeListener(type?, listener?);
        QueryInterface;
        observe;
        onURLBarUserStartNavigation(acData?);
        setRecentTabTransitionData(tabTransitionData?);
        getAndForgetRecentTabTransitionData(browser?);
        onContentClick(target?, data?);
        onCreatedNavigationTarget(bc?, sourceBC?, url?);
        onStateChange(bc?, requestURI?, status?, stateFlags?);
        onDocumentChange(bc?, frameTransitionData?, location?);
        onHistoryChange(bc?, frameTransitionData?, location?, isHistoryStateUpdated?, isReferenceFragmentUpdated?);
        onDOMContentLoaded(bc?, documentURI?);
        fire(type?, browser?, bc?, extra?);
    };
    var WebNavigation: {};
}