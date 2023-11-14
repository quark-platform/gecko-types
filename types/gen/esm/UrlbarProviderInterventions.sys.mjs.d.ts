declare module "resource://app/modules/UrlbarProviderInterventions.sys.mjs" {
    export class QueryScorer {
        constructor(param0);
        addDocument(doc?);
        score(queryString?);
        _buildPhraseTree(node?, doc?, phrase?, wordIndex?);
        _traverse(param0?);
    }
    var UrlbarProviderInterventions;
}