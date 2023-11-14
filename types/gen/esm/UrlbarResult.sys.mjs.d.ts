declare module "resource://app/modules/UrlbarResult.sys.mjs" {
    export class UrlbarResult {
        constructor(resultType, resultSource, payload, param3);
        get title();
        get titleHighlights();
        get _titleAndHighlights();
        get icon();
        get hasSuggestedIndex();
        validatePayload(payload?);
        payloadAndSimpleHighlights(tokens?, payloadInfo?);
        addDynamicResultType(name?, param1?);
        removeDynamicResultType(name?);
        getDynamicResultType(name?);
        toString();
        _dynamicResultTypesByName;
    }
}