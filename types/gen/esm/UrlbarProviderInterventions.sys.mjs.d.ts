declare module "resource://app/modules/UrlbarProviderInterventions.sys.mjs" {
    export class QueryScorer {
        constructor();
        addDocument();
        score();
        _buildPhraseTree();
        _traverse();
    }
    var UrlbarProviderInterventions;
}