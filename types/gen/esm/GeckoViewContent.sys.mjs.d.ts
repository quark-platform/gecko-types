declare module "resource://gre/modules/GeckoViewContent.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewContent extends GeckoViewModule {
        onInit();
        onEnable();
        onDisable();
        get actor();
        get isPdfJs();
        sendToAllChildren(aEvent?, aData?);
        onEvent(aEvent?, aData?, aCallback?);
        handleEvent(aEvent?);
        observe(aSubject?, aTopic?, aData?);
        _containsFormData(aCallback?);
        _requestAnalysis(aData?, aCallback?);
        _requestCreateAnalysis(aData?, aCallback?);
        _requestAnalysisCreationStatus(aData?, aCallback?);
        _pollForAnalysisCompleted(aData?, aCallback?);
        _requestRecommendations(aData?, aCallback?);
        _hasCookieBannerRuleForBrowsingContextTree(aCallback?);
        _findInPage(aData?, aCallback?);
        _clearMatches();
        _displayMatches(aData?);
    }
}