declare module "resource://gre/modules/GeckoViewContent.sys.mjs" {
    export class GeckoViewContent {
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
        _requestRecommendations();
        _hasCookieBannerRuleForBrowsingContextTree();
        _findInPage();
        _clearMatches();
        _displayMatches();
    }
}