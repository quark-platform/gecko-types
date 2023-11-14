declare module "resource://app/modules/UrlbarProviderInterventions.sys.mjs" {
    export class QueryScorer {
        constructor();
        addDocument(doc?);
        score(queryString?);
        _buildPhraseTree(node?, doc?, phrase?, wordIndex?);
        _traverse();
    }
    var UrlbarProviderInterventions;
}