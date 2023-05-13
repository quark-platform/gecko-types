declare module "resource://gre/modules/E10SUtils.sys.mjs" {
    var E10SUtils: {
        DEFAULT_REMOTE_TYPE;
        NOT_REMOTE;
        WEB_REMOTE_TYPE;
        WEB_REMOTE_COOP_COEP_TYPE_PREFIX;
        FILE_REMOTE_TYPE;
        EXTENSION_REMOTE_TYPE;
        PRIVILEGEDABOUT_REMOTE_TYPE;
        PRIVILEGEDMOZILLA_REMOTE_TYPE;
        FISSION_WEB_REMOTE_TYPE;
        SERVICEWORKER_REMOTE_TYPE;
        STANDARD_SAFE_PROTOCOLS;
        getAboutModule(aURL);
        useCrossOriginOpenerPolicy();
        _log;
        _uriStr;
        log;
        serializeCSP(csp);
        deserializeCSP(csp_b64);
        canLoadURIInRemoteType(aURL, aRemoteSubframes);
        getRemoteTypeForURI(aURL, aMultiProcess, aRemoteSubframes, aCurrentUri);
        getRemoteTypeForURIObject(aURI, options);
        getRemoteTypeForWorkerPrincipal(aPrincipal, aWorkerType, aIsMultiProcess, aIsFission);
        makeInputStream(data);
        serializePrincipal(principal);
        deserializePrincipal(serializedPincipal);
        serializeCookieJarSettings(cookieJarSettings);
        deserializeCookieJarSettings(cookieJarSettings_b64);
        wrapHandlingUserInput(aWindow, aIsHandling, aCallback);
        serializeReferrerInfo(referrerInfo);
        deserializeReferrerInfo(referrerInfo_b64);
        getBrowserPids(aBrowser, aRemoteSubframes);
        remoteTypePrefix(aRemoteType);
        isWebRemoteType(aRemoteType);
        predictOriginAttributes();
    };
}