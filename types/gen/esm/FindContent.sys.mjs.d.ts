declare module "resource://gre/modules/FindContent.sys.mjs" {
    export class FindContent {
        constructor(docShell);
        get iterator();
        get highlighter();
        findRanges(params?);
        _serializeRangeData();
        _collectRectData();
        highlightResults(params?);
    }
}