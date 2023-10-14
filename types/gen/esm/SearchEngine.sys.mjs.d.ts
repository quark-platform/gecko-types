declare module "resource://gre/modules/SearchEngine.sys.mjs" {
    export class EngineURL {
        constructor(mimeType, requestMethod, template);
        addParam();
        _addMozParam();
        getSubmission();
        _getTermsParameterName();
        _hasRelation();
        _initWithJSON();
        toJSON();
    }
    export class SearchEngine {
        constructor();
        get _searchForm();
        set _searchForm(value);
        _getURLOfType();
        _getIconKey();
        _addIconToMap();
        _setIcon();
        _getEngineURLFromMetaData();
        _initWithDetails();
        _setUrls();
        checkSearchUrlMatchesManifest();
        overrideWithExtension();
        removeExtensionOverride();
        _initWithJSON();
        toJSON();
        setAttr();
        getAttr();
        clearAttr();
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
        getSubmission();
        get searchURLWithNoTerms();
        searchTermFromResult();
        get searchUrlQueryParamName();
        get searchUrlPublicSuffix();
        supportsResponseType();
        get searchUrlDomain();
        getURLParsingInfo();
        get wrappedJSObject();
        getIconURLBySize();
        getIcons();
        speculativeConnect();
        get id();
    }
}