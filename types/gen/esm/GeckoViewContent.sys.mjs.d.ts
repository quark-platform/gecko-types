declare module "resource://gre/modules/GeckoViewContent.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewContent extends GeckoViewModule {
        onInit();
        onEnable();
        onDisable();
        get actor();
        get isPdfJs();
        sendToAllChildren();
        onEvent();
        handleEvent();
        observe();
        _containsFormData();
        _requestAnalysis();
        _requestCreateAnalysis();
        _requestAnalysisCreationStatus();
        _pollForAnalysisCompleted();
        _requestRecommendations();
        _hasCookieBannerRuleForBrowsingContextTree();
        _findInPage();
        _clearMatches();
        _displayMatches();
    }
}