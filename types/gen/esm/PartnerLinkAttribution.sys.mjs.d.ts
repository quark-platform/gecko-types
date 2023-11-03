declare module "resource://app/modules/PartnerLinkAttribution.sys.mjs" {
    var CONTEXTUAL_SERVICES_PING_TYPES: {
        TOPSITES_IMPRESSION;
        TOPSITES_SELECTION;
        QS_BLOCK;
        QS_IMPRESSION;
        QS_SELECTION;
    };
    var PartnerLinkAttribution: {
        makeRequest(param0?);
        makeSearchEngineRequest(engine?, targetUrl?);
        sendContextualServicesPing(payload?, pingType?);
        get _pingCentre(): any;
    };
}