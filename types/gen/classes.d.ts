declare var Cc: {
    ["@mozilla.org/devtools/jsonview-sniffer;1"]: {
        name: "@mozilla.org/devtools/jsonview-sniffer;1";
        number: "{4148c488-dca1-49fc-a621-2a0097a62422}";
    };
    ["@mozilla.org/streamconv;1?from=application/vnd.mozilla.json.view&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=application/vnd.mozilla.json.view&to=*/*";
        number: "{d8c9acee-dec5-11e4-8c75-1681e6b88ec1}";
    };
    ["@mozilla.org/jsinspector;1"]: {
        createInstance(req: CiType["jsinsIpector"]): CiMap["jsinsIpector"];
        name: "@mozilla.org/jsinspector;1";
        number: "{ec5aa99c-7abb-4142-ac5f-aab2419e38e2}";
        private typeName: "mozilla::jsinspector::nsJSInspector";
        private interfaceName: "jsinsIpector";
    };
    ["@mozilla.org/jsdebugger;1"]: {
        createInstance(req: CiType["jsdebugger"]): CiMap["jsdebugger"];
        name: "@mozilla.org/jsdebugger;1";
        number: "{0365cbd5-d46e-4e94-a39f-83b63cd1a963}";
        private typeName: "mozilla::jsdebugger::JSDebugger";
        private interfaceName: "jsdebugger";
    };
    ["@mozilla.org/devtools/startup-clh;1"]: {
        name: "@mozilla.org/devtools/startup-clh;1";
        number: "{9e9a9283-0ce9-4e4a-8f1c-ba129a032c32}";
    };
    ["@mozilla.org/network/protocol/about;1?what=debugging"]: {
        name: "@mozilla.org/network/protocol/about;1?what=debugging";
        number: "{1060afaf-dc9e-43da-8646-23a2faf48493}";
    };
    ["@mozilla.org/network/protocol/about;1?what=devtools-toolbox"]: {
        name: "@mozilla.org/network/protocol/about;1?what=devtools-toolbox";
        number: "{11342911-3135-45a8-8d71-737a2b0ad469}";
    };
    ["@mozilla.org/docloaderservice;1"]: {
        createInstance(req: CiType["nsIDocLoader"]): CiMap["nsIDocLoader"];
        name: "@mozilla.org/docloaderservice;1";
        number: "{057b04d0-0ccf-11d2-beba-00805f8a66dc}";
        private typeName: "nsDocLoader";
        private interfaceName: "nsIDocLoader";
    };
    ["@mozilla.org/docshell/uri-fixup;1"]: {
        getService(): nsIURIFixupType;
        name: "@mozilla.org/docshell/uri-fixup;1";
        number: "{c6cf88b7-452e-47eb-bdc9-86e3561648ef}";
    };
    ["@mozilla.org/docshell/uri-fixup-info;1"]: {
        name: "@mozilla.org/docshell/uri-fixup-info;1";
        number: "{33d75835-722f-42c0-89cc-44f328e56a86}";
    };
    ["@mozilla.org/network/protocol/about;1?what=about"]: {
        name: "@mozilla.org/network/protocol/about;1?what=about";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=addons"]: {
        name: "@mozilla.org/network/protocol/about;1?what=addons";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=buildconfig"]: {
        name: "@mozilla.org/network/protocol/about;1?what=buildconfig";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=certificate"]: {
        name: "@mozilla.org/network/protocol/about;1?what=certificate";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=checkerboard"]: {
        name: "@mozilla.org/network/protocol/about;1?what=checkerboard";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=config"]: {
        name: "@mozilla.org/network/protocol/about;1?what=config";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=crashcontent"]: {
        name: "@mozilla.org/network/protocol/about;1?what=crashcontent";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=crashparent"]: {
        name: "@mozilla.org/network/protocol/about;1?what=crashparent";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=crashgpu"]: {
        name: "@mozilla.org/network/protocol/about;1?what=crashgpu";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=crashextensions"]: {
        name: "@mozilla.org/network/protocol/about;1?what=crashextensions";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=credits"]: {
        name: "@mozilla.org/network/protocol/about;1?what=credits";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=httpsonlyerror"]: {
        name: "@mozilla.org/network/protocol/about;1?what=httpsonlyerror";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=license"]: {
        name: "@mozilla.org/network/protocol/about;1?what=license";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=logging"]: {
        name: "@mozilla.org/network/protocol/about;1?what=logging";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=logo"]: {
        name: "@mozilla.org/network/protocol/about;1?what=logo";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=memory"]: {
        name: "@mozilla.org/network/protocol/about;1?what=memory";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=mozilla"]: {
        name: "@mozilla.org/network/protocol/about;1?what=mozilla";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=neterror"]: {
        name: "@mozilla.org/network/protocol/about;1?what=neterror";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=networking"]: {
        name: "@mozilla.org/network/protocol/about;1?what=networking";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=performance"]: {
        name: "@mozilla.org/network/protocol/about;1?what=performance";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=processes"]: {
        name: "@mozilla.org/network/protocol/about;1?what=processes";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=serviceworkers"]: {
        name: "@mozilla.org/network/protocol/about;1?what=serviceworkers";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=srcdoc"]: {
        name: "@mozilla.org/network/protocol/about;1?what=srcdoc";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=support"]: {
        name: "@mozilla.org/network/protocol/about;1?what=support";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=telemetry"]: {
        name: "@mozilla.org/network/protocol/about;1?what=telemetry";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=translations"]: {
        name: "@mozilla.org/network/protocol/about;1?what=translations";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=url-classifier"]: {
        name: "@mozilla.org/network/protocol/about;1?what=url-classifier";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=webrtc"]: {
        name: "@mozilla.org/network/protocol/about;1?what=webrtc";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=crashes"]: {
        name: "@mozilla.org/network/protocol/about;1?what=crashes";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=profiles"]: {
        name: "@mozilla.org/network/protocol/about;1?what=profiles";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol/about;1?what=webauthn"]: {
        name: "@mozilla.org/network/protocol/about;1?what=webauthn";
        number: "{56ebedd4-6ccf-48e8-bdae-adc77f044567}";
        private interfaceName: "nsIAboutRedirector";
    };
    ["@mozilla.org/network/protocol;1?name=default"]: {
        createInstance(req: CiType["nsIExternalProtocolHandler"]): CiMap["nsIExternalProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=default";
        number: "{bd6390c8-fbea-11d4-98f6-001083010e9b}";
        private typeName: "nsExternalProtocolHandler";
        private interfaceName: "nsIExternalProtocolHandler";
    };
    ["@mozilla.org/ospermissionrequest;1"]: {
        createInstance(req: CiType["nsIOSPermissionRequest"]): CiMap["nsIOSPermissionRequest"];
        name: "@mozilla.org/ospermissionrequest;1";
        number: "{95790842-75a0-430d-98bf-f5ce3788ea6d}";
        private typeName: "nsOSPermissionRequest";
        private interfaceName: "nsIOSPermissionRequest";
    };
    ["@mozilla.org/prefetch-service;1"]: {
        createInstance(req: CiType["nsIPrefetchService"]): CiMap["nsIPrefetchService"];
        name: "@mozilla.org/prefetch-service;1";
        number: "{6b8bdffc-3394-417d-be83-a81b7c0f63bf}";
        private typeName: "nsPrefetchService";
        private interfaceName: "nsIPrefetchService";
    };
    ["@mozilla.org/uriloader/handler-service;1"]: {
        createInstance(req: CiType["nsIIHandlerService"]): CiMap["nsIIHandlerService"];
        name: "@mozilla.org/uriloader/handler-service;1";
        number: "{c4b6fb7c-bfb1-49dc-a65f-035796524b53}";
        private typeName: "nsIHandlerService";
        private interfaceName: "nsIIHandlerService";
    };
    ["@mozilla.org/uriloader/local-handler-app;1"]: {
        createInstance(req: CiType["nsIPlatformLocalHandlerApp_t"]): CiMap["nsIPlatformLocalHandlerApp_t"];
        createInstance(req: CiType["PlatformLocalHandlerApp_t"]): CiMap["PlatformLocalHandlerApp_t"];
        name: "@mozilla.org/uriloader/local-handler-app;1";
        number: "{bc0017e3-2438-47be-a567-41db58f17627}";
        private typeName: "PlatformLocalHandlerApp_t";
        private interfaceName: "PlatformLocalHandlerApp_t";
    };
    ["@mozilla.org/uriloader;1"]: {
        createInstance(req: CiType["nsIURILoader"]): CiMap["nsIURILoader"];
        name: "@mozilla.org/uriloader;1";
        number: "{9f6d5d40-90e7-11d3-af80-00a024ffc08c}";
        private typeName: "nsURILoader";
        private interfaceName: "nsIURILoader";
    };
    ["@mozilla.org/webnavigation-info;1"]: {
        createInstance(req: CiType["nsIWebNavigationInfo"]): CiMap["nsIWebNavigationInfo"];
        name: "@mozilla.org/webnavigation-info;1";
        number: "{f30bc0a2-958b-4287-bf62-ce38ba0c811e}";
        private typeName: "nsWebNavigationInfo";
        private interfaceName: "nsIWebNavigationInfo";
    };
    ["@mozilla.org/uriloader/dbus-handler-app;1"]: {
        createInstance(req: CiType["nsIDBusHandlerApp"]): CiMap["nsIDBusHandlerApp"];
        name: "@mozilla.org/uriloader/dbus-handler-app;1";
        number: "{6c3c274b-4cbf-4bb5-a635-05ad2cbb6535}";
        private typeName: "nsDBusHandlerApp";
        private interfaceName: "nsIDBusHandlerApp";
    };
    ["@mozilla.org/mime;1"]: {
        createInstance(req: CiType["nsIExternalHelperAppService"]): CiMap["nsIExternalHelperAppService"];
        name: "@mozilla.org/mime;1";
        number: "{a7f800e0-4306-11d4-98d0-001083010e9b}";
        private typeName: "nsExternalHelperAppService";
        private interfaceName: "nsIExternalHelperAppService";
    };
    ["@mozilla.org/uriloader/external-helper-app-service;1"]: {
        createInstance(req: CiType["nsIExternalHelperAppService"]): CiMap["nsIExternalHelperAppService"];
        name: "@mozilla.org/uriloader/external-helper-app-service;1";
        number: "{a7f800e0-4306-11d4-98d0-001083010e9b}";
        private typeName: "nsExternalHelperAppService";
        private interfaceName: "nsIExternalHelperAppService";
    };
    ["@mozilla.org/uriloader/external-protocol-service;1"]: {
        createInstance(req: CiType["nsIExternalHelperAppService"]): CiMap["nsIExternalHelperAppService"];
        name: "@mozilla.org/uriloader/external-protocol-service;1";
        number: "{a7f800e0-4306-11d4-98d0-001083010e9b}";
        private typeName: "nsExternalHelperAppService";
        private interfaceName: "nsIExternalHelperAppService";
    };
    ["@mozilla.org/content/dropped-link-handler;1"]: {
        createInstance(req: CiType["nsIDroppedLinkHandler"]): CiMap["nsIDroppedLinkHandler"];
        name: "@mozilla.org/content/dropped-link-handler;1";
        number: "{1f34bc80-1bc7-11d6-a384-d705dd0746fc}";
    };
    ["@mozilla.org/ipc/processselector;1"]: {
        name: "@mozilla.org/ipc/processselector;1";
        number: "{2dc08eaf-6eef-4394-b1df-a3a927c1290b}";
    };
    ["@mozilla.org/dom/slow-script-debug;1"]: {
        name: "@mozilla.org/dom/slow-script-debug;1";
        number: "{e740ddb4-18b4-4aac-8ae1-9b0f4320769d}";
    };
    ["@mozilla.org/dom/browser-element-api;1"]: {
        name: "@mozilla.org/dom/browser-element-api;1";
        number: "{9f171ac4-0939-4ef8-b360-3408aedc3060}";
    };
    ["@mozilla.org/consoleAPI-storage;1"]: {
        name: "@mozilla.org/consoleAPI-storage;1";
        number: "{96cf7855-dfa9-4c6d-8276-f9705b4890f2}";
    };
    ["@mozilla.org/network/protocol;1?name=blob"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/network/protocol;1?name=blob";
        number: "{b43964aa-a078-44b2-b06b-fd4d1b172e66}";
        private typeName: "mozilla::dom::BlobURLProtocolHandler";
        private interfaceName: "dom";
    };
    ["@mozilla.org/login-detection-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/login-detection-service;1";
        number: "{91fdaa4e-eba4-4ed3-831c-ce05c142822d}";
        private typeName: "mozilla::dom::LoginDetectionService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/l10n/localization;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/l10n/localization;1";
        number: "{a2017fd2-7d8d-11e9-b492-ab187f765b54}";
        private typeName: "mozilla::dom::DOMLocalization";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/l10n/overlays;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/l10n/overlays;1";
        number: "{8d85597c-3a92-11e9-9ffc-73d225b2d53f}";
        private typeName: "mozilla::dom::L10nOverlays";
        private interfaceName: "dom";
    };
    ["@mozilla.org/peerconnection;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/peerconnection;1";
        number: "{b93af7a1-3411-44a8-bd0a-8af3dde4d8d8}";
        private typeName: "mozilla::PeerConnectionImpl";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/network/tcp-filter-handler;1?name=stun"]: {
        createInstance(req: CiType["nsIStunTCPSocketFilterHandler"]): CiMap["nsIStunTCPSocketFilterHandler"];
        name: "@mozilla.org/network/tcp-filter-handler;1?name=stun";
        number: "{9fea635a-2fc2-4d08-9721-d238d3f52f92}";
        private typeName: "nsStunTCPSocketFilterHandler";
        private interfaceName: "nsIStunTCPSocketFilterHandler";
    };
    ["@mozilla.org/network/udp-filter-handler;1?name=stun"]: {
        createInstance(req: CiType["nsIStunUDPSocketFilterHandler"]): CiMap["nsIStunUDPSocketFilterHandler"];
        name: "@mozilla.org/network/udp-filter-handler;1?name=stun";
        number: "{3e43ee93-829e-4ea6-a34e-62d9e4c9f993}";
        private typeName: "nsStunUDPSocketFilterHandler";
        private interfaceName: "nsIStunUDPSocketFilterHandler";
    };
    ["@mozilla.org/dom/peerconnection;1"]: {
        name: "@mozilla.org/dom/peerconnection;1";
        number: "{bdc2e533-b308-4708-ac8e-a8bfade6d851}";
    };
    ["@mozilla.org/dom/peerconnectionobserver;1"]: {
        name: "@mozilla.org/dom/peerconnectionobserver;1";
        number: "{d1748d4c-7f6a-4dc5-add6-d55b7678537e}";
    };
    ["@mozilla.org/dom/rtcdtmfsender;1"]: {
        name: "@mozilla.org/dom/rtcdtmfsender;1";
        number: "{3610C242-654E-11E6-8EC0-6D1BE389A607}";
    };
    ["@mozilla.org/dom/rtcicecandidate;1"]: {
        name: "@mozilla.org/dom/rtcicecandidate;1";
        number: "{02b9970c-433d-4cc2-923d-f7028ac66073}";
    };
    ["@mozilla.org/dom/rtcsessiondescription;1"]: {
        name: "@mozilla.org/dom/rtcsessiondescription;1";
        number: "{1775081b-b62d-4954-8ffe-a067bbf508a7}";
    };
    ["@mozilla.org/dom/peerconnectionmanager;1"]: {
        name: "@mozilla.org/dom/peerconnectionmanager;1";
        number: "{7293e901-2be3-4c02-b4bd-cbef6fc24f78}";
    };
    ["@mozilla.org/dom/rtcstatsreport;1"]: {
        name: "@mozilla.org/dom/rtcstatsreport;1";
        number: "{7fe6e18b-0da3-4056-bf3b-440ef3809e06}";
    };
    ["@mozilla.org/dom/peerconnectionstatic;1"]: {
        name: "@mozilla.org/dom/peerconnectionstatic;1";
        number: "{0fb47c47-a205-4583-a9fc-cbadf8c95880}";
    };
    ["@mozilla.org/dom/rtpsender;1"]: {
        name: "@mozilla.org/dom/rtpsender;1";
        number: "{4fff5d46-d827-4cd4-a970-8fd53977440e}";
    };
    ["@mozilla.org/dom/rtpreceiver;1"]: {
        name: "@mozilla.org/dom/rtpreceiver;1";
        number: "{d974b814-8fde-411c-8c45-b86791b81030}";
    };
    ["@mozilla.org/dom/createofferrequest;1"]: {
        name: "@mozilla.org/dom/createofferrequest;1";
        number: "{74b2122d-65a8-4824-aa9e-3d664cb75dc2}";
    };
    ["@mozilla.org/rdd-process-test;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/rdd-process-test;1";
        number: "{12f7d302-5368-412d-bdc9-26d151518e6c}";
        private typeName: "mozilla::RddProcessTest";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/androidspeechsynth;1"]: {
        getService(): unknown;
        name: "@mozilla.org/androidspeechsynth;1";
        number: "{311b2dab-f4d3-4be4-8123-6732313d95c2}";
        private typeName: "mozilla::dom::SpeechSynthesisService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/synthsystem;1"]: {
        getService(): unknown;
        name: "@mozilla.org/synthsystem;1";
        number: "{914e73b4-6337-4bef-97f3-4d069e053a12}";
        private typeName: "mozilla::dom::OSXSpeechSynthesizerService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/synthspeechdispatcher;1"]: {
        getService(): unknown;
        name: "@mozilla.org/synthspeechdispatcher;1";
        number: "{8817b1cf-5ada-43bf-bd73-607657703d0d}";
        private typeName: "mozilla::dom::SpeechDispatcherService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/fakesynth;1"]: {
        getService(): unknown;
        name: "@mozilla.org/fakesynth;1";
        number: "{e7d52d9e-c148-47d8-ab2a-95d7f40ea53d}";
        private typeName: "mozilla::dom::nsFakeSynthServices";
        private interfaceName: "dom";
    };
    ["@mozilla.org/synthsapi;1"]: {
        getService(): unknown;
        name: "@mozilla.org/synthsapi;1";
        number: "{21b4a45b-9806-4021-a706-d768ab0548f9}";
        private typeName: "mozilla::dom::SapiService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/webvttParserWrapper;1"]: {
        name: "@mozilla.org/webvttParserWrapper;1";
        number: "{acf6e493-0092-4b26-b172-241e375c57ab}";
    };
    ["@mozilla.org/notificationStorage;1"]: {
        name: "@mozilla.org/notificationStorage;1";
        number: "{37f819b0-0b5c-11e3-8ffd-0800200c9a66}";
    };
    ["@mozilla.org/dom/payments/basiccard-change-details;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/basiccard-change-details;1";
        number: "{5296f79e-15ea-40c3-8196-19cfa64d328c}";
        private typeName: "mozilla::dom::BasicCardMethodChangeDetails";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/basiccard-response-data;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/basiccard-response-data;1";
        number: "{0d55a5e6-d185-44f0-b992-a8e1321e4bce}";
        private typeName: "mozilla::dom::BasicCardResponseData";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/general-change-details;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/general-change-details;1";
        number: "{e031267e-bec8-4f3c-b0b1-396b77ca260c}";
        private typeName: "mozilla::dom::GeneralMethodChangeDetails";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/general-response-data;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/general-response-data;1";
        number: "{b986773e-2b30-4ed2-b8fe-6a96631c8000}";
        private typeName: "mozilla::dom::GeneralResponseData";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/payment-abort-action-response;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/payment-abort-action-response;1";
        number: "{8c72bcdb-0c37-4786-a9e5-510afa2f8ede}";
        private typeName: "mozilla::dom::PaymentAbortActionResponse";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/payment-address;1"]: {
        createInstance(req: CiType["payments"]): CiMap["payments"];
        name: "@mozilla.org/dom/payments/payment-address;1";
        number: "{49a02241-7e48-477a-9345-9f246925dcb3}";
        private typeName: "mozilla::dom::payments::PaymentAddress";
        private interfaceName: "payments";
    };
    ["@mozilla.org/dom/payments/payment-canmake-action-response;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/payment-canmake-action-response;1";
        number: "{52fc3f9f-c0cb-4874-b3d4-ee4b6e9cbe9c}";
        private typeName: "mozilla::dom::PaymentCanMakeActionResponse";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/payment-complete-action-response;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/payment-complete-action-response;1";
        number: "{62c01e69-9ca4-4060-99e4-b95f628c8e6d}";
        private typeName: "mozilla::dom::PaymentCompleteActionResponse";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/payment-request-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/dom/payments/payment-request-service;1";
        number: "{cccd665f-edf3-41fc-ab9b-fc55b37340aa}";
        private typeName: "mozilla::dom::PaymentRequestService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/payments/payment-show-action-response;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/dom/payments/payment-show-action-response;1";
        number: "{184385cb-2d35-4b99-a9a3-7c780bf66b9b}";
        private typeName: "mozilla::dom::PaymentShowActionResponse";
        private interfaceName: "dom";
    };
    ["@mozilla.org/power/powermanagerservice;1"]: {
        getService(): unknown;
        name: "@mozilla.org/power/powermanagerservice;1";
        number: "{18c2e238-3a0a-4153-89fc-166b3b1465a1}";
        private typeName: "mozilla::dom::power::PowerManagerService";
        private interfaceName: "power";
    };
    ["@mozilla.org/push/PushManager;1"]: {
        name: "@mozilla.org/push/PushManager;1";
        number: "{cde1d019-fad8-4044-b141-65fb4fb7a245}";
    };
    ["@mozilla.org/push/Service;1"]: {
        name: "@mozilla.org/push/Service;1";
        number: "{daaa8d73-677e-4233-8acd-2c404bd01658}";
    };
    ["@mozilla.org/network/protocol;1?name=indexeddb"]: {
        createInstance(req: CiType["nsIIndexedDBProtocolHandler"]): CiMap["nsIIndexedDBProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=indexeddb";
        number: "{b6f2f870-b0bc-4a1a-9c40-02cc171adb5b}";
        private typeName: "nsIndexedDBProtocolHandler";
        private interfaceName: "nsIIndexedDBProtocolHandler";
    };
    ["@mozilla.org/dom/session-storage-service;1"]: {
        getService(): nsISessionStorageServiceType;
        name: "@mozilla.org/dom/session-storage-service;1";
        number: "{7ec4bc82-5022-4d32-8e98-ffbceadb692c}";
        private typeName: "nsISessionStorageService";
        private interfaceName: "nsIISessionStorageService";
    };
    ["@mozilla.org/geolocation/provider;1"]: {
        name: "@mozilla.org/geolocation/provider;1";
        number: "{77DA64D3-7458-4920-9491-86CC9914F904}";
    };
    ["@mozilla.org/geolocation/mls-provider;1"]: {
        name: "@mozilla.org/geolocation/mls-provider;1";
        number: "{77DA64D3-7458-4920-9491-86CC9914F904}";
    };
    ["@mozilla.org/webauthn/service;1"]: {
        name: "@mozilla.org/webauthn/service;1";
        number: "{ebe8a51d-bd54-4838-b031-cd2289990e14}";
    };
    ["@mozilla.org/dom/test-interface-js;1"]: {
        name: "@mozilla.org/dom/test-interface-js;1";
        number: "{2ac4e026-cf25-47d5-b067-78d553c3cad8}";
    };
    ["@mozilla.org/permissionmanager;1"]: {
        getService(): nsIPermissionManagerType;
        name: "@mozilla.org/permissionmanager;1";
        number: "{4f6b5e00-0c36-11d5-a535-0010a401eb10}";
        private typeName: "nsIPermissionManager";
        private interfaceName: "nsIIPermissionManager";
    };
    ["@mozilla.org/permissiondelegatehandler;1"]: {
        createInstance(req: CiType["nsIPermissionDelegateHandler"]): CiMap["nsIPermissionDelegateHandler"];
        createInstance(req: CiType["PermissionDelegateHandler"]): CiMap["PermissionDelegateHandler"];
        name: "@mozilla.org/permissiondelegatehandler;1";
        number: "{07611dc6-bf4d-4d8a-a64b-f3a5904dddc7}";
        private typeName: "PermissionDelegateHandler";
        private interfaceName: "PermissionDelegateHandler";
    };
    ["@mozilla.org/readconfig;1"]: {
        createInstance(req: CiType["nsIReadConfig"]): CiMap["nsIReadConfig"];
        name: "@mozilla.org/readconfig;1";
        number: "{ba5bc4c6-1dd1-11b2-bb89-b844c6ec0339}";
        private typeName: "nsReadConfig";
        private interfaceName: "nsIReadConfig";
    };
    ["@mozilla.org/spellchecker/engine;1"]: {
        createInstance(req: CiType["mozIHunsIpell"]): CiMap["mozIHunsIpell"];
        name: "@mozilla.org/spellchecker/engine;1";
        number: "{56c778e4-1bee-45f3-a689-886692a97fe7}";
        private typeName: "mozHunspell";
        private interfaceName: "mozIHunsIpell";
    };
    ["@mozilla.org/spellchecker/personaldictionary;1"]: {
        createInstance(req: CiType["mozIPersonalDictionary"]): CiMap["mozIPersonalDictionary"];
        name: "@mozilla.org/spellchecker/personaldictionary;1";
        number: "{7ef52eaf-b7e1-462b-87e2-5d1dbaca9048}";
        private typeName: "mozPersonalDictionary";
        private interfaceName: "mozIPersonalDictionary";
    };
    ["@mozilla.org/gfx/fontenumerator;1"]: {
        createInstance(req: CiType["nsIThebesFontEnumerator"]): CiMap["nsIThebesFontEnumerator"];
        name: "@mozilla.org/gfx/fontenumerator;1";
        number: "{a6cf9115-15b3-11d2-932e-00805f8add32}";
        private typeName: "nsThebesFontEnumerator";
        private interfaceName: "nsIThebesFontEnumerator";
    };
    ["@mozilla.org/fxr/clh;1"]: {
        createInstance(req: CiType["nsIFxrCommandLineHandler"]): CiMap["nsIFxrCommandLineHandler"];
        name: "@mozilla.org/fxr/clh;1";
        number: "{5baca10a-4d53-4335-b24d-c69696640a9a}";
        private typeName: "nsFxrCommandLineHandler";
        private interfaceName: "nsIFxrCommandLineHandler";
    };
    ["@mozilla.org/image/cache;1"]: {
        createInstance(req: CiType["nsIImgLoader"]): CiMap["nsIImgLoader"];
        createInstance(req: CiType["imgLoader"]): CiMap["imgLoader"];
        name: "@mozilla.org/image/cache;1";
        number: "{c1354898-e3fe-4602-88a7-c4520c21cb4e}";
        private typeName: "imgLoader";
        private interfaceName: "imgLoader";
    };
    ["@mozilla.org/image/loader;1"]: {
        createInstance(req: CiType["nsIImgLoader"]): CiMap["nsIImgLoader"];
        createInstance(req: CiType["imgLoader"]): CiMap["imgLoader"];
        name: "@mozilla.org/image/loader;1";
        number: "{c1354898-e3fe-4602-88a7-c4520c21cb4e}";
        private typeName: "imgLoader";
        private interfaceName: "imgLoader";
    };
    ["@mozilla.org/image-blocker-content-policy;1"]: {
        createInstance(req: CiType["image"]): CiMap["image"];
        name: "@mozilla.org/image-blocker-content-policy;1";
        number: "{f6fcd651-164b-4416-b001-9c8c393fd93b}";
        private typeName: "mozilla::image::ImageBlocker";
        private interfaceName: "image";
    };
    ["@mozilla.org/image/request;1"]: {
        createInstance(req: CiType["nsIImgRequestProxy"]): CiMap["nsIImgRequestProxy"];
        createInstance(req: CiType["imgRequestProxy"]): CiMap["imgRequestProxy"];
        name: "@mozilla.org/image/request;1";
        number: "{20557898-1dd2-11b2-8f65-9c462ee2bc95}";
        private typeName: "imgRequestProxy";
        private interfaceName: "imgRequestProxy";
    };
    ["@mozilla.org/image/tools;1"]: {
        createInstance(req: CiType["image"]): CiMap["image"];
        name: "@mozilla.org/image/tools;1";
        number: "{3d8fa16d-c9e1-4b50-bdef-2c7ae249967a}";
        private typeName: "mozilla::image::imgTools";
        private interfaceName: "image";
    };
    ["@mozilla.org/image/encoder;2?type=image/bmp"]: {
        createInstance(req: CiType["nsIBMPEncoder"]): CiMap["nsIBMPEncoder"];
        name: "@mozilla.org/image/encoder;2?type=image/bmp";
        number: "{13a5320c-4c91-4fa4-bd16-b081a3ba8c0b}";
        private typeName: "nsBMPEncoder";
        private interfaceName: "nsIBMPEncoder";
    };
    ["@mozilla.org/image/encoder;2?type=image/vnd.microsoft.icon"]: {
        createInstance(req: CiType["nsIICOEncoder"]): CiMap["nsIICOEncoder"];
        name: "@mozilla.org/image/encoder;2?type=image/vnd.microsoft.icon";
        number: "{92ae3ab2-8968-41b1-8709-b6123bceaf21}";
        private typeName: "nsICOEncoder";
        private interfaceName: "nsIICOEncoder";
    };
    ["@mozilla.org/image/encoder;2?type=image/jpeg"]: {
        createInstance(req: CiType["nsIJPEGEncoder"]): CiMap["nsIJPEGEncoder"];
        name: "@mozilla.org/image/encoder;2?type=image/jpeg";
        number: "{ac2bb8fe-eeeb-4572-b40f-be03932b56e0}";
        private typeName: "nsJPEGEncoder";
        private interfaceName: "nsIJPEGEncoder";
    };
    ["@mozilla.org/image/encoder;2?type=image/png"]: {
        createInstance(req: CiType["nsIPNGEncoder"]): CiMap["nsIPNGEncoder"];
        name: "@mozilla.org/image/encoder;2?type=image/png";
        number: "{38d1592e-b81e-432b-86f8-471878bbfe07}";
        private typeName: "nsPNGEncoder";
        private interfaceName: "nsIPNGEncoder";
    };
    ["@mozilla.org/image/encoder;2?type=image/webp"]: {
        createInstance(req: CiType["nsIWebPEncoder"]): CiMap["nsIWebPEncoder"];
        name: "@mozilla.org/image/encoder;2?type=image/webp";
        number: "{a8e5a8e5-bebf-4512-9f50-e41e4748ce28}";
        private typeName: "nsWebPEncoder";
        private interfaceName: "nsIWebPEncoder";
    };
    ["@mozilla.org/network/protocol;1?name=moz-icon"]: {
        createInstance(req: CiType["nsIIconProtocolHandler"]): CiMap["nsIIconProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=moz-icon";
        number: "{d0f9db12-249c-11d5-9905-001083010e9b}";
        private typeName: "nsIconProtocolHandler";
        private interfaceName: "nsIIconProtocolHandler";
    };
    ["@mozilla.org/intl/stringbundle;1"]: {
        createInstance(req: CiType["nsIStringBundleService"]): CiMap["nsIStringBundleService"];
        name: "@mozilla.org/intl/stringbundle;1";
        number: "{d85a17c1-aa7c-11d2-9b8c-00805f8a16d9}";
        private typeName: "nsStringBundleService";
        private interfaceName: "nsIStringBundleService";
    };
    ["@mozilla.org/intl/localeservice;1"]: {
        getService(): mozILocaleServiceType;
        name: "@mozilla.org/intl/localeservice;1";
        number: "{92735ff4-6384-4ad6-8508-757010e149ee}";
        private typeName: "mozilla::intl::LocaleService";
        private interfaceName: "intl";
    };
    ["@mozilla.org/intl/ospreferences;1"]: {
        getService(): unknown;
        name: "@mozilla.org/intl/ospreferences;1";
        number: "{65944815-e9ae-48bd-a2bf-f1108720950c}";
        private typeName: "mozilla::intl::OSPreferences";
        private interfaceName: "intl";
    };
    ["@mozilla.org/intl/converter-input-stream;1"]: {
        createInstance(req: CiType["nsIConverterInputStream"]): CiMap["nsIConverterInputStream"];
        name: "@mozilla.org/intl/converter-input-stream;1";
        number: "{2bc2ad62-ad5d-4b7b-a9db-f74ae203c527}";
        private typeName: "nsConverterInputStream";
        private interfaceName: "nsIConverterInputStream";
    };
    ["@mozilla.org/intl/converter-output-stream;1"]: {
        createInstance(req: CiType["nsIConverterOutputStream"]): CiMap["nsIConverterOutputStream"];
        name: "@mozilla.org/intl/converter-output-stream;1";
        number: "{ff8780a5-bbb1-4bc5-8ee7-057e7bc5c925}";
        private typeName: "nsConverterOutputStream";
        private interfaceName: "nsIConverterOutputStream";
    };
    ["@mozilla.org/intl/scriptableunicodeconverter"]: {
        createInstance(req: CiType["nsIScriptableUnicodeConverter"]): CiMap["nsIScriptableUnicodeConverter"];
        name: "@mozilla.org/intl/scriptableunicodeconverter";
        number: "{0a698c44-3bff-11d4-9649-00c0ca135b4e}";
        private typeName: "nsScriptableUnicodeConverter";
        private interfaceName: "nsIScriptableUnicodeConverter";
    };
    ["@mozilla.org/intl/texttosuburi;1"]: {
        createInstance(req: CiType["nsITextToSubURI"]): CiMap["nsITextToSubURI"];
        name: "@mozilla.org/intl/texttosuburi;1";
        number: "{8b042e22-6f87-11d3-b3c8-00805f8a6670}";
        private typeName: "nsTextToSubURI";
        private interfaceName: "nsITextToSubURI";
    };
    ["@mozilla.org/fork-server-launcher;1"]: {
        getService(): unknown;
        name: "@mozilla.org/fork-server-launcher;1";
        number: "{cdb4757f-f51b-40c0-8b38-66d12c3bff7b}";
        private typeName: "mozilla::ipc::ForkServerLauncher";
        private interfaceName: "ipc";
    };
    ["@mozilla.org/utility-process-test;1"]: {
        createInstance(req: CiType["ipc"]): CiMap["ipc"];
        name: "@mozilla.org/utility-process-test;1";
        number: "{0a4478f4-c5ae-4fb1-8686-d5b09fb99afb}";
        private typeName: "mozilla::ipc::UtilityProcessTest";
        private interfaceName: "ipc";
    };
    ["@mozilla.org/moz/jssubscript-loader;1"]: {
        createInstance(req: CiType["mozIJSSubScriptLoader"]): CiMap["mozIJSSubScriptLoader"];
        name: "@mozilla.org/moz/jssubscript-loader;1";
        number: "{929814d6-1dd2-11b2-8e08-82fa0a339b00}";
        private typeName: "mozJSSubScriptLoader";
        private interfaceName: "mozIJSSubScriptLoader";
    };
    ["@mozilla.org/childprocessmessagemanager;1"]: {
        name: "@mozilla.org/childprocessmessagemanager;1";
        number: "{fe0ff7c3-8e97-448b-9a8a-86afdb9fbbb6}";
        private interfaceName: "CreateChildMessageManager";
    };
    ["@mozilla.org/content/document-loader-factory;1"]: {
        createInstance(req: CiType["nsIIDocumentLoaderFactory"]): CiMap["nsIIDocumentLoaderFactory"];
        name: "@mozilla.org/content/document-loader-factory;1";
        number: "{fc886801-e768-11d4-9885-00c04fa0cf4b}";
        private typeName: "nsIDocumentLoaderFactory";
        private interfaceName: "nsIIDocumentLoaderFactory";
    };
    ["@mozilla.org/content/plugin/document-loader-factory;1"]: {
        createInstance(req: CiType["nsIIDocumentLoaderFactory"]): CiMap["nsIIDocumentLoaderFactory"];
        name: "@mozilla.org/content/plugin/document-loader-factory;1";
        number: "{0ddf4df8-4dbb-4133-8b79-9afb966514f5}";
        private typeName: "nsIDocumentLoaderFactory";
        private interfaceName: "nsIIDocumentLoaderFactory";
    };
    ["@mozilla.org/content/style-sheet-service;1"]: {
        createInstance(req: CiType["nsIStyleSheetService"]): CiMap["nsIStyleSheetService"];
        name: "@mozilla.org/content/style-sheet-service;1";
        number: "{3b55e72e-ab7e-431b-89c0-3b06a8b14016}";
        private typeName: "nsStyleSheetService";
        private interfaceName: "nsIStyleSheetService";
    };
    ["@mozilla.org/contentsecuritymanager;1"]: {
        createInstance(req: CiType["nsIContentSecurityManager"]): CiMap["nsIContentSecurityManager"];
        name: "@mozilla.org/contentsecuritymanager;1";
        number: "{cdcc1ab8-3cea-4e6c-a294-a651fa35227f}";
        private typeName: "nsContentSecurityManager";
        private interfaceName: "nsIContentSecurityManager";
    };
    ["@mozilla.org/cspcontext;1"]: {
        createInstance(req: CiType["nsICSPContext"]): CiMap["nsICSPContext"];
        name: "@mozilla.org/cspcontext;1";
        number: "{09d9ed1a-e5d4-4004-bfe0-27ceb923d9ac}";
        private typeName: "nsCSPContext";
        private interfaceName: "nsICSPContext";
    };
    ["@mozilla.org/cspservice;1"]: {
        createInstance(req: CiType["nsICSPService"]): CiMap["nsICSPService"];
        createInstance(req: CiType["CSPService"]): CiMap["CSPService"];
        name: "@mozilla.org/cspservice;1";
        number: "{8d2f40b2-4875-4c95-97d9-3f7dca2cb460}";
        private typeName: "CSPService";
        private interfaceName: "CSPService";
    };
    ["@mozilla.org/data-document-content-policy;1"]: {
        createInstance(req: CiType["nsIDataDocumentContentPolicy"]): CiMap["nsIDataDocumentContentPolicy"];
        name: "@mozilla.org/data-document-content-policy;1";
        number: "{1147d32c-215b-4014-b180-07fe7aedf915}";
        private typeName: "nsDataDocumentContentPolicy";
        private interfaceName: "nsIDataDocumentContentPolicy";
    };
    ["@mozilla.org/devicesensors;1"]: {
        createInstance(req: CiType["nsIDeviceSensors"]): CiMap["nsIDeviceSensors"];
        name: "@mozilla.org/devicesensors;1";
        number: "{ecba5203-77da-465a-865e-78b7af10d8f7}";
        private typeName: "nsDeviceSensors";
        private interfaceName: "nsIDeviceSensors";
    };
    ["@mozilla.org/docshell/structured-clone-container;1"]: {
        createInstance(req: CiType["nsIStructuredCloneContainer"]): CiMap["nsIStructuredCloneContainer"];
        name: "@mozilla.org/docshell/structured-clone-container;1";
        number: "{38bd0634-0fd4-46f0-b85f-13ced889eeec}";
        private typeName: "nsStructuredCloneContainer";
        private interfaceName: "nsIStructuredCloneContainer";
    };
    ["@mozilla.org/dom/dom-request-service;1"]: {
        getService(): nsIDOMRequestServiceType;
        name: "@mozilla.org/dom/dom-request-service;1";
        number: "{3160e271-138d-4cc7-9d63-6429f16957c7}";
        private typeName: "mozilla::dom::DOMRequestService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/dom/localStorage-manager;1"]: {
        createInstance(req: CiType["nsIDOMStorageManager"]): CiMap["nsIDOMStorageManager"];
        createInstance(req: CiType["nsILocalStorageManager"]): CiMap["nsILocalStorageManager"];
        name: "@mozilla.org/dom/localStorage-manager;1";
        number: "{656db07c-aa80-49e4-bce8-e431baae697d}";
        private interfaceName: "LocalStorageManagerConsItructor";
    };
    ["@mozilla.org/dom/sessionStorage-manager;1"]: {
        name: "@mozilla.org/dom/sessionStorage-manager;1";
        number: "{64e4bf03-773e-408e-939a-e11652fdfd28}";
        private interfaceName: "SessionStorageManagerConsItructor";
    };
    ["@mozilla.org/dom/quota-manager-service;1"]: {
        getService(): nsIQuotaManagerServiceType;
        name: "@mozilla.org/dom/quota-manager-service;1";
        number: "{5a75c25a-5e7e-4d90-8f7c-07eb15cc0aa8}";
        private typeName: "mozilla::dom::quota::QuotaManagerService";
        private interfaceName: "quota";
    };
    ["@mozilla.org/dom/sdb-connection;1"]: {
        name: "@mozilla.org/dom/sdb-connection;1";
        number: "{ae2793c0-2ba3-4adb-9c5e-c23525812c64}";
        private interfaceName: "SDBConnection";
    };
    ["@mozilla.org/dom/workers/workerdebuggermanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/dom/workers/workerdebuggermanager;1";
        number: "{62ec8731-55ad-4246-b2ea-f26c1fe19d2d}";
        private typeName: "mozilla::dom::WorkerDebuggerManager";
        private interfaceName: "dom";
    };
    ["@mozilla.org/eventlistenerservice;1"]: {
        createInstance(req: CiType["nsIIEventListenerService"]): CiMap["nsIIEventListenerService"];
        createInstance(req: CiType["nsIEventListenerService"]): CiMap["nsIEventListenerService"];
        name: "@mozilla.org/eventlistenerservice;1";
        number: "{baa34652-f1f1-4185-b224-244ee82a413a}";
        private typeName: "nsIEventListenerService";
        private interfaceName: "nsIIEventListenerService";
    };
    ["@mozilla.org/focus-manager;1"]: {
        createInstance(req: CiType["nsIIFocusManager"]): CiMap["nsIIFocusManager"];
        createInstance(req: CiType["nsIFocusManager"]): CiMap["nsIFocusManager"];
        name: "@mozilla.org/focus-manager;1";
        number: "{cf7fd51f-aba2-44c1-9ff0-11f7508efcd4}";
        private typeName: "nsIFocusManager";
        private interfaceName: "nsIIFocusManager";
    };
    ["@mozilla.org/gecko-media-plugin-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gecko-media-plugin-service;1";
        number: "{7b121f7e-ebe4-43ab-9410-dc9087a1dba6}";
        private typeName: "mozilla::gmp::GeckoMediaPluginService";
        private interfaceName: "gmp";
    };
    ["@mozilla.org/geolocation;1"]: {
        getService(): unknown;
        name: "@mozilla.org/geolocation;1";
        number: "{01e1c3ff-094a-d048-44b4-62d29c7b4f39}";
        private typeName: "mozilla::dom::Geolocation";
        private interfaceName: "dom";
    };
    ["@mozilla.org/globalmessagemanager;1"]: {
        name: "@mozilla.org/globalmessagemanager;1";
        number: "{130b016f-fad7-4526-bc7f-827dabf79265}";
        private interfaceName: "CreateGlobalMessageManager";
    };
    ["@mozilla.org/inspector/deep-tree-walker;1"]: {
        createInstance(req: CiType["nsIInDeepTreeWalker"]): CiMap["nsIInDeepTreeWalker"];
        createInstance(req: CiType["inDeepTreeWalker"]): CiMap["inDeepTreeWalker"];
        name: "@mozilla.org/inspector/deep-tree-walker;1";
        number: "{bfcb82c2-5611-4318-90d6-baf4a7864252}";
        private typeName: "inDeepTreeWalker";
        private interfaceName: "inDeepTreeWalker";
    };
    ["@mozilla.org/layout/content-policy;1"]: {
        name: "@mozilla.org/layout/content-policy;1";
        number: "{0e3afd3d-eb60-4c2b-963b-56d7c439f124}";
        private interfaceName: "CreateContentPolicy";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=application/vnd.mozilla.xul+xml"]: {
        createInstance(req: CiType["nsIIContentSerializer"]): CiMap["nsIIContentSerializer"];
        name: "@mozilla.org/layout/contentserializer;1?mimetype=application/vnd.mozilla.xul+xml";
        number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
        private typeName: "nsIContentSerializer";
        private interfaceName: "nsIIContentSerializer";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=application/xml"]: {
        createInstance(req: CiType["nsIIContentSerializer"]): CiMap["nsIIContentSerializer"];
        name: "@mozilla.org/layout/contentserializer;1?mimetype=application/xml";
        number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
        private typeName: "nsIContentSerializer";
        private interfaceName: "nsIIContentSerializer";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=image/svg+xml"]: {
        createInstance(req: CiType["nsIIContentSerializer"]): CiMap["nsIIContentSerializer"];
        name: "@mozilla.org/layout/contentserializer;1?mimetype=image/svg+xml";
        number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
        private typeName: "nsIContentSerializer";
        private interfaceName: "nsIIContentSerializer";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=text/xml"]: {
        createInstance(req: CiType["nsIIContentSerializer"]): CiMap["nsIIContentSerializer"];
        name: "@mozilla.org/layout/contentserializer;1?mimetype=text/xml";
        number: "{4aef38b7-6364-4e23-a5e7-12f837fbbd9c}";
        private typeName: "nsIContentSerializer";
        private interfaceName: "nsIIContentSerializer";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=application/xhtml+xml"]: {
        name: "@mozilla.org/layout/contentserializer;1?mimetype=application/xhtml+xml";
        number: "{e7c2aaf5-c11a-4954-9dbf-e28edec1fd91}";
        private interfaceName: "CreateXHTMLContentSerializer";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=text/html"]: {
        createInstance(req: CiType["nsIIContentSerializer"]): CiMap["nsIIContentSerializer"];
        name: "@mozilla.org/layout/contentserializer;1?mimetype=text/html";
        number: "{9d3f70da-86e9-11d4-95ec-00b0d03e37b7}";
        private typeName: "nsIContentSerializer";
        private interfaceName: "nsIIContentSerializer";
    };
    ["@mozilla.org/layout/contentserializer;1?mimetype=text/plain"]: {
        name: "@mozilla.org/layout/contentserializer;1?mimetype=text/plain";
        number: "{6030f7ef-32ed-46a7-9a63-6a5d3f90445f}";
        private interfaceName: "CreatePlainTextSerializer";
    };
    ["@mozilla.org/mediaManagerService;1"]: {
        getService(): unknown;
        name: "@mozilla.org/mediaManagerService;1";
        number: "{abc622ea-9655-4123-80d9-22621bdd5465}";
        private typeName: "nsIMediaManagerService";
        private interfaceName: "nsIIMediaManagerService";
    };
    ["@mozilla.org/mixedcontentblocker;1"]: {
        createInstance(req: CiType["nsIMixedContentBlocker"]): CiMap["nsIMixedContentBlocker"];
        name: "@mozilla.org/mixedcontentblocker;1";
        number: "{daf1461b-bf29-4f88-8d0e-4bcdf332c862}";
        private typeName: "nsMixedContentBlocker";
        private interfaceName: "nsIMixedContentBlocker";
    };
    ["@mozilla.org/referrer-info;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/referrer-info;1";
        number: "{041a129f-10ce-4bda-a60d-e027a26d5ed0}";
        private typeName: "mozilla::dom::ReferrerInfo";
        private interfaceName: "dom";
    };
    ["@mozilla.org/network/protocol;1?name=javascript"]: {
        createInstance(req: CiType["nsIJSProtocolHandler"]): CiMap["nsIJSProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=javascript";
        number: "{bfc310d2-38a0-11d3-8cd3-0060b0fc14a3}";
        private typeName: "nsJSProtocolHandler";
        private interfaceName: "nsIJSProtocolHandler";
    };
    ["@mozilla.org/no-data-protocol-content-policy;1"]: {
        createInstance(req: CiType["nsINoDataProtocolContentPolicy"]): CiMap["nsINoDataProtocolContentPolicy"];
        name: "@mozilla.org/no-data-protocol-content-policy;1";
        number: "{ac9e3e82-bfbd-4f26-941e-f58c8ee178c1}";
        private typeName: "nsNoDataProtocolContentPolicy";
        private interfaceName: "nsINoDataProtocolContentPolicy";
    };
    ["@mozilla.org/parentprocessmessagemanager;1"]: {
        name: "@mozilla.org/parentprocessmessagemanager;1";
        number: "{2a058404-fb85-44ec-8cfd-e8cbdc988dc1}";
        private interfaceName: "CreateParentMessageManager";
    };
    ["@mozilla.org/parserutils;1"]: {
        createInstance(req: CiType["nsIParserUtils"]): CiMap["nsIParserUtils"];
        name: "@mozilla.org/parserutils;1";
        number: "{af7b24cb-893f-41bb-961f-5a69388e27c3}";
        private typeName: "nsParserUtils";
        private interfaceName: "nsIParserUtils";
    };
    ["@mozilla.org/push/Notifier;1"]: {
        createInstance(req: CiType["dom"]): CiMap["dom"];
        name: "@mozilla.org/push/Notifier;1";
        number: "{2fc2d3e3-020f-404e-b06a-6ecf3ea2334a}";
        private typeName: "mozilla::dom::PushNotifier";
        private interfaceName: "dom";
    };
    ["@mozilla.org/scriptable-content-iterator;1"]: {
        createInstance(req: CiType["nsIScriptableContentIterator"]): CiMap["nsIScriptableContentIterator"];
        createInstance(req: CiType["ScriptableContentIterator"]): CiMap["ScriptableContentIterator"];
        name: "@mozilla.org/scriptable-content-iterator;1";
        number: "{f68037ec-2790-44c5-8e5f-df5da58b93a7}";
        private typeName: "ScriptableContentIterator";
        private interfaceName: "ScriptableContentIterator";
    };
    ["@mozilla.org/scripterror;1"]: {
        createInstance(req: CiType["nsIScriptError"]): CiMap["nsIScriptError"];
        name: "@mozilla.org/scripterror;1";
        number: "{1950539a-90f0-4d22-b5af-71329c68fa35}";
        private typeName: "nsScriptError";
        private interfaceName: "nsIScriptError";
    };
    ["@mozilla.org/scriptsecuritymanager;1"]: {
        createInstance(req: CiType["nsIScriptSecurityManager"]): CiMap["nsIScriptSecurityManager"];
        name: "@mozilla.org/scriptsecuritymanager;1";
        number: "{7ee2a4c0-4b93-17d3-ba18-0060b0f199a2}";
        private interfaceName: "ConsItruct_nsIScriptSecurityManager";
    };
    ["@mozilla.org/serviceworkers/manager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/serviceworkers/manager;1";
        number: "{c74bde32-bcc7-4840-8430-c733351b212a}";
        private typeName: "mozilla::dom::ServiceWorkerManager";
        private interfaceName: "dom";
    };
    ["@mozilla.org/storage/activity-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/storage/activity-service;1";
        number: "{69da374a-fda3-4a93-9fbc-d9304f66a7fe}";
        private typeName: "mozilla::dom::StorageActivityService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/systemprincipal;1"]: {
        getService(): unknown;
        name: "@mozilla.org/systemprincipal;1";
        number: "{4a6212db-accb-11d3-b765-0060b0b6cecb}";
        private typeName: "nsIPrincipal";
        private interfaceName: "nsIIPrincipal";
    };
    ["@mozilla.org/text-input-processor;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/text-input-processor;1";
        number: "{caaab47f-1e31-478e-8919-970904e9cb72}";
        private typeName: "mozilla::TextInputProcessor";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/thirdpartyutil;1"]: {
        createInstance(req: CiType["nsIThirdPartyUtil"]): CiMap["nsIThirdPartyUtil"];
        createInstance(req: CiType["ThirdPartyUtil"]): CiMap["ThirdPartyUtil"];
        name: "@mozilla.org/thirdpartyutil;1";
        number: "{08c6cc8b-cfb0-421d-b1f7-683ff2989681}";
        private typeName: "ThirdPartyUtil";
        private interfaceName: "ThirdPartyUtil";
    };
    ["@mozilla.org/websocketevent/service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/websocketevent/service;1";
        number: "{31689828-da66-49a6-870c-df62b83fe789}";
        private typeName: "mozilla::net::WebSocketEventService";
        private interfaceName: "net";
    };
    ["@mozilla.org/eventsourceevent/service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/eventsourceevent/service;1";
        number: "{abfbb785-5a44-49cf-88db-2f300bf727c9}";
        private typeName: "mozilla::dom::EventSourceEventService";
        private interfaceName: "dom";
    };
    ["@mozilla.org/synth-voice-registry;1"]: {
        getService(): unknown;
        name: "@mozilla.org/synth-voice-registry;1";
        number: "{7090524d-5574-4492-a77f-d8d558ced59d}";
        private typeName: "mozilla::dom::nsSynthVoiceRegistry";
        private interfaceName: "dom";
    };
    ["@mozilla.org/webspeech/service;1?name=online"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/webspeech/service;1?name=online";
        number: "{0ff5ce56-5b09-4db8-adc6-8266af95f864}";
        private typeName: "mozilla::OnlineSpeechRecognitionService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/webspeech/service;1?name=fake"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/webspeech/service;1?name=fake";
        number: "{48c345e7-9929-4f9a-a563-f478222dabcd}";
        private typeName: "mozilla::FakeSpeechRecognitionService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/accessibilityService;1"]: {
        createInstance(req: CiType["nsIIAccessibilityService"]): CiMap["nsIIAccessibilityService"];
        name: "@mozilla.org/accessibilityService;1";
        number: "{3b265b69-f813-48ff-880d-d88d101af404}";
        private typeName: "nsIAccessibilityService";
        private interfaceName: "nsIIAccessibilityService";
    };
    ["@mozilla.org/layout-debug/layout-debuggingtools;1"]: {
        createInstance(req: CiType["nsILayoutDebuggingTools"]): CiMap["nsILayoutDebuggingTools"];
        name: "@mozilla.org/layout-debug/layout-debuggingtools;1";
        number: "{3f4c3b63-e640-4712-abbf-fff1301ceb60}";
        private typeName: "nsLayoutDebuggingTools";
        private interfaceName: "nsILayoutDebuggingTools";
    };
    ["@mozilla.org/commandlinehandler/general-startup;1?type=layoutdebug"]: {
        createInstance(req: CiType["nsILayoutDebugCLH"]): CiMap["nsILayoutDebugCLH"];
        name: "@mozilla.org/commandlinehandler/general-startup;1?type=layoutdebug";
        number: "{a8f52633-5ecf-424a-a147-47c322f7bc2e}";
        private typeName: "nsLayoutDebugCLH";
        private interfaceName: "nsILayoutDebugCLH";
    };
    ["@mozilla.org/embedcomp/prompt-collection;1"]: {
        name: "@mozilla.org/embedcomp/prompt-collection;1";
        number: "{3e30d2a0-9934-11ea-bb37-0242ac130002}";
    };
    ["@mozilla.org/prompter;1"]: {
        createInstance(req: CiType["nsIPromptService"]): CiMap["nsIPromptService"];
        name: "@mozilla.org/prompter;1";
        number: "{076ac188-23c1-4390-aa08-7ef1f78ca5d9}";
    };
    ["@mozilla.org/geckoview/startup;1"]: {
        name: "@mozilla.org/geckoview/startup;1";
        number: "{8e993c34-fdd6-432c-967e-f995d888777f}";
    };
    ["@mozilla.org/content-permission/prompt;1"]: {
        name: "@mozilla.org/content-permission/prompt;1";
        number: "{42f3c238-e8e8-4015-9ca2-148723a8afcf}";
    };
    ["@mozilla.org/push/Service;1"]: {
        name: "@mozilla.org/push/Service;1";
        number: "{a54d84d7-98a4-4fec-b664-e42e512ae9cc}";
    };
    ["@mozilla.org/parent/colorpicker;1"]: {
        name: "@mozilla.org/parent/colorpicker;1";
        number: "{fc4bec74-ddd0-4ea8-9a66-9a5081258e32}";
    };
    ["@mozilla.org/parent/filepicker;1"]: {
        name: "@mozilla.org/parent/filepicker;1";
        number: "{25fdbae6-f684-4bf0-b773-ff2b7a6273c8}";
    };
    ["@mozilla.org/sharepicker;1"]: {
        name: "@mozilla.org/sharepicker;1";
        number: "{1201d357-8417-4926-a694-e6408fbedcf8}";
    };
    ["@mozilla.org/login-manager/prompter;1"]: {
        name: "@mozilla.org/login-manager/prompter;1";
        number: "{3d765750-1c3d-11ea-aaef-0800200c9a66}";
    };
    ["@mozilla.org/uriloader/external-helper-app-service;1"]: {
        createInstance(req: CiType["nsIGeckoViewExternalAppService"]): CiMap["nsIGeckoViewExternalAppService"];
        createInstance(req: CiType["GeckoViewExternalAppService"]): CiMap["GeckoViewExternalAppService"];
        name: "@mozilla.org/uriloader/external-helper-app-service;1";
        number: "{91455c77-64a1-4c37-be00-f94eb9c7b8e1}";
        private typeName: "GeckoViewExternalAppService";
        private interfaceName: "GeckoViewExternalAppService";
    };
    ["@mozilla.org/network/protocol;1?name=content"]: {
        createInstance(req: CiType["nsIGeckoViewContentProtocolHandler"]): CiMap["nsIGeckoViewContentProtocolHandler"];
        createInstance(req: CiType["GeckoViewContentProtocolHandler"]): CiMap["GeckoViewContentProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=content";
        number: "{a8f4582e-4b47-4e06-970d-b94b76977bf7}";
        private typeName: "GeckoViewContentProtocolHandler";
        private interfaceName: "GeckoViewContentProtocolHandler";
    };
    ["@mozilla.org/browser/history;1"]: {
        getService(): unknown;
        name: "@mozilla.org/browser/history;1";
        number: "{0937a705-91a6-417a-8292-b22eb10da86c}";
        private typeName: "GeckoViewHistory";
        private interfaceName: "GeckoViewHistory";
    };
    ["@mozilla.org/libjar/zip-reader;1"]: {
        createInstance(req: CiType["nsIJAR"]): CiMap["nsIJAR"];
        name: "@mozilla.org/libjar/zip-reader;1";
        number: "{88e2fd0b-f7f4-480c-9483-7846b00e8dad}";
        private typeName: "nsJAR";
        private interfaceName: "nsIJAR";
    };
    ["@mozilla.org/network/protocol;1?name=jar"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=jar";
        number: "{c7e410d4-85f2-11d3-9f63-006008a6efe9}";
        private typeName: "nsJARProtocolHandler";
        private interfaceName: "nsIJARProtocolHandler";
    };
    ["@mozilla.org/libjar/zip-reader-cache;1"]: {
        createInstance(req: CiType["nsIZipReaderCache"]): CiMap["nsIZipReaderCache"];
        name: "@mozilla.org/libjar/zip-reader-cache;1";
        number: "{608b7f6f-4b60-40d6-87ed-d933bf53d8c1}";
        private typeName: "nsZipReaderCache";
        private interfaceName: "nsIZipReaderCache";
    };
    ["@mozilla.org/streamconv;1?from=uncompressed&to=deflate"]: {
        createInstance(req: CiType["nsIDeflateConverter"]): CiMap["nsIDeflateConverter"];
        name: "@mozilla.org/streamconv;1?from=uncompressed&to=deflate";
        number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
        private typeName: "nsDeflateConverter";
        private interfaceName: "nsIDeflateConverter";
    };
    ["@mozilla.org/streamconv;1?from=uncompressed&to=gzip"]: {
        createInstance(req: CiType["nsIDeflateConverter"]): CiMap["nsIDeflateConverter"];
        name: "@mozilla.org/streamconv;1?from=uncompressed&to=gzip";
        number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
        private typeName: "nsDeflateConverter";
        private interfaceName: "nsIDeflateConverter";
    };
    ["@mozilla.org/streamconv;1?from=uncompressed&to=rawdeflate"]: {
        createInstance(req: CiType["nsIDeflateConverter"]): CiMap["nsIDeflateConverter"];
        name: "@mozilla.org/streamconv;1?from=uncompressed&to=rawdeflate";
        number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
        private typeName: "nsDeflateConverter";
        private interfaceName: "nsIDeflateConverter";
    };
    ["@mozilla.org/streamconv;1?from=uncompressed&to=x-gzip"]: {
        createInstance(req: CiType["nsIDeflateConverter"]): CiMap["nsIDeflateConverter"];
        name: "@mozilla.org/streamconv;1?from=uncompressed&to=x-gzip";
        number: "{461cd5dd-73c6-47a4-8cc3-603b37d84a61}";
        private typeName: "nsDeflateConverter";
        private interfaceName: "nsIDeflateConverter";
    };
    ["@mozilla.org/zipwriter;1"]: {
        createInstance(req: CiType["nsIZipWriter"]): CiMap["nsIZipWriter"];
        name: "@mozilla.org/zipwriter;1";
        number: "{430d416c-a722-4ad1-be98-d9a445f85e3f}";
        private typeName: "nsZipWriter";
        private interfaceName: "nsIZipWriter";
    };
    ["@mozilla.org/preferences-service;1"]: {
        getService(): nsIPrefServiceType;
        name: "@mozilla.org/preferences-service;1";
        number: "{91ca2441-050f-4f7c-9df8-75b40ea40156}";
        private typeName: "mozilla::Preferences";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/pref-localizedstring;1"]: {
        createInstance(req: CiType["nsIPrefLocalizedString"]): CiMap["nsIPrefLocalizedString"];
        name: "@mozilla.org/pref-localizedstring;1";
        number: "{064d9cee-1dd2-11b2-83e3-d25ab0193c26}";
        private typeName: "nsPrefLocalizedString";
        private interfaceName: "nsIPrefLocalizedString";
    };
    ["@mozilla.org/io/arraybuffer-input-stream;1"]: {
        createInstance(req: CiType["nsIArrayBufferInputStream"]): CiMap["nsIArrayBufferInputStream"];
        createInstance(req: CiType["ArrayBufferInputStream"]): CiMap["ArrayBufferInputStream"];
        name: "@mozilla.org/io/arraybuffer-input-stream;1";
        number: "{3014dde6-aa1c-41db-87d0-48764a3710f6}";
        private typeName: "ArrayBufferInputStream";
        private interfaceName: "ArrayBufferInputStream";
    };
    ["@mozilla.org/load-context-info-factory;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        createInstance(req: CiType["nsILoadContextInfoFactory"]): CiMap["nsILoadContextInfoFactory"];
        name: "@mozilla.org/load-context-info-factory;1";
        number: "{62d4b190-3642-4450-b019-d1c1fba56025}";
        private typeName: "mozilla::net::LoadContextInfoFactory";
        private interfaceName: "net";
    };
    ["@mozilla.org/netwerk/cache-storage-service;1"]: {
        getService(): nsICacheStorageServiceType;
        name: "@mozilla.org/netwerk/cache-storage-service;1";
        number: "{ea70b098-5014-4e21-aee1-75e6b2c4b8e0}";
        private typeName: "mozilla::net::CacheStorageService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/cache-storage-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/cache-storage-service;1";
        number: "{ea70b098-5014-4e21-aee1-75e6b2c4b8e0}";
        private typeName: "mozilla::net::CacheStorageService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/async-stream-copier;1"]: {
        createInstance(req: CiType["nsIAsyncStreamCopier"]): CiMap["nsIAsyncStreamCopier"];
        name: "@mozilla.org/network/async-stream-copier;1";
        number: "{e746a8b1-c97a-4fc5-baa4-66607521bd08}";
        private typeName: "nsAsyncStreamCopier";
        private interfaceName: "nsIAsyncStreamCopier";
    };
    ["@mozilla.org/network/atomic-file-output-stream;1"]: {
        createInstance(req: CiType["nsIAtomicFileOutputStream"]): CiMap["nsIAtomicFileOutputStream"];
        name: "@mozilla.org/network/atomic-file-output-stream;1";
        number: "{6eae857e-4ba9-11e3-9b39-b4036188709b}";
        private typeName: "nsAtomicFileOutputStream";
        private interfaceName: "nsIAtomicFileOutputStream";
    };
    ["@mozilla.org/network/background-file-saver;1?mode=outputstream"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/background-file-saver;1?mode=outputstream";
        number: "{62147d1e-ef6a-40e8-aaf8-d039f5caaa81}";
        private typeName: "mozilla::net::BackgroundFileSaverOutputStream";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/background-file-saver;1?mode=streamlistener"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/background-file-saver;1?mode=streamlistener";
        number: "{208de7fc-a781-4031-bbae-cc0de539f61a}";
        private typeName: "mozilla::net::BackgroundFileSaverStreamListener";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/binary-detector;1"]: {
        name: "@mozilla.org/network/binary-detector;1";
        number: "{a2027ec6-ba0d-4c72-805d-148233f5f33c}";
        private interfaceName: "CreateNewBinaryDetectorFactory";
    };
    ["@mozilla.org/network/buffered-input-stream;1"]: {
        name: "@mozilla.org/network/buffered-input-stream;1";
        number: "{9226888e-da08-11d3-8cda-0060b0fc14a3}";
        private interfaceName: "nsIBufferedInputStream";
    };
    ["@mozilla.org/network/buffered-output-stream;1"]: {
        name: "@mozilla.org/network/buffered-output-stream;1";
        number: "{9868b4ce-da08-11d3-8cda-0060b0fc14a3}";
        private interfaceName: "nsIBufferedOutputStream";
    };
    ["@mozilla.org/network/captive-portal-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/captive-portal-service;1";
        number: "{bdbe0555-fc3d-4f7b-9205-c309ceb2d641}";
        private typeName: "nsICaptivePortalService";
        private interfaceName: "nsIICaptivePortalService";
    };
    ["@mozilla.org/network/dashboard;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/dashboard;1";
        number: "{c79eb3c6-091a-45a6-8544-5a8d1ab79537}";
        private typeName: "mozilla::net::Dashboard";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/dns-service;1"]: {
        getService(): nsIDNSServiceType;
        name: "@mozilla.org/network/dns-service;1";
        number: "{b0ff4572-dae4-4bef-a092-83c1b88f6be9}";
        private typeName: "nsIDNSService";
        private interfaceName: "nsIIDNSService";
    };
    ["@mozilla.org/network/native-dns-override;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/native-dns-override;1";
        number: "{4ffae79e-57bd-4d7a-a0c9-0045a17b3615}";
        private typeName: "nsINativeDNSResolverOverride";
        private interfaceName: "nsIINativeDNSResolverOverride";
    };
    ["@mozilla.org/network/downloader;1"]: {
        createInstance(req: CiType["nsIDownloader"]): CiMap["nsIDownloader"];
        name: "@mozilla.org/network/downloader;1";
        number: "{510a86bb-6019-4ed1-bb4f-965cffd23ece}";
        private typeName: "nsDownloader";
        private interfaceName: "nsIDownloader";
    };
    ["@mozilla.org/network/effective-tld-service;1"]: {
        getService(): nsIEffectiveTLDServiceType;
        name: "@mozilla.org/network/effective-tld-service;1";
        number: "{cb9abbae-66b6-4609-8594-5c4ff300888e}";
        private typeName: "nsEffectiveTLDService";
        private interfaceName: "nsIEffectiveTLDService";
    };
    ["@mozilla.org/network/file-input-stream;1"]: {
        name: "@mozilla.org/network/file-input-stream;1";
        number: "{be9a53ae-c7e9-11d3-8cda-0060b0fc14a3}";
        private interfaceName: "nsIFileInputStream";
    };
    ["@mozilla.org/network/file-output-stream;1"]: {
        name: "@mozilla.org/network/file-output-stream;1";
        number: "{c272fee0-c7e9-11d3-8cda-0060b0fc14a3}";
        private interfaceName: "nsIFileOutputStream";
    };
    ["@mozilla.org/network/file-random-access-stream;1"]: {
        name: "@mozilla.org/network/file-random-access-stream;1";
        number: "{648705e9-757a-4d4b-a5bF-0248e512c309}";
        private interfaceName: "nsIFileRandomAccessStream";
    };
    ["@mozilla.org/network/http-activity-distributor;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/http-activity-distributor;1";
        number: "{15629ada-a41c-4a09-961f-6553cd60b1a2}";
        private typeName: "mozilla::net::nsHttpActivityDistributor";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/http-auth-manager;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/http-auth-manager;1";
        number: "{36b63ef3-e0fa-4c49-9fd4-e065e85568f4}";
        private typeName: "mozilla::net::nsHttpAuthManager";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/idn-service;1"]: {
        createInstance(req: CiType["nsIIDNService"]): CiMap["nsIIDNService"];
        name: "@mozilla.org/network/idn-service;1";
        number: "{62b778a6-bce3-456b-8c31-2865fbb68c91}";
        private typeName: "nsIDNService";
        private interfaceName: "nsIIDNService";
    };
    ["@mozilla.org/network/incremental-download;1"]: {
        name: "@mozilla.org/network/incremental-download;1";
        number: "{a62af1ba-79b3-4896-8aaf-b148bfce4280}";
        private interfaceName: "net_NewIncrementalDownload";
    };
    ["@mozilla.org/network/incremental-stream-loader;1"]: {
        name: "@mozilla.org/network/incremental-stream-loader;1";
        number: "{5d6352a3-b9c3-4fa3-87aa-b2a3c6e5a501}";
        private interfaceName: "nsIIncrementalStreamLoader";
    };
    ["@mozilla.org/network/input-stream-channel;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/input-stream-channel;1";
        number: "{6ddb050c-0d04-11d4-986e-00c04fa0cf4a}";
        private typeName: "mozilla::net::nsInputStreamChannel";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/input-stream-pump;1"]: {
        createInstance(req: CiType["nsIInputStreamPump"]): CiMap["nsIInputStreamPump"];
        name: "@mozilla.org/network/input-stream-pump;1";
        number: "{ccd0e960-7947-4635-b70e-4c661b63d675}";
        private typeName: "nsInputStreamPump";
        private interfaceName: "nsIInputStreamPump";
    };
    ["@mozilla.org/network/io-service;1"]: {
        getService(): nsIIOServiceType;
        name: "@mozilla.org/network/io-service;1";
        number: "{9ac9e770-18bc-11d3-9337-00104ba0fd40}";
        private typeName: "mozilla::net::nsIOService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/util;1"]: {
        getService(): nsISpeculativeConnectType;
        name: "@mozilla.org/network/util;1";
        number: "{9ac9e770-18bc-11d3-9337-00104ba0fd40}";
        private typeName: "mozilla::net::nsIOService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/load-group;1"]: {
        name: "@mozilla.org/network/load-group;1";
        number: "{e1c61582-2a84-11d3-8cce-0060b0fc14a3}";
        private interfaceName: "nsILoadGroupConstructor";
    };
    ["@mozilla.org/network/mime-hdrparam;1"]: {
        createInstance(req: CiType["nsIMIMEHeaderParamImpl"]): CiMap["nsIMIMEHeaderParamImpl"];
        name: "@mozilla.org/network/mime-hdrparam;1";
        number: "{1f4dbcf7-245c-4c8c-943d-8a1da0495e8a}";
        private typeName: "nsMIMEHeaderParamImpl";
        private interfaceName: "nsIMIMEHeaderParamImpl";
    };
    ["@mozilla.org/network/mime-input-stream;1"]: {
        name: "@mozilla.org/network/mime-input-stream;1";
        number: "{58a1c31c-1dd2-11b2-a3f6-d36949d48268}";
        private interfaceName: "nsIMIMEInputStreamConstructor";
    };
    ["@mozilla.org/network/network-connectivity-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/network-connectivity-service;1";
        number: "{2693457e-3ba5-4455-991f-5350946adb12}";
        private typeName: "nsINetworkConnectivityService";
        private interfaceName: "nsIINetworkConnectivityService";
    };
    ["@mozilla.org/network/predictor;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/predictor;1";
        number: "{969adfdf-7221-4419-aecf-05f8faf00c9b}";
        private interfaceName: "Predictor";
    };
    ["@mozilla.org/network/protocol-proxy-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol-proxy-service;1";
        number: "{e9b301c0-e0e4-11d3-a1a8-0050041caf44}";
        private typeName: "mozilla::net::nsProtocolProxyService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol/about;1?what=blank"]: {
        name: "@mozilla.org/network/protocol/about;1?what=blank";
        number: "{3decd6c8-30ef-11d3-8cd0-0060b0fc14a3}";
        private interfaceName: "nsIAboutBlank";
    };
    ["@mozilla.org/network/protocol/about;1?what=cache"]: {
        name: "@mozilla.org/network/protocol/about;1?what=cache";
        number: "{9158c470-86e4-11d4-9be2-00e09872a416}";
        private interfaceName: "nsIAboutCache";
    };
    ["@mozilla.org/network/protocol/about;1?what=cache-entry"]: {
        createInstance(req: CiType["nsIAboutCacheEntry"]): CiMap["nsIAboutCacheEntry"];
        name: "@mozilla.org/network/protocol/about;1?what=cache-entry";
        number: "{7fa5237d-b0eb-438f-9e50-ca0166e63788}";
        private typeName: "nsAboutCacheEntry";
        private interfaceName: "nsIAboutCacheEntry";
    };
    ["@mozilla.org/network/protocol;1?name=about"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=about";
        number: "{9e3b6c90-2f75-11d3-8cd0-0060b0fc14a3}";
        private typeName: "mozilla::net::nsAboutProtocolHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=data"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=data";
        number: "{b6ed3030-6183-11d3-a178-0050041caf44}";
        private interfaceName: "nsIDataHandler";
    };
    ["@mozilla.org/network/protocol;1?name=file"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=file";
        number: "{fbc81170-1f69-11d3-9344-00104ba0fd40}";
        private typeName: "nsFileProtocolHandler";
        private interfaceName: "nsIFileProtocolHandler";
    };
    ["@mozilla.org/network/protocol;1?name=http"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=http";
        number: "{4f47e42e-4d23-4dd3-bfda-eb29255e9ea3}";
        private typeName: "mozilla::net::nsHttpHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=https"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=https";
        number: "{dccbe7e4-7750-466b-a557-5ea36c8ff24e}";
        private typeName: "mozilla::net::nsHttpsHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=moz-extension"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=moz-extension";
        number: "{aea16cd0-f020-4138-b068-0716c4a15b5a}";
        private typeName: "mozilla::net::ExtensionProtocolHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=moz-page-thumb"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=moz-page-thumb";
        number: "{450a2b55-620a-44b3-9f67-839b3b0c329c}";
        private typeName: "mozilla::net::PageThumbProtocolHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=moz-safe-about"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=moz-safe-about";
        number: "{1423e739-782c-4081-b5d8-fe6fba68c0ef}";
        private typeName: "mozilla::net::nsSafeAboutProtocolHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=resource"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=resource";
        number: "{e64f152a-9f07-11d3-8cda-0060b0fc14a3}";
        private typeName: "nsResProtocolHandler";
        private interfaceName: "nsIResProtocolHandler";
    };
    ["@mozilla.org/network/protocol;1?name=view-source"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=view-source";
        number: "{9c7ec5d1-23f9-11d5-aea8-8fcc0793e97f}";
        private typeName: "mozilla::net::nsViewSourceHandler";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=ws"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=ws";
        number: "{dc01db59-a513-4c90-824b-085cce06c0aa}";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=wss"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=wss";
        number: "{dc01dbbb-a5bb-4cbb-82bb-085cce06c0bb}";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/safe-file-output-stream;1"]: {
        createInstance(req: CiType["nsISafeFileOutputStream"]): CiMap["nsISafeFileOutputStream"];
        name: "@mozilla.org/network/safe-file-output-stream;1";
        number: "{a181af0d-68b8-4308-94db-d4f859058215}";
        private typeName: "nsSafeFileOutputStream";
        private interfaceName: "nsISafeFileOutputStream";
    };
    ["@mozilla.org/network/serialization-helper;1"]: {
        createInstance(req: CiType["nsISerializationHelper"]): CiMap["nsISerializationHelper"];
        name: "@mozilla.org/network/serialization-helper;1";
        number: "{d6ef593d-a429-4b14-a887-d9e2f765d9ed}";
        private typeName: "nsSerializationHelper";
        private interfaceName: "nsISerializationHelper";
    };
    ["@mozilla.org/network/server-socket;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/server-socket;1";
        number: "{2ec62893-3b35-48fa-ab1d-5e68a9f45f08}";
        private typeName: "mozilla::net::nsServerSocket";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/simple-stream-listener;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/simple-stream-listener;1";
        number: "{fb8cbf4e-4701-4ba1-b1d6-5388e041fb67}";
        private typeName: "mozilla::net::nsSimpleStreamListener";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/simple-uri-mutator;1"]: {
        createInstance(req: CiType["nsISimpleURI"]): CiMap["nsISimpleURI"];
        name: "@mozilla.org/network/simple-uri-mutator;1";
        number: "{2be14592-28d4-4a83-8fe9-08e778849f6e}";
        private typeName: "mozilla::net::nsSimpleURI::Mutator";
        private interfaceName: "nsISimpleURI";
    };
    ["@mozilla.org/network/default-uri-mutator;1"]: {
        createInstance(req: CiType["DefaultURI"]): CiMap["DefaultURI"];
        name: "@mozilla.org/network/default-uri-mutator;1";
        number: "{04445aa0-fd27-4c99-bd41-6be6318ae92c}";
        private typeName: "mozilla::net::DefaultURI::Mutator";
        private interfaceName: "DefaultURI";
    };
    ["@mozilla.org/network/socket-transport-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/network/socket-transport-service;1";
        number: "{ad56b25f-e6bb-4db3-9f7b-5b7db33fd2b1}";
        private typeName: "mozilla::net::nsSocketTransportService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/standard-url-mutator;1"]: {
        createInstance(req: CiType["nsIStandardURL"]): CiMap["nsIStandardURL"];
        name: "@mozilla.org/network/standard-url-mutator;1";
        number: "{ce7d7da0-fb28-44a3-8c7b-000c165918f4}";
        private typeName: "mozilla::net::nsStandardURL::Mutator";
        private interfaceName: "nsIStandardURL";
    };
    ["@mozilla.org/network/stream-listener-tee;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/stream-listener-tee;1";
        number: "{831f8f13-7aa8-485f-b02e-77c881cc5773}";
        private typeName: "mozilla::net::nsStreamListenerTee";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/stream-loader;1"]: {
        name: "@mozilla.org/network/stream-loader;1";
        number: "{9879908a-2972-40c0-890b-a91dd7dfb954}";
        private interfaceName: "nsIStreamLoader";
    };
    ["@mozilla.org/network/stream-transport-service;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/stream-transport-service;1";
        number: "{0885d4f8-f7b8-4cda-902e-94ba38bc256e}";
        private typeName: "mozilla::net::nsStreamTransportService";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/throttlequeue;1"]: {
        createInstance(req: CiType["nsIIInputChannelThrottleQueue"]): CiMap["nsIIInputChannelThrottleQueue"];
        name: "@mozilla.org/network/throttlequeue;1";
        number: "{4c39159c-cd90-4dd3-97a7-06af5e6d84c4}";
        private typeName: "nsIInputChannelThrottleQueue";
        private interfaceName: "nsIIInputChannelThrottleQueue";
    };
    ["@mozilla.org/network/tls-server-socket;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/tls-server-socket;1";
        number: "{1813cbb4-c98e-4622-8c7d-839167f3f272}";
        private typeName: "mozilla::net::TLSServerSocket";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/udp-socket;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/network/udp-socket;1";
        number: "{c9f74572-7b8e-4fec-bb4a-03c0d3021bd6}";
        private typeName: "mozilla::net::nsUDPSocket";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/url-parser;1?auth=maybe"]: {
        createInstance(req: CiType["nsIStdURLParser"]): CiMap["nsIStdURLParser"];
        name: "@mozilla.org/network/url-parser;1?auth=maybe";
        number: "{ff41913b-546a-4bff-9201-dc9b2c032eba}";
        private typeName: "nsStdURLParser";
        private interfaceName: "nsIStdURLParser";
    };
    ["@mozilla.org/network/url-parser;1?auth=no"]: {
        createInstance(req: CiType["nsINoAuthURLParser"]): CiMap["nsINoAuthURLParser"];
        name: "@mozilla.org/network/url-parser;1?auth=no";
        number: "{78804a84-8173-42b6-bb94-789f0816a810}";
        private typeName: "nsNoAuthURLParser";
        private interfaceName: "nsINoAuthURLParser";
    };
    ["@mozilla.org/network/url-parser;1?auth=yes"]: {
        createInstance(req: CiType["nsIAuthURLParser"]): CiMap["nsIAuthURLParser"];
        name: "@mozilla.org/network/url-parser;1?auth=yes";
        number: "{275d800e-3f60-4896-adb7-d7f390ce0e42}";
        private typeName: "nsAuthURLParser";
        private interfaceName: "nsIAuthURLParser";
    };
    ["@mozilla.org/streamConverters;1"]: {
        name: "@mozilla.org/streamConverters;1";
        number: "{892ffeb0-3f80-11d3-a16c-0050041caf44}";
        private interfaceName: "CreateNewStreamConvServiceFactory";
    };
    ["@mozilla.org/streamconv;1?from=application/http-index-format&to=text/html"]: {
        name: "@mozilla.org/streamconv;1?from=application/http-index-format&to=text/html";
        number: "{cf0f71fd-fafd-4e2b-9fdc-134d972e16e2}";
        private interfaceName: "nsIIndexedToHTML";
    };
    ["@mozilla.org/streamconv;1?from=application/x-unknown-content-type&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=application/x-unknown-content-type&to=*/*";
        number: "{7d7008a0-c49a-11d3-9b22-0080c7cb1080}";
        private interfaceName: "CreateNewUnknownDecoderFactory";
    };
    ["@mozilla.org/streamconv;1?from=br&to=uncompressed"]: {
        name: "@mozilla.org/streamconv;1?from=br&to=uncompressed";
        number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
        private interfaceName: "CreateNewHTTPCompressConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=compress&to=uncompressed"]: {
        name: "@mozilla.org/streamconv;1?from=compress&to=uncompressed";
        number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
        private interfaceName: "CreateNewHTTPCompressConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=deflate&to=uncompressed"]: {
        name: "@mozilla.org/streamconv;1?from=deflate&to=uncompressed";
        number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
        private interfaceName: "CreateNewHTTPCompressConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=gzip&to=uncompressed"]: {
        name: "@mozilla.org/streamconv;1?from=gzip&to=uncompressed";
        number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
        private interfaceName: "CreateNewHTTPCompressConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=x-compress&to=uncompressed"]: {
        name: "@mozilla.org/streamconv;1?from=x-compress&to=uncompressed";
        number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
        private interfaceName: "CreateNewHTTPCompressConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=x-gzip&to=uncompressed"]: {
        name: "@mozilla.org/streamconv;1?from=x-gzip&to=uncompressed";
        number: "{66230b2b-17fa-4bd3-abf4-07986151022d}";
        private interfaceName: "CreateNewHTTPCompressConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=multipart/byteranges&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=multipart/byteranges&to=*/*";
        number: "{7584ce90-5b25-11d3-a175-0050041caf44}";
        private interfaceName: "CreateNewMultiMixedConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=multipart/mixed&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=multipart/mixed&to=*/*";
        number: "{7584ce90-5b25-11d3-a175-0050041caf44}";
        private interfaceName: "CreateNewMultiMixedConvFactory";
    };
    ["@mozilla.org/streamconv;1?from=multipart/x-mixed-replace&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=multipart/x-mixed-replace&to=*/*";
        number: "{7584ce90-5b25-11d3-a175-0050041caf44}";
        private interfaceName: "CreateNewMultiMixedConvFactory";
    };
    ["@mozilla.org/txttohtmlconv;1"]: {
        name: "@mozilla.org/txttohtmlconv;1";
        number: "{77c0e42a-1dd2-11b2-8ebf-edc6606f2f4b}";
        private interfaceName: "CreateNewTXTToHTMLConvFactory";
    };
    ["@mozilla.org/cookieService;1"]: {
        getService(): nsICookieServiceType;
        name: "@mozilla.org/cookieService;1";
        number: "{c375fa80-150f-11d6-a618-0010a401eb10}";
        private typeName: "nsICookieService";
        private interfaceName: "nsIICookieService";
    };
    ["@mozilla.org/cookiemanager;1"]: {
        getService(): nsICookieManagerType;
        name: "@mozilla.org/cookiemanager;1";
        number: "{c375fa80-150f-11d6-a618-0010a401eb10}";
        private typeName: "nsICookieService";
        private interfaceName: "nsIICookieService";
    };
    ["@mozilla.org/http-sfv-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/http-sfv-service;1";
        number: "{e1676f84-e6e5-45d0-a4bf-d9905efc5b2e}";
    };
    ["@mozilla.org/cookieJarSettings;1"]: {
        createInstance(req: CiType["nsIICookieJarSettings"]): CiMap["nsIICookieJarSettings"];
        name: "@mozilla.org/cookieJarSettings;1";
        number: "{4ce234f1-52e8-47a9-8c8d-b02f815733c7}";
        private typeName: "nsICookieJarSettings";
        private interfaceName: "nsIICookieJarSettings";
    };
    ["@mozilla.org/wifi/monitor;1"]: {
        getService(): unknown;
        name: "@mozilla.org/wifi/monitor;1";
        number: "{3ff8fb9f-ee63-48df-89f0-dace0242fd82}";
        private typeName: "nsWifiMonitor";
        private interfaceName: "nsIWifiMonitor";
    };
    ["@mozilla.org/net/CachePurgeLock;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        name: "@mozilla.org/net/CachePurgeLock;1";
        number: "{72da39cc-0b9b-4fff-8ff9-d3b9a41d0dc4}";
        private typeName: "mozilla::net::CachePurgeLock";
        private interfaceName: "net";
    };
    ["@mozilla.org/network/protocol;1?name=moz-gio"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=moz-gio";
        number: "{ee706783-3af8-4d19-9e84-e2ebfe213480}";
        private typeName: "nsGIOProtocolHandler";
        private interfaceName: "nsIGIOProtocolHandler";
    };
    ["@mozilla.org/network/well-known-opportunistic-utils;1"]: {
        name: "@mozilla.org/network/well-known-opportunistic-utils;1";
        number: "{b4f96c89-5238-450c-8bda-e12c26f1d150}";
    };
    ["@mozilla.org/network/binary-http;1"]: {
        name: "@mozilla.org/network/binary-http;1";
        number: "{b43b3f73-8160-4ab2-9f5d-4129a9708081}";
        private interfaceName: "binary_http_consItructor";
    };
    ["@mozilla.org/network/oblivious-http;1"]: {
        name: "@mozilla.org/network/oblivious-http;1";
        number: "{d581149e-3319-4563-b95e-46c64af5c4e8}";
        private interfaceName: "oblivious_http_consItructor";
    };
    ["@mozilla.org/network/oblivious-http-service;1"]: {
        createInstance(req: CiType["net"]): CiMap["net"];
        createInstance(req: CiType["nsIObliviousHttpService"]): CiMap["nsIObliviousHttpService"];
        name: "@mozilla.org/network/oblivious-http-service;1";
        number: "{b1f08d56-fca6-4290-9500-d5168dc9d8c3}";
        private typeName: "mozilla::net::ObliviousHttpService";
        private interfaceName: "net";
    };
    ["@mozilla.org/url-classifier/channel-classifier-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/url-classifier/channel-classifier-service;1";
        number: "{7a6da992-dbce-4943-b463-5a2dd011fa1a}";
        private typeName: "nsIChannelClassifierService";
        private interfaceName: "nsIIChannelClassifierService";
    };
    ["@mozilla.org/url-classifier/exception-list-service;1"]: {
        name: "@mozilla.org/url-classifier/exception-list-service;1";
        number: "{b9f4fd03-9d87-4bfd-9958-85a821750ddc}";
    };
    ["@mozilla.org/remote/agent;1"]: {
        name: "@mozilla.org/remote/agent;1";
        number: "{8f685a9d-8181-46d6-a71d-869289099c6d}";
    };
    ["@mozilla.org/remote/marionette;1"]: {
        name: "@mozilla.org/remote/marionette;1";
        number: "{786a1369-dca5-4adc-8486-33d23c88010a}";
    };
    ["@mozilla.org/nsCertificateDialogs;1"]: {
        createInstance(req: CiType["nsINSSDialogs"]): CiMap["nsINSSDialogs"];
        name: "@mozilla.org/nsCertificateDialogs;1";
        number: "{518e071f-1dd2-11b2-937e-c45f14def778}";
        private typeName: "nsNSSDialogs";
        private interfaceName: "nsINSSDialogs";
    };
    ["@mozilla.org/nsTokenPasswordDialogs;1"]: {
        createInstance(req: CiType["nsINSSDialogs"]): CiMap["nsINSSDialogs"];
        name: "@mozilla.org/nsTokenPasswordDialogs;1";
        number: "{518e071f-1dd2-11b2-937e-c45f14def778}";
        private typeName: "nsNSSDialogs";
        private interfaceName: "nsINSSDialogs";
    };
    ["@mozilla.org/psm;1"]: {
        createInstance(req: CiType["nsINSSComponent"]): CiMap["nsINSSComponent"];
        name: "@mozilla.org/psm;1";
        number: "{4cb64dfd-ca98-4e24-befd-0d9285a33bcb}";
        private typeName: "nsNSSComponent";
        private interfaceName: "nsINSSComponent";
    };
    ["@mozilla.org/nss_errors_service;1"]: {
        createInstance(req: CiType["psm"]): CiMap["psm"];
        name: "@mozilla.org/nss_errors_service;1";
        number: "{9ef18451-a157-4d17-8132-47afef213689}";
        private typeName: "mozilla::psm::NSSErrorsService";
        private interfaceName: "psm";
    };
    ["@mozilla.org/security/nssversion;1"]: {
        createInstance(req: CiType["nsINSSVersion"]): CiMap["nsINSSVersion"];
        name: "@mozilla.org/security/nssversion;1";
        number: "{23ad3531-11d2-4e8e-805a-6a752e91681a}";
        private typeName: "nsNSSVersion";
        private interfaceName: "nsINSSVersion";
    };
    ["@mozilla.org/security/sdr;1"]: {
        createInstance(req: CiType["nsISecretDecoderRing"]): CiMap["nsISecretDecoderRing"];
        createInstance(req: CiType["SecretDecoderRing"]): CiMap["SecretDecoderRing"];
        name: "@mozilla.org/security/sdr;1";
        number: "{0c4f1ddc-1dd2-11b2-9d95-f2fdf113044b}";
        private typeName: "SecretDecoderRing";
        private interfaceName: "SecretDecoderRing";
    };
    ["@mozilla.org/security/pk11tokendb;1"]: {
        createInstance(req: CiType["nsIPK11TokenDB"]): CiMap["nsIPK11TokenDB"];
        name: "@mozilla.org/security/pk11tokendb;1";
        number: "{b084a2ce-1dd1-11b2-bf10-8324f8e065cc}";
        private typeName: "nsPK11TokenDB";
        private interfaceName: "nsIPK11TokenDB";
    };
    ["@mozilla.org/security/pkcs11moduledb;1"]: {
        createInstance(req: CiType["psm"]): CiMap["psm"];
        name: "@mozilla.org/security/pkcs11moduledb;1";
        number: "{ff9fbcd7-9517-4334-b97a-ceed78909974}";
        private typeName: "mozilla::psm::PKCS11ModuleDB";
        private interfaceName: "psm";
    };
    ["@mozilla.org/security/x509certdb;1"]: {
        createInstance(req: CiType["nsINSSCertificateDB"]): CiMap["nsINSSCertificateDB"];
        name: "@mozilla.org/security/x509certdb;1";
        number: "{fb0bbc5c-452e-4783-b32c-80124693d871}";
        private typeName: "nsNSSCertificateDB";
        private interfaceName: "nsINSSCertificateDB";
    };
    ["@mozilla.org/security/clientAuthRememberService;1"]: {
        createInstance(req: CiType["nsIClientAuthRememberService"]): CiMap["nsIClientAuthRememberService"];
        name: "@mozilla.org/security/clientAuthRememberService;1";
        number: "{1dbc6eb6-0972-4bdb-9dc4-acd0abf72369}";
        private typeName: "nsClientAuthRememberService";
        private interfaceName: "nsIClientAuthRememberService";
    };
    ["@mozilla.org/security/hash;1"]: {
        name: "@mozilla.org/security/hash;1";
        number: "{36a1d3b3-d886-4317-96ff-87b0005cfef7}";
        private interfaceName: "crypto_hash_consItructor";
    };
    ["@mozilla.org/security/contentsignatureverifier;1"]: {
        createInstance(req: CiType["nsIContentSignatureVerifier"]): CiMap["nsIContentSignatureVerifier"];
        createInstance(req: CiType["ContentSignatureVerifier"]): CiMap["ContentSignatureVerifier"];
        name: "@mozilla.org/security/contentsignatureverifier;1";
        number: "{45a5fe2f-c350-4b86-962d-02d5aaaa955a}";
        private typeName: "ContentSignatureVerifier";
        private interfaceName: "ContentSignatureVerifier";
    };
    ["@mozilla.org/security/certoverride;1"]: {
        createInstance(req: CiType["nsICertOverrideService"]): CiMap["nsICertOverrideService"];
        name: "@mozilla.org/security/certoverride;1";
        number: "{67ba681d-5485-4fff-952c-2ee337ffdcd6}";
        private typeName: "nsCertOverrideService";
        private interfaceName: "nsICertOverrideService";
    };
    ["@mozilla.org/security/random-generator;1"]: {
        createInstance(req: CiType["nsIRandomGenerator"]): CiMap["nsIRandomGenerator"];
        name: "@mozilla.org/security/random-generator;1";
        number: "{be65e2b7-fe46-4e0f-88e0-4b385db4d68a}";
        private typeName: "nsRandomGenerator";
        private interfaceName: "nsIRandomGenerator";
    };
    ["@mozilla.org/security/transportsecurityinfo;1"]: {
        createInstance(req: CiType["psm"]): CiMap["psm"];
        name: "@mozilla.org/security/transportsecurityinfo;1";
        number: "{16786594-0296-4471-8096-8f84497ca428}";
        private typeName: "mozilla::psm::TransportSecurityInfo";
        private interfaceName: "psm";
    };
    ["@mozilla.org/ssservice;1"]: {
        createInstance(req: CiType["nsISiteSecurityService"]): CiMap["nsISiteSecurityService"];
        name: "@mozilla.org/ssservice;1";
        number: "{16955eee-6c48-4152-9309-c42a465138a1}";
        private typeName: "nsSiteSecurityService";
        private interfaceName: "nsISiteSecurityService";
    };
    ["@mozilla.org/security/oskeystore;1"]: {
        createInstance(req: CiType["nsIOSKeyStore"]): CiMap["nsIOSKeyStore"];
        createInstance(req: CiType["OSKeyStore"]): CiMap["OSKeyStore"];
        name: "@mozilla.org/security/oskeystore;1";
        number: "{57972956-5718-42d2-8070-b3fc72212eaf}";
        private typeName: "OSKeyStore";
        private interfaceName: "OSKeyStore";
    };
    ["@mozilla.org/security/osreauthenticator;1"]: {
        createInstance(req: CiType["nsIOSReauthenticator"]): CiMap["nsIOSReauthenticator"];
        createInstance(req: CiType["OSReauthenticator"]): CiMap["OSReauthenticator"];
        name: "@mozilla.org/security/osreauthenticator;1";
        number: "{4fe082ae-6ff0-4b41-b24f-eaa664f6e46a}";
        private typeName: "OSReauthenticator";
        private interfaceName: "OSReauthenticator";
    };
    ["@mozilla.org/security/certstorage;1"]: {
        name: "@mozilla.org/security/certstorage;1";
        number: "{16e5c837-f877-4e23-9c64-eddf905e30e6}";
        private interfaceName: "cert_storage_consItructor";
    };
    ["@mozilla.org/security/publickeypinningservice;1"]: {
        createInstance(req: CiType["psm"]): CiMap["psm"];
        name: "@mozilla.org/security/publickeypinningservice;1";
        number: "{f64432b9-e8c6-41b4-b2da-8eb004344bba}";
        private typeName: "psm::PublicKeyPinningService";
        private interfaceName: "psm";
    };
    ["@mozilla.org/security/nsCertTree;1"]: {
        createInstance(req: CiType["nsICertTree"]): CiMap["nsICertTree"];
        name: "@mozilla.org/security/nsCertTree;1";
        number: "{4ea60761-31d6-491d-9e34-4b53a26c416c}";
        private typeName: "nsCertTree";
        private interfaceName: "nsICertTree";
    };
    ["@mozilla.org/security/CRLiteTimestamp;1"]: {
        createInstance(req: CiType["psm"]): CiMap["psm"];
        name: "@mozilla.org/security/CRLiteTimestamp;1";
        number: "{9676cfc4-6e84-11ec-a30d-d3cd0af86e01}";
        private typeName: "mozilla::psm::CRLiteTimestamp";
        private interfaceName: "psm";
    };
    ["@mozilla.org/security/datastoragemanager;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/security/datastoragemanager;1";
        number: "{71b49926-fd4e-43e2-ab8d-d9b049413c0b}";
        private typeName: "mozilla::DataStorageManager";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/security/ClientAuthDialogService;1"]: {
        name: "@mozilla.org/security/ClientAuthDialogService;1";
        number: "{d7d2490d-2640-411b-9f09-a538803c11ee}";
    };
    ["@mozilla.org/sandbox/sandbox-settings;1"]: {
        createInstance(req: CiType["mozIISandboxSettings"]): CiMap["mozIISandboxSettings"];
        name: "@mozilla.org/sandbox/sandbox-settings;1";
        number: "{5516303d-9007-45a0-94b9-940ef134a6e2}";
        private typeName: "mozISandboxSettings";
        private interfaceName: "mozIISandboxSettings";
    };
    ["@mozilla.org/sandbox/sandbox-test;1"]: {
        createInstance(req: CiType["mozIISandboxTest"]): CiMap["mozIISandboxTest"];
        name: "@mozilla.org/sandbox/sandbox-test;1";
        number: "{2306c118-3544-4674-9222-670b88dc07a9}";
        private typeName: "mozISandboxTest";
        private interfaceName: "mozIISandboxTest";
    };
    ["@mozilla.org/sandbox/syscall-reporter;1"]: {
        createInstance(req: CiType["mozIISandboxReporter"]): CiMap["mozIISandboxReporter"];
        name: "@mozilla.org/sandbox/syscall-reporter;1";
        number: "{5118a6f9-2493-4f97-9552-620663e03cb3}";
        private typeName: "mozISandboxReporter";
        private interfaceName: "mozIISandboxReporter";
    };
    ["@mozilla.org/appservices/logger;1"]: {
        createInstance(req: CiType["mozIIAppServicesLogger"]): CiMap["mozIIAppServicesLogger"];
        name: "@mozilla.org/appservices/logger;1";
        number: "{d2716568-f5fa-4989-91dd-e11599e932a1}";
        private typeName: "mozIAppServicesLogger";
        private interfaceName: "mozIIAppServicesLogger";
    };
    ["@mozilla.org/fxaccounts/push;1"]: {
        name: "@mozilla.org/fxaccounts/push;1";
        number: "{1b7db999-2ecd-4abf-bb95-a726896798ca}";
    };
    ["@mozilla.org/services/settings;1"]: {
        name: "@mozilla.org/services/settings;1";
        number: "{5e756573-234a-49ea-bbe4-59ec7a70657d}";
    };
    ["@mozilla.org/weave/service;1"]: {
        name: "@mozilla.org/weave/service;1";
        number: "{74b89fb0-f200-4ae8-a3ec-dd164117f6de}";
    };
    ["@mozilla.org/network/protocol/about;1?what=sync-log"]: {
        name: "@mozilla.org/network/protocol/about;1?what=sync-log";
        number: "{d28f8a0b-95da-48f4-b712-caf37097be41}";
    };
    ["@mozilla.org/startupcacheinfo;1"]: {
        createInstance(req: CiType["nsIIStartupCacheInfo"]): CiMap["nsIIStartupCacheInfo"];
        name: "@mozilla.org/startupcacheinfo;1";
        number: "{a6b2f8b0-7438-11ea-bc55-0242ac130003}";
        private typeName: "nsIStartupCacheInfo";
        private interfaceName: "nsIIStartupCacheInfo";
    };
    ["@mozilla.org/storage/service;1"]: {
        getService(): mozIStorageServiceType;
        name: "@mozilla.org/storage/service;1";
        number: "{bbbb1d61-438f-4436-92ed-8308e5830fb0}";
        private typeName: "mozilla::storage::Service";
        private interfaceName: "storage";
    };
    ["@mozilla.org/storage/vacuum;1"]: {
        getService(): unknown;
        name: "@mozilla.org/storage/vacuum;1";
        number: "{3b667ee0-d2da-4ccc-9c3d-95f2ca6a8b4c}";
        private typeName: "mozilla::storage::VacuumManager";
        private interfaceName: "storage";
    };
    ["@mozilla.org/about-thirdparty;1"]: {
        getService(): unknown;
        name: "@mozilla.org/about-thirdparty;1";
        number: "{bb6afd78-2e02-4e96-b6b9-eef8cbcdc29c}";
        private typeName: "AboutThirdParty";
        private interfaceName: "AboutThirdParty";
    };
    ["@mozilla.org/about-windowsmessages;1"]: {
        getService(): unknown;
        name: "@mozilla.org/about-windowsmessages;1";
        number: "{ba8cdb8a-9624-493d-aac4-23ee83378d7c}";
        private typeName: "AboutWindowsMessages";
        private interfaceName: "AboutWindowsMessages";
    };
    ["@mozilla.org/bounce-tracking-protection;1"]: {
        getService(): nsIBounceTrackingProtectionType;
        name: "@mozilla.org/bounce-tracking-protection;1";
        number: "{4866F748-29DA-4C10-8EAA-ED2F7851E6B1}";
        private typeName: "mozilla::BounceTrackingProtection";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/tracking-db-service;1"]: {
        name: "@mozilla.org/tracking-db-service;1";
        number: "{3c9c43b6-09eb-4ed2-9b87-e29f4221eef0}";
    };
    ["@mozilla.org/tracking-url-decoration-service;1"]: {
        name: "@mozilla.org/tracking-url-decoration-service;1";
        number: "{5874af6d-5719-4e1b-b155-ef4eae7fcb32}";
    };
    ["@mozilla.org/purge-tracker-service;1"]: {
        name: "@mozilla.org/purge-tracker-service;1";
        number: "{90d1fd17-2018-4e16-b73c-a04a26fa6dd4}";
    };
    ["@mozilla.org/partitioning/exception-list-service;1"]: {
        name: "@mozilla.org/partitioning/exception-list-service;1";
        number: "{ab94809d-33f0-4f28-af38-01efbd3baf22}";
    };
    ["@mozilla.org/content-blocking-telemetry-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/content-blocking-telemetry-service;1";
        number: "{42906796-d16a-44a1-b518-0f108ab38eba}";
        private typeName: "mozilla::ContentBlockingTelemetryService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/query-stripping-list-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/query-stripping-list-service;1";
        number: "{afff16f0-3fd2-4153-9ccd-c6d9abd879e4}";
    };
    ["@mozilla.org/url-query-string-stripper;1"]: {
        getService(): nsIURLQueryStringStripperType;
        name: "@mozilla.org/url-query-string-stripper;1";
        number: "{6b42a890-2624-4560-99c4-b25380e8cd77}";
        private typeName: "mozilla::URLQueryStringStripper";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/async-shutdown-service;1"]: {
        name: "@mozilla.org/async-shutdown-service;1";
        number: "{35c496de-a115-475d-93b5-ffa3f3ae6fe3}";
    };
    ["@mozilla.org/autocomplete/controller;1"]: {
        createInstance(req: CiType["nsIAutoCompleteController"]): CiMap["nsIAutoCompleteController"];
        name: "@mozilla.org/autocomplete/controller;1";
        number: "{f6d5ebbd-34f4-487d-9d10-3d34123e3eb9}";
        private typeName: "nsAutoCompleteController";
        private interfaceName: "nsIAutoCompleteController";
    };
    ["@mozilla.org/autocomplete/simple-result;1"]: {
        createInstance(req: CiType["nsIAutoCompleteSimpleResult"]): CiMap["nsIAutoCompleteSimpleResult"];
        name: "@mozilla.org/autocomplete/simple-result;1";
        number: "{2ee3039b-2de4-43d9-93b0-649beacff39a}";
        private typeName: "nsAutoCompleteSimpleResult";
        private interfaceName: "nsIAutoCompleteSimpleResult";
    };
    ["@mozilla.org/bhr-telemetry-service;1"]: {
        name: "@mozilla.org/bhr-telemetry-service;1";
        number: "{117c8cdf-69e6-4f31-a439-b8a654c67127}";
    };
    ["@mozilla.org/backgroundtasks;1"]: {
        getService(): unknown;
        name: "@mozilla.org/backgroundtasks;1";
        number: "{cdc33a1f-e8ae-4a4f-85d0-6ec633fe872c}";
        private typeName: "BackgroundTasks";
        private interfaceName: "BackgroundTasks";
    };
    ["@mozilla.org/backgroundtasksmanager;1"]: {
        name: "@mozilla.org/backgroundtasksmanager;1";
        number: "{4d48c536-e16f-4699-8f9c-add4f28f92f0}";
    };
    ["@mozilla.org/backgroundtasksrunner;1"]: {
        createInstance(req: CiType["nsIBackgroundTasksRunner"]): CiMap["nsIBackgroundTasksRunner"];
        createInstance(req: CiType["BackgroundTasksRunner"]): CiMap["BackgroundTasksRunner"];
        name: "@mozilla.org/backgroundtasksrunner;1";
        number: "{8cd92fce-1ec3-470a-ad09-c0de9d98497e}";
        private typeName: "BackgroundTasksRunner";
        private interfaceName: "BackgroundTasksRunner";
    };
    ["@mozilla.org/bits;1"]: {
        getService(): unknown;
        name: "@mozilla.org/bits;1";
        number: "{495d6f3d-9748-4d30-8ce5-0290c0001edf}";
    };
    ["@mozilla.org/addons/content-policy;1"]: {
        createInstance(req: CiType["nsIAddonContentPolicy"]): CiMap["nsIAddonContentPolicy"];
        createInstance(req: CiType["AddonContentPolicy"]): CiMap["AddonContentPolicy"];
        name: "@mozilla.org/addons/content-policy;1";
        number: "{c26a8241-ecf4-4aed-9f3c-f1f5c713b9a5}";
        private typeName: "AddonContentPolicy";
        private interfaceName: "AddonContentPolicy";
    };
    ["@mozilla.org/addons/addon-manager-startup;1"]: {
        getService(): unknown;
        name: "@mozilla.org/addons/addon-manager-startup;1";
        number: "{17a59a6b-92b8-42e5-bce0-ab434c7a7135}";
        private typeName: "mozilla::AddonManagerStartup";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/alert-notification;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/alert-notification;1";
        number: "{9a7b7a41-0b47-47f7-b61b-15a210d6f020}";
        private typeName: "mozilla::AlertNotification";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/reputationservice/application-reputation-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/reputationservice/application-reputation-service;1";
        number: "{d21b4c33-716f-4117-8041-2770b59ff8a6}";
        private typeName: "ApplicationReputationService";
        private interfaceName: "ApplicationReputationService";
    };
    ["@mozilla.org/toolkit/download-platform;1"]: {
        createInstance(req: CiType["nsIDownloadPlatform"]): CiMap["nsIDownloadPlatform"];
        createInstance(req: CiType["DownloadPlatform"]): CiMap["DownloadPlatform"];
        name: "@mozilla.org/toolkit/download-platform;1";
        number: "{649a14c9-fe5c-48ec-9c85-00cad9ccf32e}";
        private typeName: "DownloadPlatform";
        private interfaceName: "DownloadPlatform";
    };
    ["@mozilla.org/addons/policy-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/addons/policy-service;1";
        number: "{562de129-8338-482c-bb96-a1ff09ee53cc}";
        private typeName: "mozilla::ExtensionPolicyService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/toolkit/finalizationwitness;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/toolkit/finalizationwitness;1";
        number: "{15686f9d-483e-4361-98cd-37f1e8f1e61d}";
        private typeName: "mozilla::FinalizationWitnessService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/alerts-service;1"]: {
        createInstance(req: CiType["nsIAlertsService"]): CiMap["nsIAlertsService"];
        name: "@mozilla.org/alerts-service;1";
        number: "{a0ccaaf8-09da-44d8-b250-9ac3e93c8117}";
        private typeName: "nsAlertsService";
        private interfaceName: "nsIAlertsService";
    };
    ["@mozilla.org/toolkit/app-startup;1"]: {
        createInstance(req: CiType["nsIAppStartup"]): CiMap["nsIAppStartup"];
        name: "@mozilla.org/toolkit/app-startup;1";
        number: "{7dd4d320-c84b-4624-8d45-7bb9b2356977}";
        private typeName: "nsAppStartup";
        private interfaceName: "nsIAppStartup";
    };
    ["@mozilla.org/appshell/component/browser-status-filter;1"]: {
        createInstance(req: CiType["nsIBrowserStatusFilter"]): CiMap["nsIBrowserStatusFilter"];
        name: "@mozilla.org/appshell/component/browser-status-filter;1";
        number: "{6356aa16-7916-4215-a825-cbc2692ca87a}";
        private typeName: "nsBrowserStatusFilter";
        private interfaceName: "nsIBrowserStatusFilter";
    };
    ["@mozilla.org/find/find_service;1"]: {
        createInstance(req: CiType["nsIFindService"]): CiMap["nsIFindService"];
        name: "@mozilla.org/find/find_service;1";
        number: "{5060b803-340e-11d5-be5b-b3e063ec6a3c}";
        private typeName: "nsFindService";
        private interfaceName: "nsIFindService";
    };
    ["@mozilla.org/typeaheadfind;1"]: {
        createInstance(req: CiType["nsITypeAheadFind"]): CiMap["nsITypeAheadFind"];
        name: "@mozilla.org/typeaheadfind;1";
        number: "{e7f70966-9a37-48d7-8aeb-35998f31090e}";
        private typeName: "nsTypeAheadFind";
        private interfaceName: "nsITypeAheadFind";
    };
    ["@mozilla.org/uriclassifierservice"]: {
        createInstance(req: CiType["nsIISupports"]): CiMap["nsIISupports"];
        name: "@mozilla.org/uriclassifierservice";
        number: "{7a258022-6765-11e5-b379-b37b1f2354be}";
        private typeName: "nsISupports";
        private interfaceName: "nsIISupports";
    };
    ["@mozilla.org/url-classifier/dbservice;1"]: {
        createInstance(req: CiType["nsIISupports"]): CiMap["nsIISupports"];
        name: "@mozilla.org/url-classifier/dbservice;1";
        number: "{7a258022-6765-11e5-b379-b37b1f2354be}";
        private typeName: "nsISupports";
        private interfaceName: "nsIISupports";
    };
    ["@mozilla.org/url-classifier/prefixset;1"]: {
        createInstance(req: CiType["nsIUrlClassifierPrefixSet"]): CiMap["nsIUrlClassifierPrefixSet"];
        name: "@mozilla.org/url-classifier/prefixset;1";
        number: "{3d8579f0-75fa-4e00-ba41-38661d5b5d17}";
        private typeName: "nsUrlClassifierPrefixSet";
        private interfaceName: "nsIUrlClassifierPrefixSet";
    };
    ["@mozilla.org/url-classifier/streamupdater;1"]: {
        createInstance(req: CiType["nsIUrlClassifierStreamUpdater"]): CiMap["nsIUrlClassifierStreamUpdater"];
        name: "@mozilla.org/url-classifier/streamupdater;1";
        number: "{e1797597-f4d6-4dd3-a1e1-745ad352cd80}";
        private typeName: "nsUrlClassifierStreamUpdater";
        private interfaceName: "nsIUrlClassifierStreamUpdater";
    };
    ["@mozilla.org/url-classifier/utils;1"]: {
        createInstance(req: CiType["nsIUrlClassifierUtils"]): CiMap["nsIUrlClassifierUtils"];
        name: "@mozilla.org/url-classifier/utils;1";
        number: "{b7b2ccec-7912-4ea6-a548-b038447004bd}";
        private typeName: "nsUrlClassifierUtils";
        private interfaceName: "nsIUrlClassifierUtils";
    };
    ["@mozilla.org/updates/update-processor;1"]: {
        createInstance(req: CiType["nsIUpdateProcessor"]): CiMap["nsIUpdateProcessor"];
        name: "@mozilla.org/updates/update-processor;1";
        number: "{f3dcf644-79e8-4f59-a1bb-878454488ef9}";
        private typeName: "nsUpdateProcessor";
        private interfaceName: "nsIUpdateProcessor";
    };
    ["@mozilla.org/updates/update-sync-manager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/updates/update-sync-manager;1";
        number: "{cf4c4487-66d9-4e18-a2e9-39002245332f}";
        private typeName: "nsUpdateSyncManager";
        private interfaceName: "nsIUpdateSyncManager";
    };
    ["@mozilla.org/toolkit/shutdown-terminator;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/toolkit/shutdown-terminator;1";
        number: "{2e59cc70-f83a-412f-89d4-453885837217}";
        private typeName: "mozilla::nsTerminator";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/toolkit/captive-detector;1"]: {
        name: "@mozilla.org/toolkit/captive-detector;1";
        number: "{d9cd00ba-aa4d-47b1-8792-b1fe0cd35060}";
    };
    ["@mozilla.org/cascade-filter;1"]: {
        createInstance(req: CiType["nsIICascadeFilter"]): CiMap["nsIICascadeFilter"];
        name: "@mozilla.org/cascade-filter;1";
        number: "{c8d0b0b3-17f8-458b-9264-7b67b288fe79}";
        private typeName: "nsICascadeFilter";
        private interfaceName: "nsIICascadeFilter";
    };
    ["@mozilla.org/clear-data-service;1"]: {
        createInstance(req: CiType["nsIClearDataService"]): CiMap["nsIClearDataService"];
        name: "@mozilla.org/clear-data-service;1";
        number: "{0c06583d-7dd8-4293-b1a5-912205f779aa}";
    };
    ["@mozilla.org/toolkit/default-clh;1"]: {
        name: "@mozilla.org/toolkit/default-clh;1";
        number: "{6ebc941a-f2ff-4d56-b3b6-f7d0b9d73344}";
    };
    ["@mozilla.org/content-blocking-allow-list;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        createInstance(req: CiType["nsIContentBlockingAllowList"]): CiMap["nsIContentBlockingAllowList"];
        name: "@mozilla.org/content-blocking-allow-list;1";
        number: "{00ed5d73-9de5-42cf-868c-e739a94f6b37}";
        private typeName: "mozilla::ContentBlockingAllowList";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/contentanalysis;1"]: {
        createInstance(req: CiType["contentanalysis"]): CiMap["contentanalysis"];
        name: "@mozilla.org/contentanalysis;1";
        number: "{61497587-2bba-4a88-acd3-3fbb2cedf163}";
        private typeName: "mozilla::contentanalysis::ContentAnalysis";
        private interfaceName: "contentanalysis";
    };
    ["@mozilla.org/content-pref/service;1"]: {
        name: "@mozilla.org/content-pref/service;1";
        number: "{e3f772f3-023f-4b32-b074-36cf0fd5d414}";
    };
    ["@mozilla.org/cookie-banner-service;1"]: {
        getService(): nsICookieBannerServiceType;
        name: "@mozilla.org/cookie-banner-service;1";
        number: "{eac9cdc4-ecee-49f2-91da-7627e15c1f3c}";
        private typeName: "mozilla::nsCookieBannerService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/cookie-banner-rule;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        createInstance(req: CiType["nsICookieBannerRule"]): CiMap["nsICookieBannerRule"];
        name: "@mozilla.org/cookie-banner-rule;1";
        number: "{eb1904db-e0d1-4760-a721-db76b1ca3e94}";
        private typeName: "mozilla::nsCookieBannerRule";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/cookie-banner-list-service;1"]: {
        name: "@mozilla.org/cookie-banner-list-service;1";
        number: "{1d8d9470-97d3-4885-a108-44a5c4fb36e2}";
    };
    ["@mozilla.org/crashservice;1"]: {
        name: "@mozilla.org/crashservice;1";
        number: "{92668367-1b17-4190-86b2-1061b2179744}";
    };
    ["@mozilla.org/crashmanager;1"]: {
        name: "@mozilla.org/crashmanager;1";
        number: "{c887b6a9-a5eb-4566-a440-bebaea3e54fd}";
    };
    ["@mozilla.org/toolkit/crashmonitor;1"]: {
        name: "@mozilla.org/toolkit/crashmonitor;1";
        number: "{d9d75e86-8f17-4c57-993e-f738f0d86d42}";
    };
    ["@mozilla.org/browser/identitycredentialpromptservice;1"]: {
        name: "@mozilla.org/browser/identitycredentialpromptservice;1";
        number: "{936007db-a957-4f1d-a23d-f7d9403223e6}";
    };
    ["@mozilla.org/browser/identity-credential-storage-service;1"]: {
        getService(): nsIIdentityCredentialStorageServiceType;
        name: "@mozilla.org/browser/identity-credential-storage-service;1";
        number: "{029823d0-0448-46c5-af1f-25cd4501d0d7}";
        private typeName: "mozilla::IdentityCredentialStorageService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/jsctypes;1"]: {
        createInstance(req: CiType["ctypes"]): CiMap["ctypes"];
        name: "@mozilla.org/jsctypes;1";
        number: "{0c797702-1c60-4051-9dd7-4d7405605642}";
        private typeName: "mozilla::ctypes::Module";
        private interfaceName: "ctypes";
    };
    ["@mozilla.org/transfer;1"]: {
        name: "@mozilla.org/transfer;1";
        number: "{1b4c85df-cbdd-4bb6-b04e-613caece083c}";
    };
    ["@mozilla.org/enterprisepolicies;1"]: {
        createInstance(req: CiType["nsIEnterprisePolicies"]): CiMap["nsIEnterprisePolicies"];
        name: "@mozilla.org/enterprisepolicies;1";
        number: "{49e8d8ef-a713-492a-a3d2-5c9dad4ce2e5}";
    };
    ["@mozilla.org/extensions/child;1"]: {
        createInstance(req: CiType["extensIions"]): CiMap["extensIions"];
        name: "@mozilla.org/extensions/child;1";
        number: "{db82286d-d649-47fb-8599-ba31673a58c5}";
        private typeName: "mozilla::extensions::ExtensionsChild";
        private interfaceName: "extensIions";
    };
    ["@mozilla.org/extensions/storage/internal/sync-area;1"]: {
        createInstance(req: CiType["mozIIExtensIionStorageArea"]): CiMap["mozIIExtensIionStorageArea"];
        name: "@mozilla.org/extensions/storage/internal/sync-area;1";
        number: "{f1e424f2-67fe-4f69-a8f8-3993a71f44fa}";
        private typeName: "mozIExtensionStorageArea";
        private interfaceName: "mozIIExtensIionStorageArea";
    };
    ["@mozilla.org/extensions/storage/sync;1"]: {
        getService(): unknown;
        name: "@mozilla.org/extensions/storage/sync;1";
        number: "{5b7047b4-fe17-4661-8e13-871402bc2023}";
    };
    ["@mozilla.org/extensions/web-navigation-content;1"]: {
        createInstance(req: CiType["extensIions"]): CiMap["extensIions"];
        name: "@mozilla.org/extensions/web-navigation-content;1";
        number: "{acb22042-2b6c-427b-b550-b9f407c6fff6}";
        private typeName: "mozilla::extensions::WebNavigationContent";
        private interfaceName: "extensIions";
    };
    ["@mozilla.org/sanity-test;1"]: {
        name: "@mozilla.org/sanity-test;1";
        number: "{f3a8ca4d-4c83-456b-aee2-6a2cbf11e9bd}";
    };
    ["@mozilla.org/toolkit/glean;1"]: {
        getService(): nsIFOGType;
        name: "@mozilla.org/toolkit/glean;1";
        number: "{98d0e975-9cad-4ce3-ae2f-f878b8be6307}";
        private typeName: "mozilla::FOG";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/key-value-service;1"]: {
        name: "@mozilla.org/key-value-service;1";
        number: "{6cc1a0a8-af97-4d41-9b4a-58dcec46ebce}";
        private interfaceName: "nsIKeyValueServiceConstructor";
    };
    ["@mozilla.org/media/sniffer;1"]: {
        createInstance(req: CiType["nsIMediaSniffer"]): CiMap["nsIMediaSniffer"];
        name: "@mozilla.org/media/sniffer;1";
        number: "{3fdd6c28-5b87-4e3e-8b57-8e83c23c1a6d}";
        private typeName: "nsMediaSniffer";
        private interfaceName: "nsIMediaSniffer";
    };
    ["@mozilla.org/mozintlhelper;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/mozintlhelper;1";
        number: "{b43c96be-2b3a-4dc4-90e9-b06d34219b68}";
        private typeName: "mozilla::MozIntlHelper";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/mozintl;1"]: {
        createInstance(req: CiType["mozIMozIntl"]): CiMap["mozIMozIntl"];
        name: "@mozilla.org/mozintl;1";
        number: "{35ec195a-e8d0-4300-83af-c8a2cc84b4a3}";
    };
    ["@mozilla.org/network/protocol;1?name=moz"]: {
        name: "@mozilla.org/network/protocol;1?name=moz";
        number: "{47a45e5f-691e-4799-8686-14f8d3fc0f8c}";
    };
    ["@mozilla.org/network/protocol/about;1?what=studies"]: {
        name: "@mozilla.org/network/protocol/about;1?what=studies";
        number: "{6ab96943-a163-482c-9622-4faedc0e827f}";
    };
    ["@mozilla.org/login-manager;1"]: {
        createInstance(req: CiType["nsILoginManager"]): CiMap["nsILoginManager"];
        name: "@mozilla.org/login-manager;1";
        number: "{cb9e0de8-3598-4ed7-857b-827f011ad5d8}";
    };
    ["@mozilla.org/passwordmanager/authpromptfactory;1"]: {
        name: "@mozilla.org/passwordmanager/authpromptfactory;1";
        number: "{749e62f4-60ae-4569-a8a2-de78b649660e}";
    };
    ["@mozilla.org/login-manager/autocompletesearch;1"]: {
        name: "@mozilla.org/login-manager/autocompletesearch;1";
        number: "{2bdac17c-53f1-4896-a521-682ccdeef3a8}";
    };
    ["@mozilla.org/login-manager/authprompter;1"]: {
        name: "@mozilla.org/login-manager/authprompter;1";
        number: "{8aa66d77-1bbb-45a6-991e-b8f47751c291}";
    };
    ["@mozilla.org/login-manager/loginInfo;1"]: {
        name: "@mozilla.org/login-manager/loginInfo;1";
        number: "{0f2f347c-1e4f-40cc-8efd-792dea70a85e}";
    };
    ["@mozilla.org/login-manager/crypto/SDR;1"]: {
        name: "@mozilla.org/login-manager/crypto/SDR;1";
        number: "{dc6c2976-0f73-4f1f-b9ff-3d72b4e28309}";
    };
    ["@mozilla.org/login-manager/prompter;1"]: {
        name: "@mozilla.org/login-manager/prompter;1";
        number: "{c47ff942-9678-44a5-bc9b-05e0d676c79c}";
    };
    ["@mozilla.org/autocomplete/search;1?name=login-doorhanger-username"]: {
        name: "@mozilla.org/autocomplete/search;1?name=login-doorhanger-username";
        number: "{dc185a77-ba88-4caa-8f16-465253f7599a}";
    };
    ["@mozilla.org/autocomplete/search;1?name=login-doorhanger-password"]: {
        name: "@mozilla.org/autocomplete/search;1?name=login-doorhanger-password";
        number: "{dc185a77-ba88-4caa-8f16-465253f7599a}";
    };
    ["@mozilla.org/streamconv;1?from=application/pdf&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=application/pdf&to=*/*";
        number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
    };
    ["@mozilla.org/streamconv;1?from=application/pdf&to=text/html"]: {
        name: "@mozilla.org/streamconv;1?from=application/pdf&to=text/html";
        number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
    };
    ["@mozilla.org/streamconv;1?from=application/octet-stream&to=*/*"]: {
        name: "@mozilla.org/streamconv;1?from=application/octet-stream&to=*/*";
        number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
    };
    ["@mozilla.org/streamconv;1?from=application/octet-stream&to=text/html"]: {
        name: "@mozilla.org/streamconv;1?from=application/octet-stream&to=text/html";
        number: "{d0c5195d-e798-49d4-b1d3-9324328b2291}";
    };
    ["@mozilla.org/browser/history;1"]: {
        getService(): unknown;
        name: "@mozilla.org/browser/history;1";
        number: "{0937a705-91a6-417a-8292-b22eb10da86c}";
        private typeName: "mozilla::places::History";
        private interfaceName: "places";
    };
    ["@mozilla.org/network/protocol;1?name=moz-anno"]: {
        createInstance(req: CiType["nsIAnnoProtocolHandler"]): CiMap["nsIAnnoProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=moz-anno";
        number: "{e8b8bdb7-c96c-4d82-9c6f-2b3c585ec7ea}";
        private typeName: "nsAnnoProtocolHandler";
        private interfaceName: "nsIAnnoProtocolHandler";
    };
    ["@mozilla.org/browser/favicon-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/browser/favicon-service;1";
        number: "{984e3259-9266-49cf-b605-60b022a00756}";
        private typeName: "nsFaviconService";
        private interfaceName: "nsIFaviconService";
    };
    ["@mozilla.org/browser/nav-bookmarks-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/browser/nav-bookmarks-service;1";
        number: "{9de95a0c-39a4-4d64-9a53-17940dd7cabb}";
        private typeName: "nsNavBookmarks";
        private interfaceName: "nsINavBookmarks";
    };
    ["@mozilla.org/browser/nav-history-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/browser/nav-history-service;1";
        number: "{88cecbb7-6c63-4b3b-8cd4-84f3b8228c69}";
        private typeName: "nsNavHistory";
        private interfaceName: "nsINavHistory";
    };
    ["@mozilla.org/browser/tagging-service;1"]: {
        name: "@mozilla.org/browser/tagging-service;1";
        number: "{bbc23860-2553-479d-8b78-94d9038334f7}";
    };
    ["@mozilla.org/autocomplete/search;1?name=places-tag-autocomplete"]: {
        name: "@mozilla.org/autocomplete/search;1?name=places-tag-autocomplete";
        number: "{1dcc23b0-d4cb-11dc-9ad6-479d56d89593}";
    };
    ["@mozilla.org/places/expiration;1"]: {
        name: "@mozilla.org/places/expiration;1";
        number: "{705a423f-2f69-42f3-b9fe-1517e0dee56f}";
    };
    ["@mozilla.org/places/databaseUtilsIdleMaintenance;1"]: {
        name: "@mozilla.org/places/databaseUtilsIdleMaintenance;1";
        number: "{d38926e0-29c1-11eb-8588-0800200c9a66}";
    };
    ["@mozilla.org/network/protocol;1?name=page-icon"]: {
        getService(): unknown;
        name: "@mozilla.org/network/protocol;1?name=page-icon";
        number: "{60a1f7c6-4ff9-4a42-84d3-5a185faa6f32}";
        private typeName: "mozilla::places::PageIconProtocolHandler";
        private interfaceName: "places";
    };
    ["@mozilla.org/browser/synced-bookmarks-merger;1"]: {
        createInstance(req: CiType["mozIISyncedBookmarksMerger"]): CiMap["mozIISyncedBookmarksMerger"];
        name: "@mozilla.org/browser/synced-bookmarks-merger;1";
        number: "{7d47b41d-7cc5-4882-b293-d8f3f3b48b46}";
        private typeName: "mozISyncedBookmarksMerger";
        private interfaceName: "mozIISyncedBookmarksMerger";
    };
    ["@mozilla.org/places/previews-helper;1"]: {
        name: "@mozilla.org/places/previews-helper;1";
        number: "{bd0a4d3b-ff26-4d4d-9a62-a513e1c1bf92}";
    };
    ["@mozilla.org/places/frecency-recalculator;1"]: {
        name: "@mozilla.org/places/frecency-recalculator;1";
        number: "{1141fd31-4c1a-48eb-8f1a-2f05fad94085}";
    };
    ["@mozilla.org/main-process-singleton;1"]: {
        name: "@mozilla.org/main-process-singleton;1";
        number: "{0636a680-45cb-11e4-916c-0800200c9a66}";
    };
    ["@mozilla.org/processtools-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/processtools-service;1";
        number: "{79A13656-A472-4713-B0E1-AB39A15CF790}";
        private typeName: "nsIProcessToolsService";
        private interfaceName: "nsIIProcessToolsService";
    };
    ["@mozilla.org/network/authprompt-adapter-factory;1"]: {
        name: "@mozilla.org/network/authprompt-adapter-factory;1";
        number: "{6e134924-6c3a-4d86-81ac-69432dd971dc}";
    };
    ["@mozilla.org/prompter;1"]: {
        createInstance(req: CiType["nsIPromptService"]): CiMap["nsIPromptService"];
        name: "@mozilla.org/prompter;1";
        number: "{1c978d25-b37f-43a8-a2d6-0c7a239ead87}";
    };
    ["@mozilla.org/jsreflect;1"]: {
        createInstance(req: CiType["reflect"]): CiMap["reflect"];
        name: "@mozilla.org/jsreflect;1";
        number: "{1a817186-357a-47cd-8aea-2850d60e959e}";
        private typeName: "mozilla::reflect::Module";
        private interfaceName: "reflect";
    };
    ["@mozilla.org/rfp-service;1"]: {
        getService(): nsIRFPServiceType;
        name: "@mozilla.org/rfp-service;1";
        number: "{20093b2e-d5d5-4ce0-8355-96b8d2dc7ff5}";
        private typeName: "mozilla::nsRFPService";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/fingerprinting-override;1"]: {
        name: "@mozilla.org/fingerprinting-override;1";
        number: "{07f45442-1806-44be-9230-12eb79de9bac}";
    };
    ["@mozilla.org/fingerprinting-webcompat-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/fingerprinting-webcompat-service;1";
        number: "{e7b1da06-2594-4670-aea4-131070baca4c}";
    };
    ["@mozilla.org/satchel/form-fill-controller;1"]: {
        createInstance(req: CiType["nsIFormFillController"]): CiMap["nsIFormFillController"];
        name: "@mozilla.org/satchel/form-fill-controller;1";
        number: "{895db6c7-dbdf-40ea-9f64-b175033243dc}";
        private typeName: "nsFormFillController";
        private interfaceName: "nsIFormFillController";
    };
    ["@mozilla.org/autocomplete/search;1?name=form-history"]: {
        createInstance(req: CiType["nsIFormFillController"]): CiMap["nsIFormFillController"];
        name: "@mozilla.org/autocomplete/search;1?name=form-history";
        number: "{895db6c7-dbdf-40ea-9f64-b175033243dc}";
        private typeName: "nsFormFillController";
        private interfaceName: "nsIFormFillController";
    };
    ["@mozilla.org/satchel/form-autocomplete;1"]: {
        name: "@mozilla.org/satchel/form-autocomplete;1";
        number: "{c11c21b2-71c9-4f87-a0f8-5e13f50495fd}";
    };
    ["@mozilla.org/satchel/form-history-startup;1"]: {
        name: "@mozilla.org/satchel/form-history-startup;1";
        number: "{3a0012eb-007f-4bb8-aa81-a07385f77a25}";
    };
    ["@mozilla.org/browser/search-service;1"]: {
        createInstance(req: CiType["nsISearchService"]): CiMap["nsISearchService"];
        name: "@mozilla.org/browser/search-service;1";
        number: "{7319788a-fe93-4db3-9f39-818cf08f4256}";
    };
    ["@mozilla.org/autocomplete/search;1?name=search-autocomplete"]: {
        name: "@mozilla.org/autocomplete/search;1?name=search-autocomplete";
        number: "{aa892eb4-ffbf-477d-9f9a-06c995ae9f27}";
    };
    ["@mozilla.org/base/telemetry-startup;1"]: {
        name: "@mozilla.org/base/telemetry-startup;1";
        number: "{117b219f-92fe-4bd2-a21b-95a342a9d474}";
    };
    ["@mozilla.org/base/telemetry-controller-content;1"]: {
        name: "@mozilla.org/base/telemetry-controller-content;1";
        number: "{efc1415c-5708-41cc-8226-82bf1d3bee16}";
    };
    ["@mozilla.org/base/telemetry;1"]: {
        getService(): nsITelemetryType;
        name: "@mozilla.org/base/telemetry;1";
        number: "{aea477f2-b3a2-469c-aa29-0a82d132b829}";
        private typeName: "nsITelemetry";
        private interfaceName: "nsIITelemetry";
    };
    ["@mozilla.org/base/daptelemetry;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        createInstance(req: CiType["nsIDAPTelemetry"]): CiMap["nsIDAPTelemetry"];
        name: "@mozilla.org/base/daptelemetry;1";
        number: "{58a4c579-d2dd-46b7-9c3b-6881a1c36c6a}";
        private typeName: "mozilla::DAPTelemetry";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/toolkit/shutdown-terminator-telemetry;1"]: {
        name: "@mozilla.org/toolkit/shutdown-terminator-telemetry;1";
        number: "{3f78ada1-cba2-442a-82dd-d5fb300ddea7}";
    };
    ["@mozilla.org/thumbnails/pagethumbs-service;1"]: {
        name: "@mozilla.org/thumbnails/pagethumbs-service;1";
        number: "{97943eec-0e48-49ef-b7b7-cf4aa0109bb6}";
    };
    ["@mozilla.org/updates/timer-manager;1"]: {
        name: "@mozilla.org/updates/timer-manager;1";
        number: "{B322A5C0-A419-484E-96BA-D7182163899F}";
    };
    ["@mozilla.org/embedcomp/default-tooltiptextprovider;1"]: {
        name: "@mozilla.org/embedcomp/default-tooltiptextprovider;1";
        number: "{f376627f-0bbc-47b8-887e-fc92574cc91f}";
    };
    ["@mozilla.org/url-classifier/jslib;1"]: {
        name: "@mozilla.org/url-classifier/jslib;1";
        number: "{26a4a019-2827-4a89-a85c-5931a678823a}";
    };
    ["@mozilla.org/url-classifier/listmanager;1"]: {
        name: "@mozilla.org/url-classifier/listmanager;1";
        number: "{ca168834-cc00-48f9-b83c-fd018e58cae3}";
    };
    ["@mozilla.org/url-classifier/hashcompleter;1"]: {
        name: "@mozilla.org/url-classifier/hashcompleter;1";
        number: "{9111de73-9322-4bfc-8b65-2b727f3e6ec8}";
    };
    ["@mozilla.org/url-classifier/list-service;1"]: {
        name: "@mozilla.org/url-classifier/list-service;1";
        number: "{1980624c-c50b-4b46-a91c-dfaba7792706}";
    };
    ["@mozilla.org/toolkit/URLFormatterService;1"]: {
        createInstance(req: CiType["nsIURLFormatter"]): CiMap["nsIURLFormatter"];
        name: "@mozilla.org/toolkit/URLFormatterService;1";
        number: "{e6156350-2be8-11db-a98b-0800200c9a66}";
    };
    ["@mozilla.org/streamconv;1?from=application/vnd.mozilla.webext.unlocalized&to=text/css"]: {
        name: "@mozilla.org/streamconv;1?from=application/vnd.mozilla.webext.unlocalized&to=text/css";
        number: "{ded150e3-c92e-4077-a396-0dba9953e39f}";
    };
    ["@mozilla.org/content-viewers/http-index-format"]: {
        name: "@mozilla.org/content-viewers/http-index-format";
        number: "{742ad274-34c5-43d1-a8b7-293eaf8962d6}";
    };
    ["@mozilla.org/xul/xulstore;1"]: {
        createInstance(req: CiType["nsIXULStore"]): CiMap["nsIXULStore"];
        name: "@mozilla.org/xul/xulstore;1";
        number: "{6f46b6f4-c8b1-4bd4-a4fa-9ebbed0753ea}";
    };
    ["@mozilla.org/helperapplauncherdialog;1"]: {
        name: "@mozilla.org/helperapplauncherdialog;1";
        number: "{F68578EB-6EC2-4169-AE19-8C6243F0ABE1}";
    };
    ["@mozilla.org/extensions/blocklist;1"]: {
        createInstance(req: CiType["nsIBlocklistService"]): CiMap["nsIBlocklistService"];
        name: "@mozilla.org/extensions/blocklist;1";
        number: "{66354bc9-7ed1-4692-ae1d-8da97d6b205e}";
    };
    ["@mozilla.org/addons/integration;1"]: {
        name: "@mozilla.org/addons/integration;1";
        number: "{4399533d-08d1-458c-a87a-235f74451cfa}";
    };
    ["@mozilla.org/addons/installtrigger;1"]: {
        name: "@mozilla.org/addons/installtrigger;1";
        number: "{9df8ef2b-94da-45c9-ab9f-132eb55fddf1}";
    };
    ["@mozilla.org/addon-web-api/manager;1"]: {
        name: "@mozilla.org/addon-web-api/manager;1";
        number: "{8866d8e3-4ea5-48b7-a891-13ba0ac15235}";
    };
    ["@mozilla.org/uriloader/content-handler;1?type=application/x-xpinstall"]: {
        name: "@mozilla.org/uriloader/content-handler;1?type=application/x-xpinstall";
        number: "{7beb3ba8-6ec3-41b4-b67c-da89b8518922}";
    };
    ["@mozilla.org/content-dispatch-chooser;1"]: {
        name: "@mozilla.org/content-dispatch-chooser;1";
        number: "{e35d5067-95bc-4029-8432-e8f1e431148d}";
    };
    ["@mozilla.org/updates/update-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/updates/update-service;1";
        number: "{B3C290A6-3943-4B89-8BBE-C01EB7B3B311}";
    };
    ["@mozilla.org/updates/update-manager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/updates/update-manager;1";
        number: "{093C2356-4843-4C65-8709-D7DBCBBE7DFB}";
    };
    ["@mozilla.org/updates/update-checker;1"]: {
        getService(): unknown;
        name: "@mozilla.org/updates/update-checker;1";
        number: "{898CDC9B-E43F-422F-9CC4-2F6291B415A3}";
    };
    ["@mozilla.org/updates/update-service-stub;1"]: {
        getService(): unknown;
        name: "@mozilla.org/updates/update-service-stub;1";
        number: "{e43b0010-04ba-4da6-b523-1f92580bc150}";
    };
    ["@mozilla.org/system-proxy-settings;1"]: {
        createInstance(req: CiType["nsIAndroidSystemProxySettings"]): CiMap["nsIAndroidSystemProxySettings"];
        name: "@mozilla.org/system-proxy-settings;1";
        number: "{f01f0060-3708-478e-b935-3ec38be294b8}";
        private typeName: "nsAndroidSystemProxySettings";
        private interfaceName: "nsIAndroidSystemProxySettings";
    };
    ["@mozilla.org/gio-service;1"]: {
        createInstance(req: CiType["nsIGIOService"]): CiMap["nsIGIOService"];
        name: "@mozilla.org/gio-service;1";
        number: "{e3a1f3c9-3ae1-4b40-a5e0-7b457fc9a9ad}";
        private typeName: "nsGIOService";
        private interfaceName: "nsIGIOService";
    };
    ["@mozilla.org/gsettings-service;1"]: {
        createInstance(req: CiType["nsIGSettingsService"]): CiMap["nsIGSettingsService"];
        name: "@mozilla.org/gsettings-service;1";
        number: "{bfd4a9d8-d886-4161-81ef-8868da114170}";
        private typeName: "nsGSettingsService";
        private interfaceName: "nsIGSettingsService";
    };
    ["@mozilla.org/system-alerts-service;1"]: {
        createInstance(req: CiType["nsISystemAlertsService"]): CiMap["nsISystemAlertsService"];
        name: "@mozilla.org/system-alerts-service;1";
        number: "{84e11f80-ca55-11dd-ad8b-0800200c9a66}";
        private typeName: "nsSystemAlertsService";
        private interfaceName: "nsISystemAlertsService";
    };
    ["@mozilla.org/system-proxy-settings;1"]: {
        createInstance(req: CiType["nsIOSXSystemProxySettings"]): CiMap["nsIOSXSystemProxySettings"];
        name: "@mozilla.org/system-proxy-settings;1";
        number: "{9afcd4b8-2e0f-41f4-8f1f-3bf0d3cf67de}";
        private typeName: "nsOSXSystemProxySettings";
        private interfaceName: "nsIOSXSystemProxySettings";
    };
    ["@mozilla.org/system-proxy-settings;1"]: {
        createInstance(req: CiType["nsIUnixSystemProxySettings"]): CiMap["nsIUnixSystemProxySettings"];
        name: "@mozilla.org/system-proxy-settings;1";
        number: "{0fa3158c-d5a7-43de-9181-a285e74cf1d4}";
        private typeName: "nsUnixSystemProxySettings";
        private interfaceName: "nsIUnixSystemProxySettings";
    };
    ["@mozilla.org/dhcp-client;1"]: {
        createInstance(req: CiType["windowsDHCPClient"]): CiMap["windowsDHCPClient"];
        name: "@mozilla.org/dhcp-client;1";
        number: "{febf1d69-4d7d-4891-9524-045ad18b5592}";
        private typeName: "mozilla::toolkit::system::windowsDHCPClient::nsWindowsDHCPClient";
        private interfaceName: "windowsDHCPClient";
    };
    ["@mozilla.org/windows-package-manager;1"]: {
        createInstance(req: CiType["system"]): CiMap["system"];
        name: "@mozilla.org/windows-package-manager;1";
        number: "{c75da378-521f-11ec-84cc-336cd3921c24}";
        private typeName: "mozilla::toolkit::system::nsWindowsPackageManager";
        private interfaceName: "system";
    };
    ["@mozilla.org/system-proxy-settings;1"]: {
        createInstance(req: CiType["nsIWindowsSystemProxySettings"]): CiMap["nsIWindowsSystemProxySettings"];
        name: "@mozilla.org/system-proxy-settings;1";
        number: "{4e22d3ea-aaa2-436e-ada4-9247de57d367}";
        private typeName: "nsWindowsSystemProxySettings";
        private interfaceName: "nsIWindowsSystemProxySettings";
    };
    ["@mozilla.org/xre/app-info;1"]: {
        createInstance(req: CiType["nsIXULRuntime"]): CiMap["nsIXULRuntime"];
        createInstance(req: CiType["nsIXULAppInfo"]): CiMap["nsIXULAppInfo"];
        createInstance(req: CiType["nsICrashReporter"]): CiMap["nsICrashReporter"];
        name: "@mozilla.org/xre/app-info;1";
        number: "{95d89e3e-a169-41a3-8e56-719978e15b12}";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/xre/runtime;1"]: {
        createInstance(req: CiType["nsIXULRuntime"]): CiMap["nsIXULRuntime"];
        createInstance(req: CiType["nsIXULAppInfo"]): CiMap["nsIXULAppInfo"];
        createInstance(req: CiType["nsICrashReporter"]): CiMap["nsICrashReporter"];
        name: "@mozilla.org/xre/runtime;1";
        number: "{95d89e3e-a169-41a3-8e56-719978e15b12}";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/toolkit/crash-reporter;1"]: {
        createInstance(req: CiType["nsIXULRuntime"]): CiMap["nsIXULRuntime"];
        createInstance(req: CiType["nsIXULAppInfo"]): CiMap["nsIXULAppInfo"];
        createInstance(req: CiType["nsICrashReporter"]): CiMap["nsICrashReporter"];
        name: "@mozilla.org/toolkit/crash-reporter;1";
        number: "{95d89e3e-a169-41a3-8e56-719978e15b12}";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/embedcomp/rangefind;1"]: {
        createInstance(req: CiType["nsIFind"]): CiMap["nsIFind"];
        name: "@mozilla.org/embedcomp/rangefind;1";
        number: "{471f4944-1dd2-11b2-87ac-90be0a51d609}";
        private typeName: "nsFind";
        private interfaceName: "nsIFind";
    };
    ["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"]: {
        createInstance(req: CiType["nsIWebBrowserPersist"]): CiMap["nsIWebBrowserPersist"];
        name: "@mozilla.org/embedding/browser/nsWebBrowserPersist;1";
        number: "{7e677795-c582-4cd1-9e8d-8271b3474d2a}";
        private typeName: "nsWebBrowserPersist";
        private interfaceName: "nsIWebBrowserPersist";
    };
    ["@mozilla.org/embedcomp/window-watcher;1"]: {
        createInstance(req: CiType["nsIWindowWatcher"]): CiMap["nsIWindowWatcher"];
        name: "@mozilla.org/embedcomp/window-watcher;1";
        number: "{a21bfa01-f349-4394-a84c-8de5cf0737d0}";
        private typeName: "nsWindowWatcher";
        private interfaceName: "nsIWindowWatcher";
    };
    ["@mozilla.org/xre/directory-provider;1"]: {
        getService(): unknown;
        name: "@mozilla.org/xre/directory-provider;1";
        number: "{5573967d-f6cf-4c63-8e0e-9ac06e04d62b}";
        private typeName: "nsXREDirProvider";
        private interfaceName: "nsIXREDirProvider";
    };
    ["@mozilla.org/embedcomp/dialogparam;1"]: {
        createInstance(req: CiType["nsIDialogParamBlock"]): CiMap["nsIDialogParamBlock"];
        name: "@mozilla.org/embedcomp/dialogparam;1";
        number: "{4e4aae11-8901-46cc-8217-dad7c5415873}";
        private typeName: "nsDialogParamBlock";
        private interfaceName: "nsIDialogParamBlock";
    };
    ["@mozilla.org/toolkit/profile-service;1"]: {
        getService(): unknown;
        name: "@mozilla.org/toolkit/profile-service;1";
        number: "{5f5e59ce-27bc-47eb-9d1f-b09ca9049836}";
        private typeName: "nsToolkitProfileService";
        private interfaceName: "nsIToolkitProfileService";
    };
    ["@mozilla.org/tools/code-coverage;1"]: {
        createInstance(req: CiType["nsICodeCoverage"]): CiMap["nsICodeCoverage"];
        name: "@mozilla.org/tools/code-coverage;1";
        number: "{93576af0-a62f-4c88-bc12-f1855d4e0173}";
        private typeName: "nsCodeCoverage";
        private interfaceName: "nsICodeCoverage";
    };
    ["@mozilla.org/tools/profiler;1"]: {
        createInstance(req: CiType["nsIProfiler"]): CiMap["nsIProfiler"];
        name: "@mozilla.org/tools/profiler;1";
        number: "{25db9b8e-8123-4de1-b66d-8bbbedf2cdf4}";
        private typeName: "nsProfiler";
        private interfaceName: "nsIProfiler";
    };
    ["@mozilla.org/uriloader/handler-service-parent;1"]: {
        name: "@mozilla.org/uriloader/handler-service-parent;1";
        number: "{220cc253-b60f-41f6-b9cf-fdcb325f970f}";
    };
    ["@mozilla.org/uriloader/web-handler-app;1"]: {
        name: "@mozilla.org/uriloader/web-handler-app;1";
        number: "{8b1ae382-51a9-4972-b930-56977a57919d}";
    };
    ["@mozilla.org/widget/appshell/android;1"]: {
        name: "@mozilla.org/widget/appshell/android;1";
        number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
        private interfaceName: "nsIAppShellConstructor";
    };
    ["@mozilla.org/gfx/parent/screenmanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gfx/parent/screenmanager;1";
        number: "{d594094c-28b6-466b-97d7-66c039c3dea9}";
        private typeName: "mozilla::widget::ScreenManager";
        private interfaceName: "widget";
    };
    ["@mozilla.org/widget/useridleservice;1"]: {
        getService(): unknown;
        name: "@mozilla.org/widget/useridleservice;1";
        number: "{6987230e-0098-4e78-bc5f-1493ee7519fa}";
        private typeName: "nsUserIdleServiceAndroid";
        private interfaceName: "nsIUserIdleServiceAndroid";
    };
    ["@mozilla.org/widget/transferable;1"]: {
        createInstance(req: CiType["nsITransferable"]): CiMap["nsITransferable"];
        name: "@mozilla.org/widget/transferable;1";
        number: "{8b5314bc-db01-11d2-96ce-0060b0fb9956}";
        private typeName: "nsTransferable";
        private interfaceName: "nsITransferable";
    };
    ["@mozilla.org/widget/parent/clipboard;1"]: {
        createInstance(req: CiType["nsIClipboard"]): CiMap["nsIClipboard"];
        name: "@mozilla.org/widget/parent/clipboard;1";
        number: "{9d5adbb9-1da4-4162-acba-b373fe3ae837}";
        private typeName: "nsClipboard";
        private interfaceName: "nsIClipboard";
    };
    ["@mozilla.org/widget/clipboardhelper;1"]: {
        createInstance(req: CiType["nsIClipboardHelper"]): CiMap["nsIClipboardHelper"];
        name: "@mozilla.org/widget/clipboardhelper;1";
        number: "{77221d5a-1dd2-11b2-8c69-c710f15d2ed5}";
        private typeName: "nsClipboardHelper";
        private interfaceName: "nsIClipboardHelper";
    };
    ["@mozilla.org/gfx/printsettings-service;1"]: {
        createInstance(req: CiType["nsIPrintSettingsServiceAndroid"]): CiMap["nsIPrintSettingsServiceAndroid"];
        name: "@mozilla.org/gfx/printsettings-service;1";
        number: "{841387c8-72e6-484b-9296-bf6eea80d58a}";
        private typeName: "nsPrintSettingsServiceAndroid";
        private interfaceName: "nsIPrintSettingsServiceAndroid";
    };
    ["@mozilla.org/gfx/devicecontextspec;1"]: {
        createInstance(req: CiType["nsIDeviceContextSpecAndroid"]): CiMap["nsIDeviceContextSpecAndroid"];
        name: "@mozilla.org/gfx/devicecontextspec;1";
        number: "{d3f69889-e13a-4321-980c-a39332e21f34}";
        private typeName: "nsDeviceContextSpecAndroid";
        private interfaceName: "nsIDeviceContextSpecAndroid";
    };
    ["@mozilla.org/widget/htmlformatconverter;1"]: {
        createInstance(req: CiType["nsIHTMLFormatConverter"]): CiMap["nsIHTMLFormatConverter"];
        name: "@mozilla.org/widget/htmlformatconverter;1";
        number: "{948a0023-e3a7-11d2-96cf-0060b0fb9956}";
        private typeName: "nsHTMLFormatConverter";
        private interfaceName: "nsIHTMLFormatConverter";
    };
    ["@mozilla.org/gfx/info;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/gfx/info;1";
        number: "{d755a760-9f27-11df-0800-200c9a664242}";
        private typeName: "mozilla::widget::GfxInfo";
        private interfaceName: "widget";
    };
    ["@mozilla.org/android/bridge;1"]: {
        createInstance(req: CiType["nsIAndroidBridge"]): CiMap["nsIAndroidBridge"];
        name: "@mozilla.org/android/bridge;1";
        number: "{0fe2321d-ebd9-467d-a743-03a68d40599e}";
        private typeName: "nsAndroidBridge";
        private interfaceName: "nsIAndroidBridge";
    };
    ["@mozilla.org/system-alerts-service;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/system-alerts-service;1";
        number: "{84e11f80-ca55-11dd-ad8b-0800200c9a66}";
        private typeName: "mozilla::widget::AndroidAlerts";
        private interfaceName: "widget";
    };
    ["@mozilla.org/widget/parent/clipboard;1"]: {
        createInstance(req: CiType["nsIIClipboard"]): CiMap["nsIIClipboard"];
        createInstance(req: CiType["nsIClipboard"]): CiMap["nsIClipboard"];
        name: "@mozilla.org/widget/parent/clipboard;1";
        number: "{49f428e8-baf9-4ba3-b1b0-7d2fd3abbcea}";
        private typeName: "nsIClipboard";
        private interfaceName: "nsIIClipboard";
    };
    ["@mozilla.org/gfx/info;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/gfx/info;1";
        number: "{d755a760-9f27-11df-0800-200c9a664242}";
        private typeName: "mozilla::widget::GfxInfo";
        private interfaceName: "widget";
    };
    ["@mozilla.org/parent/filepicker;1"]: {
        createInstance(req: CiType["nsIFilePicker"]): CiMap["nsIFilePicker"];
        name: "@mozilla.org/parent/filepicker;1";
        number: "{e5170091-c16b-492d-bf00-f45d72470553}";
        private typeName: "nsFilePicker";
        private interfaceName: "nsIFilePicker";
    };
    ["@mozilla.org/parent/colorpicker;1"]: {
        createInstance(req: CiType["nsIColorPicker"]): CiMap["nsIColorPicker"];
        name: "@mozilla.org/parent/colorpicker;1";
        number: "{b90f5fdd-c23e-4ad6-a10e-1da8ffe07799}";
        private typeName: "nsColorPicker";
        private interfaceName: "nsIColorPicker";
    };
    ["@mozilla.org/widget/appshell/mac;1"]: {
        name: "@mozilla.org/widget/appshell/mac;1";
        number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
        private interfaceName: "nsIAppShellConstructor";
    };
    ["@mozilla.org/sound;1"]: {
        createInstance(req: CiType["nsISound"]): CiMap["nsISound"];
        name: "@mozilla.org/sound;1";
        number: "{b148eed2-236d-11d3-b35c-00a0cc3c1cde}";
        private typeName: "nsSound";
        private interfaceName: "nsISound";
    };
    ["@mozilla.org/widget/transferable;1"]: {
        createInstance(req: CiType["nsITransferable"]): CiMap["nsITransferable"];
        name: "@mozilla.org/widget/transferable;1";
        number: "{8b5314bc-db01-11d2-96ce-0060b0fb9956}";
        private typeName: "nsTransferable";
        private interfaceName: "nsITransferable";
    };
    ["@mozilla.org/widget/htmlformatconverter;1"]: {
        createInstance(req: CiType["nsIHTMLFormatConverter"]): CiMap["nsIHTMLFormatConverter"];
        name: "@mozilla.org/widget/htmlformatconverter;1";
        number: "{948a0023-e3a7-11d2-96cf-0060b0fb9956}";
        private typeName: "nsHTMLFormatConverter";
        private interfaceName: "nsIHTMLFormatConverter";
    };
    ["@mozilla.org/widget/clipboardhelper;1"]: {
        createInstance(req: CiType["nsIClipboardHelper"]): CiMap["nsIClipboardHelper"];
        name: "@mozilla.org/widget/clipboardhelper;1";
        number: "{77221d5a-1dd2-11b2-8c69-c710f15d2ed5}";
        private typeName: "nsClipboardHelper";
        private interfaceName: "nsIClipboardHelper";
    };
    ["@mozilla.org/widget/parent/dragservice;1"]: {
        createInstance(req: CiType["nsIDragService"]): CiMap["nsIDragService"];
        name: "@mozilla.org/widget/parent/dragservice;1";
        number: "{9a155bb2-2b67-45de-83e3-13a9dacf8336}";
        private typeName: "nsDragService";
        private interfaceName: "nsIDragService";
    };
    ["@mozilla.org/gfx/parent/screenmanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gfx/parent/screenmanager;1";
        number: "{f0ddedd7-e8d5-4f95-a5b4-0f48f1741b36}";
        private typeName: "mozilla::widget::ScreenManager";
        private interfaceName: "widget";
    };
    ["@mozilla.org/gfx/devicecontextspec;1"]: {
        createInstance(req: CiType["nsIDeviceContextSpecX"]): CiMap["nsIDeviceContextSpecX"];
        name: "@mozilla.org/gfx/devicecontextspec;1";
        number: "{d3f69889-e13a-4321-980c-a39332e21f34}";
        private typeName: "nsDeviceContextSpecX";
        private interfaceName: "nsIDeviceContextSpecX";
    };
    ["@mozilla.org/gfx/printerlist;1"]: {
        createInstance(req: CiType["nsIPrinterListCUPS"]): CiMap["nsIPrinterListCUPS"];
        name: "@mozilla.org/gfx/printerlist;1";
        number: "{a6cf9129-15b3-11d2-932e-00805f8add32}";
        private typeName: "nsPrinterListCUPS";
        private interfaceName: "nsIPrinterListCUPS";
    };
    ["@mozilla.org/gfx/printsettings-service;1"]: {
        createInstance(req: CiType["nsIPrintSettingsServiceX"]): CiMap["nsIPrintSettingsServiceX"];
        name: "@mozilla.org/gfx/printsettings-service;1";
        number: "{841387c8-72e6-484b-9296-bf6eea80d58a}";
        private typeName: "nsPrintSettingsServiceX";
        private interfaceName: "nsIPrintSettingsServiceX";
    };
    ["@mozilla.org/widget/printdialog-service;1"]: {
        createInstance(req: CiType["nsIPrintDialogServiceX"]): CiMap["nsIPrintDialogServiceX"];
        name: "@mozilla.org/widget/printdialog-service;1";
        number: "{06beec76-a183-4d9f-85dd-085f26da565a}";
        private typeName: "nsPrintDialogServiceX";
        private interfaceName: "nsIPrintDialogServiceX";
    };
    ["@mozilla.org/widget/useridleservice;1"]: {
        getService(): unknown;
        name: "@mozilla.org/widget/useridleservice;1";
        number: "{6987230e-0089-4e78-bc5f-1493ee7519fa}";
        private typeName: "nsUserIdleServiceX";
        private interfaceName: "nsIUserIdleServiceX";
    };
    ["@mozilla.org/system-alerts-service;1"]: {
        createInstance(req: CiType["mozIilla"]): CiMap["mozIilla"];
        name: "@mozilla.org/system-alerts-service;1";
        number: "{84e11f80-ca55-11dd-ad8b-0800200c9a66}";
        private typeName: "mozilla::OSXNotificationCenter";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/widget/macdocksupport;1"]: {
        createInstance(req: CiType["nsIMacDockSupport"]): CiMap["nsIMacDockSupport"];
        name: "@mozilla.org/widget/macdocksupport;1";
        number: "{2451baed-8dc3-46d9-9e30-96e1baa03666}";
        private typeName: "nsMacDockSupport";
        private interfaceName: "nsIMacDockSupport";
    };
    ["@mozilla.org/widget/macfinderprogress;1"]: {
        createInstance(req: CiType["nsIMacFinderProgress"]): CiMap["nsIMacFinderProgress"];
        name: "@mozilla.org/widget/macfinderprogress;1";
        number: "{74ea4101-a5bb-49bc-9984-66da8b225a37}";
        private typeName: "nsMacFinderProgress";
        private interfaceName: "nsIMacFinderProgress";
    };
    ["@mozilla.org/widget/macsharingservice;1"]: {
        createInstance(req: CiType["nsIMacSharingService"]): CiMap["nsIMacSharingService"];
        name: "@mozilla.org/widget/macsharingservice;1";
        number: "{de59fe1a-46c8-490f-b04d-34545acb06c9}";
        private typeName: "nsMacSharingService";
        private interfaceName: "nsIMacSharingService";
    };
    ["@mozilla.org/widget/macuseractivityupdater;1"]: {
        createInstance(req: CiType["nsIMacUserActivityUpdater"]): CiMap["nsIMacUserActivityUpdater"];
        name: "@mozilla.org/widget/macuseractivityupdater;1";
        number: "{29046c8f-cba6-4ffa-9141-1685e96c4ea0}";
        private typeName: "nsMacUserActivityUpdater";
        private interfaceName: "nsIMacUserActivityUpdater";
    };
    ["@mozilla.org/widget/mac-web-app-utils;1"]: {
        createInstance(req: CiType["nsIMacWebAppUtils"]): CiMap["nsIMacWebAppUtils"];
        name: "@mozilla.org/widget/mac-web-app-utils;1";
        number: "{e9096367-ddd9-45e4-b762-49c0c18b7119}";
        private typeName: "nsMacWebAppUtils";
        private interfaceName: "nsIMacWebAppUtils";
    };
    ["@mozilla.org/widget/standalonenativemenu;1"]: {
        createInstance(req: CiType["nsIStandaloneNativeMenu"]): CiMap["nsIStandaloneNativeMenu"];
        name: "@mozilla.org/widget/standalonenativemenu;1";
        number: "{1f39ae50-b6a0-4b37-90f4-60af614193d8}";
        private typeName: "nsStandaloneNativeMenu";
        private interfaceName: "nsIStandaloneNativeMenu";
    };
    ["@mozilla.org/widget/systemstatusbar;1"]: {
        createInstance(req: CiType["nsISystemStatusBarCocoa"]): CiMap["nsISystemStatusBarCocoa"];
        name: "@mozilla.org/widget/systemstatusbar;1";
        number: "{b6e1a890-b2b8-4883-a65f-9476f6185313}";
        private typeName: "nsSystemStatusBarCocoa";
        private interfaceName: "nsISystemStatusBarCocoa";
    };
    ["@mozilla.org/widget/touchbarupdater;1"]: {
        createInstance(req: CiType["nsITouchBarUpdater"]): CiMap["nsITouchBarUpdater"];
        name: "@mozilla.org/widget/touchbarupdater;1";
        number: "{38f396e2-93c9-4a77-aaf7-2d50b9962186}";
        private typeName: "nsTouchBarUpdater";
        private interfaceName: "nsITouchBarUpdater";
    };
    ["@mozilla.org/widget/clipboard;1"]: {
        createInstance(req: CiType["nsIClipboard"]): CiMap["nsIClipboard"];
        name: "@mozilla.org/widget/clipboard;1";
        number: "{8b5314ba-db01-11d2-96ce-0060b0fb9956}";
    };
    ["@mozilla.org/widget/content/clipboard;1"]: {
        createInstance(req: CiType["nsIClipboardProxy"]): CiMap["nsIClipboardProxy"];
        name: "@mozilla.org/widget/content/clipboard;1";
        number: "{c0ed2a75-96f8-4166-91d4-2fe8774448dc}";
        private typeName: "nsClipboardProxy";
        private interfaceName: "nsIClipboardProxy";
    };
    ["@mozilla.org/colorpicker;1"]: {
        name: "@mozilla.org/colorpicker;1";
        number: "{0f872c8c-3ee6-46bd-92a2-69652c6b474e}";
    };
    ["@mozilla.org/content/colorpicker;1"]: {
        createInstance(req: CiType["nsIColorPickerProxy"]): CiMap["nsIColorPickerProxy"];
        name: "@mozilla.org/content/colorpicker;1";
        number: "{11a77259-9d16-4386-8ac8-94338ee22f78}";
        private typeName: "nsColorPickerProxy";
        private interfaceName: "nsIColorPickerProxy";
    };
    ["@mozilla.org/widget/dragservice;1"]: {
        name: "@mozilla.org/widget/dragservice;1";
        number: "{8b5314bb-db01-11d2-96ce-0060b0fb9956}";
    };
    ["@mozilla.org/widget/content/dragservice;1"]: {
        createInstance(req: CiType["nsIDragServiceProxy"]): CiMap["nsIDragServiceProxy"];
        name: "@mozilla.org/widget/content/dragservice;1";
        number: "{28be18ae-73ee-494f-8c6d-5d14b7c998c7}";
        private typeName: "nsDragServiceProxy";
        private interfaceName: "nsIDragServiceProxy";
    };
    ["@mozilla.org/filepicker;1"]: {
        name: "@mozilla.org/filepicker;1";
        number: "{bd57cee8-1dd1-11b2-9fe7-95cf4709aea3}";
    };
    ["@mozilla.org/content/filepicker;1"]: {
        createInstance(req: CiType["nsIFilePickerProxy"]): CiMap["nsIFilePickerProxy"];
        name: "@mozilla.org/content/filepicker;1";
        number: "{40fd47f2-463a-4e4a-a33f-27eb148bfee4}";
        private typeName: "nsFilePickerProxy";
        private interfaceName: "nsIFilePickerProxy";
    };
    ["@mozilla.org/gfx/screenmanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gfx/screenmanager;1";
        number: "{c401eb80-f9ea-11d3-bb6f-e732b73ebe7c}";
    };
    ["@mozilla.org/gfx/content/screenmanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gfx/content/screenmanager;1";
        number: "{b2cdd51c-4277-417b-a931-08306c7814c3}";
        private typeName: "mozilla::widget::ScreenManager";
        private interfaceName: "widget";
    };
    ["@mozilla.org/widget/appshell/gtk;1"]: {
        name: "@mozilla.org/widget/appshell/gtk;1";
        number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
        private interfaceName: "nsIAppShellConstructor";
    };
    ["@mozilla.org/gfx/parent/screenmanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gfx/parent/screenmanager;1";
        number: "{e9537f8f-c07e-4435-8ab3-83f1ad6e3bbf}";
        private typeName: "mozilla::widget::ScreenManager";
        private interfaceName: "widget";
    };
    ["@mozilla.org/widget/taskbarprogress/gtk;1"]: {
        createInstance(req: CiType["nsITaskbarProgress"]): CiMap["nsITaskbarProgress"];
        createInstance(req: CiType["TaskbarProgress"]): CiMap["TaskbarProgress"];
        name: "@mozilla.org/widget/taskbarprogress/gtk;1";
        number: "{a9339876-0027-430f-b953-84c9c11c2da3}";
        private typeName: "TaskbarProgress";
        private interfaceName: "TaskbarProgress";
    };
    ["@mozilla.org/parent/colorpicker;1"]: {
        createInstance(req: CiType["nsIColorPicker"]): CiMap["nsIColorPicker"];
        name: "@mozilla.org/parent/colorpicker;1";
        number: "{4364de1a-798e-419c-a6f5-ca28866b6d5f}";
        private typeName: "nsColorPicker";
        private interfaceName: "nsIColorPicker";
    };
    ["@mozilla.org/parent/filepicker;1"]: {
        createInstance(req: CiType["nsIFilePicker"]): CiMap["nsIFilePicker"];
        name: "@mozilla.org/parent/filepicker;1";
        number: "{1940fed5-7d02-4122-8acf-7abaac698983}";
        private typeName: "nsFilePicker";
        private interfaceName: "nsIFilePicker";
    };
    ["@mozilla.org/widget/htmlformatconverter;1"]: {
        createInstance(req: CiType["nsIHTMLFormatConverter"]): CiMap["nsIHTMLFormatConverter"];
        name: "@mozilla.org/widget/htmlformatconverter;1";
        number: "{948a0023-e3a7-11d2-96cf-0060b0fb9956}";
        private typeName: "nsHTMLFormatConverter";
        private interfaceName: "nsIHTMLFormatConverter";
    };
    ["@mozilla.org/sound;1"]: {
        getService(): unknown;
        name: "@mozilla.org/sound;1";
        number: "{b148eed2-236d-11d3-b35c-00a0cc3c1cde}";
        private typeName: "nsISound";
        private interfaceName: "nsIISound";
    };
    ["@mozilla.org/widget/transferable;1"]: {
        createInstance(req: CiType["nsITransferable"]): CiMap["nsITransferable"];
        name: "@mozilla.org/widget/transferable;1";
        number: "{8b5314bc-db01-11d2-96ce-0060b0fb9956}";
        private typeName: "nsTransferable";
        private interfaceName: "nsITransferable";
    };
    ["@mozilla.org/applicationchooser;1"]: {
        createInstance(req: CiType["nsIApplicationChooser"]): CiMap["nsIApplicationChooser"];
        name: "@mozilla.org/applicationchooser;1";
        number: "{e221df9b-3d66-4045-9a66-5720949f8d10}";
        private typeName: "nsApplicationChooser";
        private interfaceName: "nsIApplicationChooser";
    };
    ["@mozilla.org/widget/parent/clipboard;1"]: {
        createInstance(req: CiType["nsIIClipboard"]): CiMap["nsIIClipboard"];
        createInstance(req: CiType["nsIClipboard"]): CiMap["nsIClipboard"];
        name: "@mozilla.org/widget/parent/clipboard;1";
        number: "{f55f5d31-dbb7-4d0d-9f6f-a4f4cd8e8ef1}";
        private typeName: "nsIClipboard";
        private interfaceName: "nsIIClipboard";
    };
    ["@mozilla.org/widget/clipboardhelper;1"]: {
        createInstance(req: CiType["nsIClipboardHelper"]): CiMap["nsIClipboardHelper"];
        name: "@mozilla.org/widget/clipboardhelper;1";
        number: "{77221d5a-1dd2-11b2-8c69-c710f15d2ed5}";
        private typeName: "nsClipboardHelper";
        private interfaceName: "nsIClipboardHelper";
    };
    ["@mozilla.org/widget/parent/dragservice;1"]: {
        getService(): unknown;
        name: "@mozilla.org/widget/parent/dragservice;1";
        number: "{0ba77e04-2adb-422f-af01-5a57b8013100}";
        private typeName: "nsDragService";
        private interfaceName: "nsIDragService";
    };
    ["@mozilla.org/gfx/info;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/gfx/info;1";
        number: "{d755a760-9f27-11df-0800-200c9a664242}";
        private typeName: "mozilla::widget::GfxInfo";
        private interfaceName: "widget";
    };
    ["@mozilla.org/widget/useridleservice;1"]: {
        getService(): unknown;
        name: "@mozilla.org/widget/useridleservice;1";
        number: "{6987230e-0098-4e78-bc5f-1493ee7519fa}";
        private typeName: "nsUserIdleService";
        private interfaceName: "nsIUserIdleService";
    };
    ["@mozilla.org/gfx/devicecontextspec;1"]: {
        createInstance(req: CiType["nsIDeviceContextSpecGTK"]): CiMap["nsIDeviceContextSpecGTK"];
        name: "@mozilla.org/gfx/devicecontextspec;1";
        number: "{d3f69889-e13a-4321-980c-a39332e21f34}";
        private typeName: "nsDeviceContextSpecGTK";
        private interfaceName: "nsIDeviceContextSpecGTK";
    };
    ["@mozilla.org/widget/printdialog-service;1"]: {
        createInstance(req: CiType["nsIPrintDialogServiceGTK"]): CiMap["nsIPrintDialogServiceGTK"];
        name: "@mozilla.org/widget/printdialog-service;1";
        number: "{06beec76-a183-4d9f-85dd-085f26da565a}";
        private typeName: "nsPrintDialogServiceGTK";
        private interfaceName: "nsIPrintDialogServiceGTK";
    };
    ["@mozilla.org/gfx/printsettings-service;1"]: {
        createInstance(req: CiType["nsIPrintSettingsServiceGTK"]): CiMap["nsIPrintSettingsServiceGTK"];
        name: "@mozilla.org/gfx/printsettings-service;1";
        number: "{841387c8-72e6-484b-9296-bf6eea80d58a}";
        private typeName: "nsPrintSettingsServiceGTK";
        private interfaceName: "nsIPrintSettingsServiceGTK";
    };
    ["@mozilla.org/gfx/printerlist;1"]: {
        createInstance(req: CiType["nsIPrinterListCUPS"]): CiMap["nsIPrinterListCUPS"];
        name: "@mozilla.org/gfx/printerlist;1";
        number: "{a6cf9129-15b3-11d2-932e-00805f8add32}";
        private typeName: "nsPrinterListCUPS";
        private interfaceName: "nsIPrinterListCUPS";
    };
    ["@mozilla.org/gfx/parent/screenmanager;1"]: {
        getService(): unknown;
        name: "@mozilla.org/gfx/parent/screenmanager;1";
        number: "{4c9dee4a-b083-4261-8bbe-c6883d2a6bc9}";
        private typeName: "mozilla::widget::ScreenManager";
        private interfaceName: "widget";
    };
    ["@mozilla.org/widget/appshell/win;1"]: {
        name: "@mozilla.org/widget/appshell/win;1";
        number: "{2d96b3df-c051-11d1-a827-0040959a28c9}";
        private interfaceName: "nsIAppShellConstructor";
    };
    ["@mozilla.org/widget/useridleservice;1"]: {
        getService(): unknown;
        name: "@mozilla.org/widget/useridleservice;1";
        number: "{6987230e-0098-4e78-bc5f-1493ee7519fa}";
        private typeName: "nsUserIdleServiceWin";
        private interfaceName: "nsIUserIdleServiceWin";
    };
    ["@mozilla.org/sound;1"]: {
        getService(): unknown;
        name: "@mozilla.org/sound;1";
        number: "{b148eed2-236d-11d3-b35c-00a0cc3c1cde}";
        private typeName: "nsISound";
        private interfaceName: "nsIISound";
    };
    ["@mozilla.org/widget/clipboardhelper;1"]: {
        createInstance(req: CiType["nsIClipboardHelper"]): CiMap["nsIClipboardHelper"];
        name: "@mozilla.org/widget/clipboardhelper;1";
        number: "{77221d5a-1dd2-11b2-8c69-c710f15d2ed5}";
        private typeName: "nsClipboardHelper";
        private interfaceName: "nsIClipboardHelper";
    };
    ["@mozilla.org/windows-taskbar;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/windows-taskbar;1";
        number: "{b8e5bc54-a22f-4eb2-b061-24cb6d19c15f}";
        private typeName: "mozilla::widget::WinTaskbar";
        private interfaceName: "widget";
    };
    ["@mozilla.org/windows-legacyjumplistbuilder;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/windows-legacyjumplistbuilder;1";
        number: "{73a5946f-608d-454f-9d33-0b8f8c7294b6}";
        private typeName: "mozilla::widget::LegacyJumpListBuilder";
        private interfaceName: "widget";
    };
    ["@mozilla.org/windows-legacyjumplistitem;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/windows-legacyjumplistitem;1";
        number: "{2b9a1f2c-27ce-45b6-8d4e-755d0e34f8db}";
        private typeName: "mozilla::widget::LegacyJumpListItem";
        private interfaceName: "widget";
    };
    ["@mozilla.org/windows-legacyjumplistseparator;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/windows-legacyjumplistseparator;1";
        number: "{21f1f13b-f75a-42ad-867a-d91ad694447e}";
        private typeName: "mozilla::widget::LegacyJumpListSeparator";
        private interfaceName: "widget";
    };
    ["@mozilla.org/windows-legacyjumplistlink;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/windows-legacyjumplistlink;1";
        number: "{f72c5dc4-5a12-47be-be28-ab105f33b08f}";
        private typeName: "mozilla::widget::LegacyJumpListLink";
        private interfaceName: "widget";
    };
    ["@mozilla.org/windows-legacyjumplistshortcut;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/windows-legacyjumplistshortcut;1";
        number: "{b16656b2-5187-498f-abf4-56346126bfdb}";
        private typeName: "mozilla::widget::LegacyJumpListShortcut";
        private interfaceName: "widget";
    };
    ["@mozilla.org/windows-ui-utils;1"]: {
        createInstance(req: CiType["nsIWindowsUIUtils"]): CiMap["nsIWindowsUIUtils"];
        createInstance(req: CiType["WindowsUIUtils"]): CiMap["WindowsUIUtils"];
        name: "@mozilla.org/windows-ui-utils;1";
        number: "{e04a55e8-fee3-4ea2-a98b-41d2621adc3c}";
        private typeName: "WindowsUIUtils";
        private interfaceName: "WindowsUIUtils";
    };
    ["@mozilla.org/widget/transferable;1"]: {
        createInstance(req: CiType["nsITransferable"]): CiMap["nsITransferable"];
        name: "@mozilla.org/widget/transferable;1";
        number: "{8b5314bc-db01-11d2-96ce-0060b0fb9956}";
        private typeName: "nsTransferable";
        private interfaceName: "nsITransferable";
    };
    ["@mozilla.org/widget/htmlformatconverter;1"]: {
        createInstance(req: CiType["nsIHTMLFormatConverter"]): CiMap["nsIHTMLFormatConverter"];
        name: "@mozilla.org/widget/htmlformatconverter;1";
        number: "{948a0023-e3a7-11d2-96cf-0060b0fb9956}";
        private typeName: "nsHTMLFormatConverter";
        private interfaceName: "nsIHTMLFormatConverter";
    };
    ["@mozilla.org/widget/parent/dragservice;1"]: {
        createInstance(req: CiType["nsIDragService"]): CiMap["nsIDragService"];
        name: "@mozilla.org/widget/parent/dragservice;1";
        number: "{f92e733e-33a3-4752-90e5-25801ddeaf7b}";
        private typeName: "nsDragService";
        private interfaceName: "nsIDragService";
    };
    ["@mozilla.org/widget/taskbar-preview-callback;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/widget/taskbar-preview-callback;1";
        number: "{9a0cb62b-d638-4faf-9588-ae96f5e29093}";
        private typeName: "mozilla::widget::TaskbarPreviewCallback";
        private interfaceName: "widget";
    };
    ["@mozilla.org/gfx/info;1"]: {
        createInstance(req: CiType["widget"]): CiMap["widget"];
        name: "@mozilla.org/gfx/info;1";
        number: "{d755a760-9f27-11df-0800-200c9a664242}";
        private typeName: "mozilla::widget::GfxInfo";
        private interfaceName: "widget";
    };
    ["@mozilla.org/parent/filepicker;1"]: {
        createInstance(req: CiType["nsIFilePicker"]): CiMap["nsIFilePicker"];
        name: "@mozilla.org/parent/filepicker;1";
        number: "{e2fc3e45-c893-4b34-8f6d-b87faf65a897}";
        private typeName: "nsFilePicker";
        private interfaceName: "nsIFilePicker";
    };
    ["@mozilla.org/parent/colorpicker;1"]: {
        createInstance(req: CiType["nsIColorPicker"]): CiMap["nsIColorPicker"];
        name: "@mozilla.org/parent/colorpicker;1";
        number: "{035d92f3-3802-4cf5-87cb-1758bfc5d4da}";
        private typeName: "nsColorPicker";
        private interfaceName: "nsIColorPicker";
    };
    ["@mozilla.org/sharepicker;1"]: {
        createInstance(req: CiType["nsISharePicker"]): CiMap["nsISharePicker"];
        name: "@mozilla.org/sharepicker;1";
        number: "{1201d357-8417-4926-a694-e6408fbedcf8}";
        private typeName: "nsSharePicker";
        private interfaceName: "nsISharePicker";
    };
    ["@mozilla.org/widget/parent/clipboard;1"]: {
        createInstance(req: CiType["nsIIClipboard"]): CiMap["nsIIClipboard"];
        createInstance(req: CiType["nsIClipboard"]): CiMap["nsIClipboard"];
        name: "@mozilla.org/widget/parent/clipboard;1";
        number: "{25b4efa0-7054-4787-9cd6-630efb3fe6fa}";
        private typeName: "nsIClipboard";
        private interfaceName: "nsIIClipboard";
    };
    ["@mozilla.org/widget/systemstatusbar;1"]: {
        getService(): unknown;
        name: "@mozilla.org/widget/systemstatusbar;1";
        number: "{b6e1a890-b2b8-4883-a65f-9476f6185313}";
        private typeName: "mozilla::widget::SystemStatusBar";
        private interfaceName: "widget";
    };
    ["@mozilla.org/gfx/devicecontextspec;1"]: {
        createInstance(req: CiType["nsIDeviceContextSpecWin"]): CiMap["nsIDeviceContextSpecWin"];
        name: "@mozilla.org/gfx/devicecontextspec;1";
        number: "{d3f69889-e13a-4321-980c-a39332e21f34}";
        private typeName: "nsDeviceContextSpecWin";
        private interfaceName: "nsIDeviceContextSpecWin";
    };
    ["@mozilla.org/widget/printdialog-service;1"]: {
        createInstance(req: CiType["nsIPrintDialogServiceWin"]): CiMap["nsIPrintDialogServiceWin"];
        name: "@mozilla.org/widget/printdialog-service;1";
        number: "{06beec76-a183-4d9f-85dd-085f26da565a}";
        private typeName: "nsPrintDialogServiceWin";
        private interfaceName: "nsIPrintDialogServiceWin";
    };
    ["@mozilla.org/gfx/printsettings-service;1"]: {
        createInstance(req: CiType["nsIPrintSettingsServiceWin"]): CiMap["nsIPrintSettingsServiceWin"];
        name: "@mozilla.org/gfx/printsettings-service;1";
        number: "{841387c8-72e6-484b-9296-bf6eea80d58a}";
        private typeName: "nsPrintSettingsServiceWin";
        private interfaceName: "nsIPrintSettingsServiceWin";
    };
    ["@mozilla.org/gfx/printerlist;1"]: {
        createInstance(req: CiType["nsIPrinterListWin"]): CiMap["nsIPrinterListWin"];
        name: "@mozilla.org/gfx/printerlist;1";
        number: "{a6cf9129-15b3-11d2-932e-00805f8add32}";
        private typeName: "nsPrinterListWin";
        private interfaceName: "nsIPrinterListWin";
    };
    ["@mozilla.org/xpcom/debug;1"]: {
        name: "@mozilla.org/xpcom/debug;1";
        number: "{cb6cdb94-e417-4601-b4a5-f991bf41453d}";
        private interfaceName: "nsIDebugImpl";
    };
    ["@mozilla.org/xpcom/memory-watcher;1"]: {
        getService(): unknown;
        name: "@mozilla.org/xpcom/memory-watcher;1";
        number: "{68bf4793-5204-45cf-9ee2-69adffbc2e38}";
        private typeName: "mozilla::nsAvailableMemoryWatcherBase";
        private interfaceName: "mozIilla";
    };
    ["@mozilla.org/binaryinputstream;1"]: {
        createInstance(req: CiType["nsIBinaryInputStream"]): CiMap["nsIBinaryInputStream"];
        name: "@mozilla.org/binaryinputstream;1";
        number: "{c521a612-2aad-46db-b6ab-3b821fb150b1}";
        private typeName: "nsBinaryInputStream";
        private interfaceName: "nsIBinaryInputStream";
    };
    ["@mozilla.org/binaryoutputstream;1"]: {
        createInstance(req: CiType["nsIBinaryOutputStream"]): CiMap["nsIBinaryOutputStream"];
        name: "@mozilla.org/binaryoutputstream;1";
        number: "{86c37b9a-74e7-4672-844e-6e7dd83ba484}";
        private typeName: "nsBinaryOutputStream";
        private interfaceName: "nsIBinaryOutputStream";
    };
    ["@mozilla.org/network/protocol;1?name=chrome"]: {
        createInstance(req: CiType["nsIChromeProtocolHandler"]): CiMap["nsIChromeProtocolHandler"];
        name: "@mozilla.org/network/protocol;1?name=chrome";
        number: "{61ba33c0-3031-11d3-8cd0-0060b0fc14a3}";
        private typeName: "nsChromeProtocolHandler";
        private interfaceName: "nsIChromeProtocolHandler";
    };
    ["@mozilla.org/chrome/chrome-registry;1"]: {
        getService(): unknown;
        name: "@mozilla.org/chrome/chrome-registry;1";
        number: "{47049e42-1d87-482a-984d-56ae185e367a}";
        private typeName: "nsChromeRegistry";
        private interfaceName: "nsIChromeRegistry";
    };
    ["@mozilla.org/consoleservice;1"]: {
        createInstance(req: CiType["nsIConsoleService"]): CiMap["nsIConsoleService"];
        name: "@mozilla.org/consoleservice;1";
        number: "{7e3ff85c-1dd2-11b2-8d4b-eb452cb0ff40}";
        private typeName: "nsConsoleService";
        private interfaceName: "nsIConsoleService";
    };
    ["@mozilla.org/hash-property-bag;1"]: {
        createInstance(req: CiType["nsIHashPropertyBagCC"]): CiMap["nsIHashPropertyBagCC"];
        name: "@mozilla.org/hash-property-bag;1";
        number: "{678c50b8-6bcb-4ad0-b9b8-c81175955199}";
        private typeName: "nsHashPropertyBagCC";
        private interfaceName: "nsIHashPropertyBagCC";
    };
    ["@mozilla.org/io-util;1"]: {
        createInstance(req: CiType["nsIIOUtil"]): CiMap["nsIIOUtil"];
        name: "@mozilla.org/io-util;1";
        number: "{eb833911-4f49-4623-845f-e58a8e6de4c2}";
        private typeName: "nsIOUtil";
        private interfaceName: "nsIIOUtil";
    };
    ["@mozilla.org/file/local;1"]: {
        name: "@mozilla.org/file/local;1";
        number: "{2e23e220-60be-11d3-8c4a-000064657374}";
        private interfaceName: "nsILocalFileConstructor";
    };
    ["@mozilla.org/memory-info-dumper;1"]: {
        createInstance(req: CiType["nsIMemoryInfoDumper"]): CiMap["nsIMemoryInfoDumper"];
        name: "@mozilla.org/memory-info-dumper;1";
        number: "{00bd71fb-7f09-4ec3-96af-a0b522b77969}";
        private typeName: "nsMemoryInfoDumper";
        private interfaceName: "nsIMemoryInfoDumper";
    };
    ["@mozilla.org/memory-reporter-manager;1"]: {
        createInstance(req: CiType["nsIMemoryReporterManager"]): CiMap["nsIMemoryReporterManager"];
        name: "@mozilla.org/memory-reporter-manager;1";
        number: "{fb97e4f5-32dd-497a-baa2-7d1e55079910}";
        private typeName: "nsMemoryReporterManager";
        private interfaceName: "nsIMemoryReporterManager";
    };
    ["@mozilla.org/process/util;1"]: {
        createInstance(req: CiType["nsIProcess"]): CiMap["nsIProcess"];
        name: "@mozilla.org/process/util;1";
        number: "{7b4eeb20-d781-11d4-8a83-0010a4e0c9ca}";
        private typeName: "nsProcess";
        private interfaceName: "nsIProcess";
    };
    ["@mozilla.org/scriptablebase64encoder;1"]: {
        createInstance(req: CiType["nsIScriptableBase64Encoder"]): CiMap["nsIScriptableBase64Encoder"];
        name: "@mozilla.org/scriptablebase64encoder;1";
        number: "{aaf68860-f849-40ee-bb7a-b229bce036a3}";
        private typeName: "nsScriptableBase64Encoder";
        private interfaceName: "nsIScriptableBase64Encoder";
    };
    ["@mozilla.org/securityconsole/message;1"]: {
        createInstance(req: CiType["nsISecurityConsoleMessage"]): CiMap["nsISecurityConsoleMessage"];
        name: "@mozilla.org/securityconsole/message;1";
        number: "{43ebf210-8a7b-4ddb-a83d-b87c51a058db}";
        private typeName: "nsSecurityConsoleMessage";
        private interfaceName: "nsISecurityConsoleMessage";
    };
    ["@mozilla.org/storagestream;1"]: {
        createInstance(req: CiType["nsIStorageStream"]): CiMap["nsIStorageStream"];
        name: "@mozilla.org/storagestream;1";
        number: "{669a9795-6ff7-4ed4-9150-c34ce2971b63}";
        private typeName: "nsStorageStream";
        private interfaceName: "nsIStorageStream";
    };
    ["@mozilla.org/supports-cstring;1"]: {
        createInstance(req: CiType["nsISupportsCString"]): CiMap["nsISupportsCString"];
        name: "@mozilla.org/supports-cstring;1";
        number: "{acf8dc41-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsCString";
        private interfaceName: "nsISupportsCString";
    };
    ["@mozilla.org/supports-char;1"]: {
        createInstance(req: CiType["nsISupportsChar"]): CiMap["nsISupportsChar"];
        name: "@mozilla.org/supports-char;1";
        number: "{acf8dc4a-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsChar";
        private interfaceName: "nsISupportsChar";
    };
    ["@mozilla.org/supports-double;1"]: {
        createInstance(req: CiType["nsISupportsDouble"]): CiMap["nsISupportsDouble"];
        name: "@mozilla.org/supports-double;1";
        number: "{cbf86871-4ac0-11d3-baea-00805f8a5dd7}";
        private typeName: "nsSupportsDouble";
        private interfaceName: "nsISupportsDouble";
    };
    ["@mozilla.org/supports-float;1"]: {
        createInstance(req: CiType["nsISupportsFloat"]): CiMap["nsISupportsFloat"];
        name: "@mozilla.org/supports-float;1";
        number: "{cbf86870-4ac0-11d3-baea-00805f8a5dd7}";
        private typeName: "nsSupportsFloat";
        private interfaceName: "nsISupportsFloat";
    };
    ["@mozilla.org/supports-interface-pointer;1"]: {
        createInstance(req: CiType["nsISupportsInterfacePointer"]): CiMap["nsISupportsInterfacePointer"];
        name: "@mozilla.org/supports-interface-pointer;1";
        number: "{a99febba-1dd1-11b2-a943-b02334a6d083}";
        private typeName: "nsSupportsInterfacePointer";
        private interfaceName: "nsISupportsInterfacePointer";
    };
    ["@mozilla.org/supports-PRBool;1"]: {
        createInstance(req: CiType["nsISupportsPRBool"]): CiMap["nsISupportsPRBool"];
        name: "@mozilla.org/supports-PRBool;1";
        number: "{acf8dc43-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRBool";
        private interfaceName: "nsISupportsPRBool";
    };
    ["@mozilla.org/supports-PRInt16;1"]: {
        createInstance(req: CiType["nsISupportsPRInt16"]): CiMap["nsISupportsPRInt16"];
        name: "@mozilla.org/supports-PRInt16;1";
        number: "{acf8dc4b-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRInt16";
        private interfaceName: "nsISupportsPRInt16";
    };
    ["@mozilla.org/supports-PRInt32;1"]: {
        createInstance(req: CiType["nsISupportsPRInt32"]): CiMap["nsISupportsPRInt32"];
        name: "@mozilla.org/supports-PRInt32;1";
        number: "{acf8dc4c-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRInt32";
        private interfaceName: "nsISupportsPRInt32";
    };
    ["@mozilla.org/supports-PRInt64;1"]: {
        createInstance(req: CiType["nsISupportsPRInt64"]): CiMap["nsISupportsPRInt64"];
        name: "@mozilla.org/supports-PRInt64;1";
        number: "{acf8dc4d-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRInt64";
        private interfaceName: "nsISupportsPRInt64";
    };
    ["@mozilla.org/supports-PRTime;1"]: {
        createInstance(req: CiType["nsISupportsPRTime"]): CiMap["nsISupportsPRTime"];
        name: "@mozilla.org/supports-PRTime;1";
        number: "{acf8dc49-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRTime";
        private interfaceName: "nsISupportsPRTime";
    };
    ["@mozilla.org/supports-PRUint16;1"]: {
        createInstance(req: CiType["nsISupportsPRUint16"]): CiMap["nsISupportsPRUint16"];
        name: "@mozilla.org/supports-PRUint16;1";
        number: "{acf8dc46-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRUint16";
        private interfaceName: "nsISupportsPRUint16";
    };
    ["@mozilla.org/supports-PRUint32;1"]: {
        createInstance(req: CiType["nsISupportsPRUint32"]): CiMap["nsISupportsPRUint32"];
        name: "@mozilla.org/supports-PRUint32;1";
        number: "{acf8dc47-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRUint32";
        private interfaceName: "nsISupportsPRUint32";
    };
    ["@mozilla.org/supports-PRUint64;1"]: {
        createInstance(req: CiType["nsISupportsPRUint64"]): CiMap["nsISupportsPRUint64"];
        name: "@mozilla.org/supports-PRUint64;1";
        number: "{acf8dc48-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRUint64";
        private interfaceName: "nsISupportsPRUint64";
    };
    ["@mozilla.org/supports-PRUint8;1"]: {
        createInstance(req: CiType["nsISupportsPRUint8"]): CiMap["nsISupportsPRUint8"];
        name: "@mozilla.org/supports-PRUint8;1";
        number: "{acf8dc44-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsPRUint8";
        private interfaceName: "nsISupportsPRUint8";
    };
    ["@mozilla.org/supports-string;1"]: {
        createInstance(req: CiType["nsISupportsString"]): CiMap["nsISupportsString"];
        name: "@mozilla.org/supports-string;1";
        number: "{acf8dc42-4a25-11d3-9890-006008962422}";
        private typeName: "nsSupportsString";
        private interfaceName: "nsISupportsString";
    };
    ["@mozilla.org/system-info;1"]: {
        createInstance(req: CiType["nsISystemInfo"]): CiMap["nsISystemInfo"];
        createInstance(req: CiType["nsIPropertyBag2"]): CiMap["nsIPropertyBag2"];
        name: "@mozilla.org/system-info;1";
        number: "{d962398a-99e5-49b2-857a-c159049c7f6c}";
        private typeName: "nsSystemInfo";
        private interfaceName: "nsISystemInfo";
    };
    ["@mozilla.org/thread-manager;1"]: {
        createInstance(req: CiType["nsIThreadManager"]): CiMap["nsIThreadManager"];
        name: "@mozilla.org/thread-manager;1";
        number: "{7a4204c6-e45a-4c37-8ebb-6709a22c917c}";
        private interfaceName: "nsIThreadManagerGetSingleton";
    };
    ["@mozilla.org/uuid-generator;1"]: {
        createInstance(req: CiType["nsIUUIDGenerator"]): CiMap["nsIUUIDGenerator"];
        name: "@mozilla.org/uuid-generator;1";
        number: "{706d36bb-bf79-4293-81f2-8f6828c18f9d}";
        private typeName: "nsUUIDGenerator";
        private interfaceName: "nsIUUIDGenerator";
    };
    ["@mozilla.org/variant;1"]: {
        createInstance(req: CiType["nsIVariantCC"]): CiMap["nsIVariantCC"];
        name: "@mozilla.org/variant;1";
        number: "{0d6ea1d0-879c-11d5-90ef-0010a4e73d9a}";
        private typeName: "nsVariantCC";
        private interfaceName: "nsIVariantCC";
    };
    ["@mozilla.org/xpcom/version-comparator;1"]: {
        createInstance(req: CiType["nsIVersionComparatorImpl"]): CiMap["nsIVersionComparatorImpl"];
        createInstance(req: CiType["nsIVersionComparator"]): CiMap["nsIVersionComparator"];
        name: "@mozilla.org/xpcom/version-comparator;1";
        number: "{c6e47036-ca94-4be3-963a-9abd8705f7a8}";
        private typeName: "nsVersionComparatorImpl";
        private interfaceName: "nsIVersionComparatorImpl";
    };
    ["@mozilla.org/xpcom/ini-parser-factory;1"]: {
        createInstance(req: CiType["nsIINIParserFactory"]): CiMap["nsIINIParserFactory"];
        name: "@mozilla.org/xpcom/ini-parser-factory;1";
        number: "{dfac10a9-dd24-43cf-a095-6ffa2e4b6a6c}";
        private typeName: "nsINIParserFactory";
        private interfaceName: "nsIINIParserFactory";
    };
    ["@mozilla.org/categorymanager;1"]: {
        createInstance(req: CiType["nsICategoryManager"]): CiMap["nsICategoryManager"];
        name: "@mozilla.org/categorymanager;1";
        number: "{16d222a6-1dd2-11b2-b693-f38b02c021b2}";
        private interfaceName: "nsICategoryManager";
    };
    ["@mozilla.org/array;1"]: {
        name: "@mozilla.org/array;1";
        number: "{35c66fd1-95e9-4e0a-80c5-c3bd2b375481}";
        private interfaceName: "nsIArrayBase";
    };
    ["@mozilla.org/observer-service;1"]: {
        createInstance(req: CiType["nsIObserverService"]): CiMap["nsIObserverService"];
        name: "@mozilla.org/observer-service;1";
        number: "{d07f5195-e3d1-11d2-8acd-00105a1b8860}";
        private interfaceName: "nsIObserverService";
    };
    ["@mozilla.org/file/directory_service;1"]: {
        createInstance(req: CiType["nsIDirectoryService"]): CiMap["nsIDirectoryService"];
        createInstance(req: CiType["nsIProperties"]): CiMap["nsIProperties"];
        name: "@mozilla.org/file/directory_service;1";
        number: "{f00152d0-b40b-11d3-8c9c-000064657374}";
        private interfaceName: "nsIDirectoryService";
    };
    ["@mozilla.org/io/multiplex-input-stream;1"]: {
        name: "@mozilla.org/io/multiplex-input-stream;1";
        number: "{565e3a2c-1dd2-11b2-8da1-b4cef17e568d}";
        private interfaceName: "nsIMultiplexInputStreamConstructor";
    };
    ["@mozilla.org/pipe;1"]: {
        name: "@mozilla.org/pipe;1";
        number: "{e4a0ee4e-0775-457b-9118-b3ae97a7c758}";
        private interfaceName: "nsIPipeConstructor";
    };
    ["@mozilla.org/scriptableinputstream;1"]: {
        name: "@mozilla.org/scriptableinputstream;1";
        number: "{7225c040-a9bf-11d3-a197-0050041caf44}";
        private interfaceName: "nsIScriptableInputStream";
    };
    ["@mozilla.org/io/string-input-stream;1"]: {
        name: "@mozilla.org/io/string-input-stream;1";
        number: "{0abb0835-5000-4790-af28-61b3ba17c295}";
        private interfaceName: "nsIStringInputStreamConstructor";
    };
    ["@mozilla.org/process/environment;1"]: {
        createInstance(req: CiType["nsIEnvironment"]): CiMap["nsIEnvironment"];
        name: "@mozilla.org/process/environment;1";
        number: "{03d68f92-9513-4e25-9be9-7cb239874172}";
        private interfaceName: "nsIEnvironment";
    };
    ["@mozilla.org/timer;1"]: {
        name: "@mozilla.org/timer;1";
        number: "{5ff24248-1dd2-11b2-8427-fbab44f29bc8}";
        private interfaceName: "nsITimer";
    };
    ["@mozilla.org/timer-manager;1"]: {
        createInstance(req: CiType["nsITimerManager"]): CiMap["nsITimerManager"];
        name: "@mozilla.org/timer-manager;1";
        number: "{d39a8904-2e09-4a3a-a273-c3bec7db2bfe}";
        private typeName: "nsTimerManager";
        private interfaceName: "nsITimerManager";
    };
    ["@mozilla.org/appshell/appShellService;1"]: {
        createInstance(req: CiType["nsIAppShellService"]): CiMap["nsIAppShellService"];
        name: "@mozilla.org/appshell/appShellService;1";
        number: "{0099907d-123c-4853-a46a-43098b5fb68c}";
        private typeName: "nsAppShellService";
        private interfaceName: "nsIAppShellService";
    };
    ["@mozilla.org/appshell/window-mediator;1"]: {
        createInstance(req: CiType["nsIWindowMediator"]): CiMap["nsIWindowMediator"];
        name: "@mozilla.org/appshell/window-mediator;1";
        number: "{79a2b7cc-f05b-4605-bfa0-fac54f27eec8}";
        private typeName: "nsWindowMediator";
        private interfaceName: "nsIWindowMediator";
    };
};