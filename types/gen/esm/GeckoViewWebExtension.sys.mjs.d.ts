declare module "resource://gre/modules/GeckoViewWebExtension.sys.mjs" {
    var DownloadTracker;
    export class ExtensionActionHelper {
        constructor();
        getTab(aTabId?);
        getWindow(aWindowId?);
        extractProperties(aAction?);
        eventDispatcherFor(aTabId?);
        sendRequest(aTabId?, aData?);
    }
    export class GeckoViewConnection {
        constructor(sender, target, nativeApp, allowContentMessaging);
        get dispatcher();
        _sendMessage();
        sendMessage(data?);
        onConnect(portId?, messenger?);
    }
    var mobileWindowTracker;
    var GeckoViewWebExtension: {
        observe(aSubject?, aTopic?, aData?);
        extensionById(aId?);
        ensureBuiltIn(aUri?, aId?);
        installBuiltIn(aUri?);
        installWebExtension(aInstallId?, aUri?);
        setPrivateBrowsingAllowed(aId?, aAllowed?);
        uninstallWebExtension(aId?);
        browserActionClick(aId?);
        pageActionClick(aId?);
        actionDelegateAttached(aId?);
        enableWebExtension(aId?, aSource?);
        disableWebExtension(aId?, aSource?);
        checkForUpdate(aAddon?);
        updateWebExtension(aId?);
        validateBuiltInLocation(aLocationUri?, aCallback?);
        onEvent(aEvent?, aData?, aCallback?);
    };
}