declare module "resource://gre/modules/WebRequest.sys.mjs" {
    export var WebRequest: {
        setDNRHandlingEnabled;
        getTabIdForChannelWrapper;
        onBeforeRequest;
        onBeforeSendHeaders;
        onSendHeaders;
        onHeadersReceived;
        onAuthRequired;
        onBeforeRedirect;
        onResponseStarted;
        onCompleted;
        onErrorOccurred;
        getSecurityInfo;
    };
}