declare module "resource://app/modules/UrlbarResult.sys.mjs" {
    export class UrlbarResult {
        constructor(resultType, resultSource, payload);
        get title();
        get titleHighlights();
        get _titleAndHighlights();
        get icon();
        get hasSuggestedIndex();
        validatePayload();
        payloadAndSimpleHighlights();
        addDynamicResultType();
        removeDynamicResultType();
        getDynamicResultType();
        toString();
    }
}