declare module "resource://app/modules/UrlbarValueFormatter.sys.mjs" {
    export class UrlbarValueFormatter {
        constructor(urlbarInput);
        get inputField();
        get scheme();
        update();
        _ensureFormattedHostVisible();
        _getUrlMetaData();
        _removeURLFormat();
        _formatURL();
        _formatScheme();
        _removeSearchAliasFormat();
        _formatSearchAlias();
        _getSearchAlias();
        handleEvent();
        _on_resize();
    }
}