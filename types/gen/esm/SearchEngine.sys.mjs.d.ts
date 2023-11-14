declare module "resource://gre/modules/SearchEngine.sys.mjs" {
    export class EngineURL {
        constructor(mimeType, requestMethod, template);
        addParam(name?, value?, purpose?);
        _addMozParam(param?);
        getSubmission(searchTerms?, engine?, purpose?);
        _getTermsParameterName();
        _hasRelation(rel?);
        _initWithJSON(json?);
        toJSON();
    }
    export class SearchEngine {
        constructor(param0);
        get _searchForm();
        set _searchForm(value);
        _getURLOfType(type?, rel?);
        _getIconKey(width?, height?);
        _addIconToMap(width?, height?, uriSpec?);
        _setIcon(iconURL?, isPreferred?, width?, height?);
        _getEngineURLFromMetaData(type?, params?);
        _initWithDetails(details?, param1?);
        _setUrls(details?, param1?);
        checkSearchUrlMatchesManifest(details?);
        overrideWithExtension(extensionID?, manifest?);
        removeExtensionOverride();
        _initWithJSON(json?);
        toJSON();
        setAttr(name?, val?);
        getAttr(name?);
        clearAttr(name?);
        get alias();
        set alias(val);
        get aliases();
        get telemetryId();
        get identifier();
        get description();
        get hidden();
        set hidden(val);
        get hideOneOffButton();
        set hideOneOffButton(val);
        get iconURI();
        get _iconURL();
        get _location();
        get isAppProvided();
        get inMemory();
        get isGeneralPurposeEngine();
        get _hasUpdates();
        get name();
        get searchForm();
        get sendAttributionRequest();
        get queryCharset();
        getSubmission(searchTerms?, responseType?, purpose?);
        get searchURLWithNoTerms();
        searchTermFromResult(uri?);
        get searchUrlQueryParamName();
        get searchUrlPublicSuffix();
        supportsResponseType(type?);
        get searchUrlDomain();
        getURLParsingInfo();
        get wrappedJSObject();
        getIconURLBySize(width?, height?);
        getIcons();
        speculativeConnect(options?);
        get id();
    }
}