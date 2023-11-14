declare module "resource://gre/modules/GeckoViewConsole.sys.mjs" {
    export var GeckoViewConsole: {
        _isEnabled;
        get enabled(): any;
        set enabled(aVal);
        observe(aSubject?, aTopic?, aData?);
        _handleConsoleMessage(aMessage?);
        getResultType(aResult?);
        formatResult(aResult?);
        abbreviateSourceURL(aSourceURL?);
    };
}