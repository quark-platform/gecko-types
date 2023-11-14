declare module "resource://app/modules/UrlbarValueFormatter.sys.mjs" {
    export class UrlbarValueFormatter {
        constructor(urlbarInput);
        get inputField();
        get scheme();
        update();
        _ensureFormattedHostVisible(urlMetaData?);
        _getUrlMetaData();
        _removeURLFormat();
        _formatURL();
        _formatScheme(selectionType?, clear?);
        _removeSearchAliasFormat();
        _formatSearchAlias();
        _getSearchAlias();
        handleEvent(event?);
        _on_resize(event?);
    }
}