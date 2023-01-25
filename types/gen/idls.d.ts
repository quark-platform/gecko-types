interface IJSDebuggerType extends nsISupports {
}

interface IPeerConnectionObserverType extends nsISupports {
}

interface IPeerConnectionType extends nsISupports {
}

interface IUrlClassifierUITelemetryType extends nsISupports {
}

interface nsIScriptableOKType extends nsISupports {
}

interface nsIScriptableWithNotXPCOMType extends nsISupports {
}

interface nsISessionStoreFunctionsType extends nsISupports {
}

interface amIAddonManagerStartupType extends nsISupports {
}

interface amIWebInstallPromptType extends nsISupports {
}

interface extIWebNavigationType extends nsISupports {
}

interface imgICacheType extends nsISupports {
}

interface imgIContainerType extends nsISupports {
    readonly width: int32_t;
    readonly height: int32_t;
    readonly intrinsicSize: nsSize;
    readonly intrinsicRatio: MaybeAspectRatio;
    readonly hotspotX: int32_t;
    readonly hotspotY: int32_t;
    readonly type: unsigned_short;
    readonly animated: boolean;
    readonly providerId: unsigned_long;
    animationMode: unsigned_short;
}

interface imgIContainerDebugType extends nsISupports {
    readonly framesNotified: uint32_t;
}

interface imgIEncoderType extends nsIAsyncInputStream {
}

interface imgILoaderType extends nsISupports {
}

interface imgINotificationObserverType extends nsISupports {
}

interface imgIRequestType extends nsIRequest {
    readonly image: imgIContainer;
    readonly providerId: unsigned_long;
    readonly triggeringPrincipal: nsIPrincipal;
    readonly imageStatus: unsigned_long;
    readonly imageErrorCode: nsresult;
    readonly URI: nsIURI;
    readonly finalURI: nsIURI;
    readonly notificationObserver: imgINotificationObserver;
    readonly mimeType: string;
    readonly fileName: ACString;
    readonly imagePrincipal: nsIPrincipal;
    readonly hadCrossOriginRedirects: bool;
    readonly multipart: bool;
    readonly CORSMode: long;
}

interface imgIScriptedNotificationObserverType extends nsISupports {
}

interface imgIToolsType extends nsISupports {
}

interface imgIContainerCallbackType extends nsISupports {
}

interface inIDeepTreeWalkerType extends nsISupports {
    showAnonymousContent: boolean;
    showSubDocuments: boolean;
    showDocumentsAsNodes: boolean;
    readonly root: Node;
    readonly whatToShow: unsigned_long;
    currentNode: Node;
}

interface mozIAppServicesLoggerType extends nsISupports {
}

interface mozIVisitInfoType extends nsISupports {
    readonly visitId: long_long;
    readonly visitDate: PRTime;
    readonly transitionType: unsigned_long;
    readonly referrerURI: nsIURI;
}

interface mozIPlaceInfoType extends nsISupports {
    readonly placeId: long_long;
    readonly guid: ACString;
    readonly uri: nsIURI;
    readonly title: AString;
    readonly frecency: long_long;
    readonly visits: jsval;
}

interface mozIVisitInfoCallbackType extends nsISupports {
    readonly ignoreResults: bool;
    readonly ignoreErrors: bool;
}

interface mozIVisitedStatusCallbackType extends nsISupports {
}

interface mozIAsyncHistoryType extends nsISupports {
}

interface mozIBridgedSyncEngineCallbackType extends nsISupports {
}

interface mozIBridgedSyncEngineApplyCallbackType extends nsISupports {
}

interface mozIBridgedSyncEngineType extends nsISupports {
    readonly storageVersion: long;
    readonly allowSkippedRecord: boolean;
    logger: mozIServicesLogSink;
}

interface mozIDOMWindowType extends nsISupports {
}

interface mozIDOMWindowProxyType extends nsISupports {
}

interface mozIDownloadPlatformType extends nsISupports {
}

interface mozIExtensionServiceWorkerInfoType extends nsISupports {
    readonly principal: nsIPrincipal;
    readonly scriptURL: AString;
    readonly clientInfoId: AString;
    readonly descriptorId: unsigned_long_long;
}

interface mozIExtensionListenerCallOptionsType extends nsISupports {
    readonly apiObjectType: mozIExtensionListenerCallOptions_APIObjectType;
    readonly apiObjectDescriptor: jsval;
    readonly apiObjectPrepended: bool;
    callbackType: mozIExtensionListenerCallOptions_CallbackType;
}

interface mozIExtensionEventListenerType extends nsISupports {
}

interface mozIExtensionAPIRequestType extends nsISupports {
    readonly requestType: AUTF8String;
    readonly apiNamespace: AUTF8String;
    readonly apiName: AUTF8String;
    readonly apiObjectType: AUTF8String;
    readonly apiObjectId: AUTF8String;
    readonly args: jsval;
    normalizedArgs: jsval;
    readonly callerSavedFrame: jsval;
    readonly serviceWorkerInfo: mozIExtensionServiceWorkerInfo;
    readonly eventListener: mozIExtensionEventListener;
}

interface mozIExtensionAPIRequestResultType extends nsISupports {
    readonly type: mozIExtensionAPIRequestResult_ResultType;
    readonly value: jsval;
}

interface mozIExtensionAPIRequestHandlerType extends nsISupports {
}

interface mozIExtensionProcessScriptType extends nsISupports {
}

interface mozIExtensionStorageAreaType extends nsISupports {
}

interface mozIConfigurableExtensionStorageAreaType extends nsISupports {
}

interface mozISyncedExtensionStorageAreaType extends nsISupports {
}

interface mozIExtensionStorageListenerType extends nsISupports {
}

interface mozIExtensionStorageCallbackType extends nsISupports {
}

interface mozIGeckoMediaPluginChromeServiceType extends nsISupports {
}

interface mozIGeckoMediaPluginServiceType extends nsISupports {
    readonly thread: nsIThread;
}

interface mozIInterruptibleType extends nsISupports {
}

interface mozIJSSubScriptLoaderType extends nsISupports {
}

interface mozILocaleServiceType extends nsISupports {
    readonly defaultLocale: ACString;
    readonly lastFallbackLocale: ACString;
    readonly appLocaleAsLangTag: ACString;
    readonly appLocaleAsBCP47: ACString;
    readonly requestedLocale: ACString;
    readonly isAppLocaleRTL: boolean;
}

interface mozIMozIntlType extends nsISupports {
    readonly Collator: jsval;
    readonly DateTimeFormat: jsval;
    readonly DisplayNames: jsval;
    readonly ListFormat: jsval;
    readonly Locale: jsval;
    readonly NumberFormat: jsval;
    readonly PluralRules: jsval;
    readonly RelativeTimeFormat: jsval;
}

interface mozIMozIntlHelperType extends nsISupports {
}

interface mozIOSPreferencesType extends nsISupports {
    readonly systemLocale: ACString;
}

interface mozIPersonalDictionaryType extends nsISupports {
    readonly wordList: nsIStringEnumerator;
}

interface mozIPlacesAutoCompleteType extends nsISupports {
}

interface mozIPlacesPendingOperationType extends nsISupports {
}

interface mozIRemoteLazyInputStreamType extends nsISupports {
    readonly internalStreamID: nsIDRef;
}

interface mozISandboxReportType extends nsISupports {
    readonly msecAgo: uint64_t;
    readonly pid: int32_t;
    readonly tid: int32_t;
    readonly procType: ACString;
    readonly syscall: uint32_t;
    readonly numArgs: uint32_t;
}

interface mozISandboxReportArrayType extends nsISupports {
    readonly begin: uint64_t;
    readonly end: uint64_t;
}

interface mozISandboxReporterType extends nsISupports {
}

interface mozISandboxSettingsType extends nsISupports {
    readonly effectiveContentSandboxLevel: long;
    readonly contentWin32kLockdownState: long;
    readonly contentWin32kLockdownStateString: AString;
}

interface mozISandboxTestType extends nsISupports {
}

interface mozIServicesLogSinkType extends nsISupports {
    maxLevel: short;
}

interface mozISpellCheckingEngineType extends nsISupports {
    personalDictionary: mozIPersonalDictionary;
}

interface mozIStorageAsyncConnectionType extends nsISupports {
    defaultTransactionType: int32_t;
    readonly variableLimit: int32_t;
    readonly transactionInProgress: boolean;
    readonly databaseFile: nsIFile;
}

interface mozIStorageAsyncStatementType extends mozIStorageBaseStatement {
}

interface mozIStorageBaseStatementType extends mozIStorageBindingParams {
    readonly state: long;
}

interface mozIStorageBindingParamsType extends nsISupports {
}

interface mozIStorageBindingParamsArrayType extends nsISupports {
    readonly length: unsigned_long;
}

interface mozIStorageCompletionCallbackType extends nsISupports {
}

interface mozIStorageConnectionType extends mozIStorageAsyncConnection {
    readonly defaultPageSize: long;
    readonly connectionReady: boolean;
    readonly lastInsertRowID: long_long;
    readonly affectedRows: long;
    readonly lastError: long;
    readonly lastErrorString: AUTF8String;
    schemaVersion: long;
    readonly sharedDBMutex: SQLiteMutex;
}

interface mozIStorageErrorType extends nsISupports {
    readonly result: long;
    readonly message: AUTF8String;
}

interface mozIStorageFunctionType extends nsISupports {
}

interface mozIStoragePendingStatementType extends nsISupports {
}

interface mozIStorageProgressHandlerType extends nsISupports {
}

interface mozIStorageResultSetType extends nsISupports {
}

interface mozIStorageRowType extends mozIStorageValueArray {
}

interface mozIStorageServiceType extends nsISupports {
}

interface mozIStorageStatementType extends mozIStorageBaseStatement {
    readonly parameterCount: unsigned_long;
    readonly columnCount: unsigned_long;
    readonly numEntries: unsigned_long;
}

interface mozIStorageStatementCallbackType extends nsISupports {
}

interface mozIStorageVacuumParticipantType extends nsISupports {
    readonly expectedDatabasePageSize: long;
    readonly databaseConnection: mozIStorageConnection;
}

interface mozIStorageValueArrayType extends nsISupports {
    readonly numEntries: unsigned_long;
}

interface mozISyncedBookmarksMirrorProgressListenerType extends nsISupports {
}

interface mozISyncedBookmarksMirrorCallbackType extends nsISupports {
}

interface mozISyncedBookmarksMirrorLoggerType extends nsISupports {
    maxLevel: short;
}

interface mozISyncedBookmarksMergerType extends nsISupports {
    db: mozIStorageConnection;
    logger: mozIServicesLogSink;
}

interface mozITXTToHTMLConvType extends nsIStreamConverter {
}

interface mozITestInterfaceJSType extends nsISupports {
}

interface mozIThirdPartyUtilType extends nsISupports {
}

interface nsIASN1TreeType extends nsITreeView {
}

interface nsIAboutModuleType extends nsISupports {
}

interface nsIAboutNewTabServiceType extends nsISupports {
    readonly defaultURL: ACString;
    readonly welcomeURL: ACString;
}

interface nsIInstalledApplicationType extends nsISupports {
    readonly name: AString;
    readonly publisher: AString;
}

interface nsIAboutThirdPartyType extends nsISupports {
}

interface nsIAddonPolicyServiceType extends nsISupports {
    readonly defaultCSP: AString;
    readonly defaultCSPV3: AString;
}

interface nsIAddonContentPolicyType extends nsISupports {
}

interface nsIAlertNotificationImageListenerType extends nsISupports {
}

interface nsIAlertActionType extends nsISupports {
    readonly action: AString;
    readonly title: AString;
    readonly iconURL: AString;
    readonly windowsSystemActivationType: boolean;
}

interface nsIAlertNotificationType extends nsISupports {
    readonly name: AString;
    readonly imageURL: AString;
    readonly title: AString;
    readonly text: AString;
    readonly textClickable: boolean;
    readonly cookie: AString;
    readonly dir: AString;
    readonly lang: AString;
    readonly data: AString;
    readonly principal: nsIPrincipal;
    readonly URI: nsIURI;
    readonly inPrivateBrowsing: boolean;
    readonly requireInteraction: boolean;
    readonly silent: boolean;
    readonly actionable: boolean;
    readonly source: AString;
    launchURL: AString;
}

interface nsIAlertsServiceType extends nsISupports {
}

interface nsIAlertsDoNotDisturbType extends nsISupports {
    manualDoNotDisturb: bool;
    suppressForScreenSharing: bool;
}

interface nsIAlertsIconDataType extends nsISupports {
}

interface nsIAlertsIconURIType extends nsISupports {
}

interface nsIAndroidEventCallbackType extends nsISupports {
}

interface nsIAndroidEventFinalizerType extends nsISupports {
}

interface nsIAndroidEventListenerType extends nsISupports {
}

interface nsIAndroidEventDispatcherType extends nsISupports {
}

interface nsIAndroidViewType extends nsIAndroidEventDispatcher {
    readonly initData: jsval;
}

interface nsIAndroidBridgeType extends nsIAndroidEventDispatcher {
}

interface nsIAppShellType extends nsISupports {
    readonly eventloopNestingLevel: unsigned_long;
}

interface nsIAppShellServiceType extends nsISupports {
    readonly hiddenWindow: nsIAppWindow;
    readonly hiddenDOMWindow: mozIDOMWindowProxy;
    readonly applicationProvidedHiddenWindow: boolean;
    readonly hasHiddenWindow: boolean;
}

interface nsIAppStartupType extends nsISupports {
    readonly automaticSafeModeNecessary: boolean;
    readonly shuttingDown: boolean;
    readonly startingUp: boolean;
    readonly restarting: boolean;
    readonly wasRestarted: boolean;
    readonly wasSilentlyStarted: boolean;
    readonly secondsSinceLastOSRestart: int64_t;
    readonly showedPreXULSkeletonUI: bool;
    interrupted: boolean;
}

interface nsIAppWindowType extends nsISupports {
    readonly docShell: nsIDocShell;
    intrinsicallySized: boolean;
    readonly primaryContentShell: nsIDocShellTreeItem;
    readonly primaryRemoteTab: nsIRemoteTab;
    readonly primaryContentBrowsingContext: BrowsingContext;
    readonly outerToInnerHeightDifferenceInCSSPixels: unsigned_long;
    readonly outerToInnerWidthDifferenceInCSSPixels: unsigned_long;
    zLevel: unsigned_long;
    chromeFlags: uint32_t;
    XULBrowserWindow: nsIXULBrowserWindow;
    readonly initialOpenWindowInfo: nsIOpenWindowInfo;
}

interface nsIApplicationChooserFinishedCallbackType extends nsISupports {
}

interface nsIApplicationChooserType extends nsISupports {
}

interface nsIApplicationReputationServiceType extends nsISupports {
}

interface nsIApplicationReputationQueryType extends nsISupports {
    readonly sourceURI: nsIURI;
    readonly referrerInfo: nsIReferrerInfo;
    readonly suggestedFileName: AUTF8String;
    readonly fileSize: unsigned_long;
    readonly sha256Hash: ACString;
    readonly redirects: nsIArray;
}

interface nsIApplicationReputationCallbackType extends nsISupports {
}

interface nsIArrayType extends nsISupports {
    readonly length: unsigned_long;
}

interface nsIArrayBufferInputStreamType extends nsIInputStream {
}

interface nsIArrayExtensionsType extends nsIArray {
}

interface nsIAsyncInputStreamType extends nsIInputStream {
}

interface nsIInputStreamCallbackType extends nsISupports {
}

interface nsIAsyncOutputStreamType extends nsIOutputStream {
}

interface nsIOutputStreamCallbackType extends nsISupports {
}

interface nsIAsyncShutdownBlockerType extends nsISupports {
    readonly name: AString;
    readonly state: nsIPropertyBag;
}

interface nsIAsyncShutdownClientType extends nsISupports {
    readonly name: AString;
    readonly jsclient: jsval;
}

interface nsIAsyncShutdownCompletionCallbackType extends nsISupports {
}

interface nsIAsyncShutdownBarrierType extends nsISupports {
    readonly client: nsIAsyncShutdownClient;
    readonly state: nsIPropertyBag;
}

interface nsIAsyncShutdownServiceType extends nsISupports {
    readonly profileBeforeChange: nsIAsyncShutdownClient;
    readonly profileChangeTeardown: nsIAsyncShutdownClient;
    readonly quitApplicationGranted: nsIAsyncShutdownClient;
    readonly sendTelemetry: nsIAsyncShutdownClient;
    readonly webWorkersShutdown: nsIAsyncShutdownClient;
    readonly xpcomWillShutdown: nsIAsyncShutdownClient;
}

interface nsIAsyncStreamCopierType extends nsIRequest {
}

interface nsIAsyncStreamCopier2Type extends nsIRequest {
}

interface nsIAsyncVerifyRedirectCallbackType extends nsISupports {
}

interface nsISuspendedTypesType extends nsISupports {
}

interface nsIAudioChannelAgentCallbackType extends nsISupports {
}

interface nsIAudioChannelAgentType extends nsISupports {
}

interface nsIAudioDeviceInfoType extends nsISupports {
    readonly name: AString;
    readonly groupId: AString;
    readonly vendor: AString;
    readonly type: unsigned_short;
    readonly state: unsigned_short;
    readonly preferred: unsigned_short;
    readonly supportedFormat: unsigned_short;
    readonly defaultFormat: unsigned_short;
    readonly maxChannels: unsigned_long;
    readonly defaultRate: unsigned_long;
    readonly maxRate: unsigned_long;
    readonly minRate: unsigned_long;
    readonly maxLatency: unsigned_long;
    readonly minLatency: unsigned_long;
}

interface nsIAuthInformationType extends nsISupports {
    readonly flags: unsigned_long;
    readonly realm: AString;
    readonly authenticationScheme: AUTF8String;
    username: AString;
    password: AString;
    domain: AString;
}

interface nsIAuthModuleType extends nsISupports {
}

interface nsIAuthPromptType extends nsISupports {
}

interface nsIAuthPrompt2Type extends nsISupports {
}

interface nsIAuthPromptAdapterFactoryType extends nsISupports {
}

interface nsIAuthPromptCallbackType extends nsISupports {
}

interface nsIAuthPromptProviderType extends nsISupports {
}

interface nsIAutoCompleteControllerType extends nsISupports {
    input: nsIAutoCompleteInput;
    readonly searchStatus: unsigned_short;
    readonly matchCount: unsigned_long;
    searchString: AString;
}

interface nsIAutoCompleteInputType extends nsISupports {
    readonly popupElement: Element;
    readonly popup: nsIAutoCompletePopup;
    readonly controller: nsIAutoCompleteController;
    popupOpen: boolean;
    disableAutoComplete: boolean;
    completeDefaultIndex: boolean;
    completeSelectedIndex: boolean;
    forceComplete: boolean;
    minResultsForPopup: unsigned_long;
    maxRows: unsigned_long;
    timeout: unsigned_long;
    searchParam: AString;
    readonly searchCount: unsigned_long;
    textValue: AString;
    readonly selectionStart: long;
    readonly selectionEnd: long;
    readonly consumeRollupEvent: boolean;
    readonly inPrivateContext: boolean;
    readonly noRollupOnCaretMove: boolean;
    readonly noRollupOnEmptySearch: boolean;
    readonly userContextId: unsigned_long;
    readonly invalidatePreviousResult: boolean;
}

interface nsIAutoCompletePopupType extends nsISupports {
    readonly input: nsIAutoCompleteInput;
    readonly overrideValue: AString;
    selectedIndex: long;
    readonly popupOpen: boolean;
}

interface nsIAutoCompleteResultType extends nsISupports {
    readonly searchString: AString;
    readonly searchResult: unsigned_short;
    readonly defaultIndex: long;
    readonly errorDescription: AString;
    readonly matchCount: unsigned_long;
}

interface nsIAutoCompleteSearchType extends nsISupports {
}

interface nsIAutoCompleteObserverType extends nsISupports {
}

interface nsIAutoCompleteSearchDescriptorType extends nsISupports {
    readonly searchType: unsigned_short;
    readonly clearingAutoFillSearchesAgain: boolean;
}

interface nsIAutoCompleteSimpleResultType extends nsIAutoCompleteResult {
}

interface nsIAutoCompleteSimpleResultListenerType extends nsISupports {
}

interface nsIAutoCompleteSimpleSearchType extends nsIAutoCompleteSearch {
}

interface nsIAutoplayType extends nsISupports {
}

interface nsITabUnloaderType extends nsISupports {
}

interface nsIAvailableMemoryWatcherBaseType extends nsISupports {
}

interface nsIBFCacheEntryType extends nsISupports {
}

interface nsIBackgroundChannelRegistrarType extends nsISupports {
}

interface nsIBackgroundFileSaverType extends nsISupports {
    observer: nsIBackgroundFileSaverObserver;
    readonly sha256Hash: ACString;
}

interface nsIBackgroundFileSaverObserverType extends nsISupports {
}

interface nsIBackgroundTasksType extends nsISupports {
    readonly isBackgroundTaskMode: boolean;
}

interface nsIBackgroundTasksManagerType extends nsICommandLineHandler {
}

interface nsIBackgroundTasksRunnerType extends nsISupports {
}

interface nsIBaseWindowType extends nsISupports {
    parentWidget: nsIWidget;
    parentNativeWindow: nativeWindow;
    readonly nativeHandle: AString;
    visibility: boolean;
    enabled: boolean;
    readonly mainWidget: nsIWidget;
    readonly widgetCSSToDeviceScale: double;
    readonly devicePixelsPerDesktopPixel: double;
    title: AString;
}

interface nsIBidiKeyboardType extends nsISupports {
    readonly haveBidiKeyboards: boolean;
}

interface nsIBinaryInputStreamType extends nsIInputStream {
}

interface nsIBinaryOutputStreamType extends nsIOutputStream {
}

interface nsIBitsType extends nsISupports {
    readonly initialized: boolean;
}

interface nsIBitsNewRequestCallbackType extends nsISupports {
}

interface nsIBitsRequestType extends nsIRequest {
    readonly bitsId: AUTF8String;
    readonly transferError: nsBitsErrorType;
}

interface nsIBitsCallbackType extends nsISupports {
}

interface nsIBlocklistServiceType extends nsISupports {
    readonly isLoaded: boolean;
}

interface nsIBrowserType extends nsISupports {
    readonly isRemoteBrowser: boolean;
    readonly permanentKey: jsval;
    readonly contentPrincipal: nsIPrincipal;
    readonly contentPartitionedPrincipal: nsIPrincipal;
    readonly csp: nsIContentSecurityPolicy;
    readonly referrerInfo: nsIReferrerInfo;
    isNavigating: boolean;
    mayEnableCharacterEncodingMenu: boolean;
}

interface nsIBrowserChildType extends nsISupports {
    readonly messageManager: ContentFrameMessageManager;
    readonly tabId: uint64_t;
    hasSiblings: boolean;
    readonly chromeOuterWindowID: uint64_t;
}

interface nsIBrowserControllerType extends nsISupports {
}

interface nsIOpenURIInFrameParamsType extends nsISupports {
    readonly openWindowInfo: nsIOpenWindowInfo;
    referrerInfo: nsIReferrerInfo;
    readonly isPrivate: boolean;
    triggeringPrincipal: nsIPrincipal;
    csp: nsIContentSecurityPolicy;
    readonly openerBrowser: Element;
    readonly openerOriginAttributes: jsval;
}

interface nsIBrowserDOMWindowType extends nsISupports {
    readonly tabCount: unsigned_long;
}

interface nsIBrowserElementAPIType extends nsISupports {
}

interface nsIBrowserHandlerType extends nsISupports {
    startPage: AUTF8String;
    defaultArgs: AUTF8String;
    kiosk: boolean;
    majorUpgrade: boolean;
}

interface nsIBrowserUsageType extends nsISupports {
}

interface nsIVisibleTabType extends nsISupports {
    contentTitle: AString;
    browserId: int64_t;
}

interface nsIBrowserWindowTrackerType extends nsISupports {
}

interface nsIBufferedInputStreamType extends nsIInputStream {
    readonly data: nsIInputStream;
}

interface nsIBufferedOutputStreamType extends nsIOutputStream {
    readonly data: nsIOutputStream;
}

interface nsIByteRangeRequestType extends nsISupports {
    readonly isByteRangeRequest: boolean;
    readonly startRange: long_long;
    readonly endRange: long_long;
}

interface nsICacheEntryType extends nsISupports {
    readonly key: ACString;
    readonly cacheEntryId: uint64_t;
    readonly persistent: boolean;
    readonly fetchCount: uint32_t;
    readonly lastFetched: uint32_t;
    readonly lastModified: uint32_t;
    readonly expirationTime: uint32_t;
    readonly onStartTime: uint64_t;
    readonly onStopTime: uint64_t;
    readonly isForcedValid: boolean;
    securityInfo: nsITransportSecurityInfo;
    readonly storageDataSize: unsigned_long;
    readonly diskStorageSizeInKB: uint32_t;
    readonly dataSize: long_long;
    readonly altDataSize: long_long;
    readonly altDataType: ACString;
    readonly loadContextInfo: nsILoadContextInfo;
}

interface nsICacheEntryMetaDataVisitorType extends nsISupports {
}

interface nsICacheEntryDoomCallbackType extends nsISupports {
}

interface nsICacheEntryOpenCallbackType extends nsISupports {
}

interface nsIInputStreamReceiverType extends nsISupports {
}

interface nsICacheInfoChannelType extends nsISupports {
    readonly cacheTokenFetchCount: uint32_t;
    readonly cacheTokenExpirationTime: uint32_t;
    cacheKey: unsigned_long;
    allowStaleCacheContent: boolean;
    preferCacheLoadOverBypass: boolean;
    forceValidateCacheContent: boolean;
    readonly alternativeDataType: ACString;
    readonly alternativeDataInputStream: nsIInputStream;
}

interface nsICachePurgeLockType extends nsISupports {
}

interface nsICacheStorageType extends nsISupports {
}

interface nsICacheStorageServiceType extends nsISupports {
    readonly ioTarget: nsIEventTarget;
}

interface nsICacheStorageConsumptionObserverType extends nsISupports {
}

interface nsICacheStorageVisitorType extends nsISupports {
}

interface nsICacheTestingType extends nsISupports {
}

interface nsICachingChannelType extends nsICacheInfoChannel {
    cacheToken: nsISupports;
    cacheOnlyMetadata: boolean;
    pin: boolean;
}

interface nsICancelableType extends nsISupports {
}

interface nsICaptivePortalCallbackType extends nsISupports {
}

interface nsICaptivePortalDetectorType extends nsISupports {
}

interface nsICaptivePortalServiceCallbackType extends nsISupports {
}

interface nsICaptivePortalServiceType extends nsISupports {
    readonly state: long;
    readonly lastChecked: unsigned_long_long;
}

interface nsICascadeFilterType extends nsISupports {
}

interface nsICategoryEntryType extends nsISupportsCString {
    readonly entry: ACString;
    readonly value: ACString;
}

interface nsICategoryManagerType extends nsISupports {
}

interface nsICertOverrideType extends nsISupports {
    readonly asciiHost: ACString;
    readonly port: int32_t;
    readonly isTemporary: boolean;
    readonly dbKey: ACString;
    readonly hostPort: ACString;
    readonly originAttributes: jsval;
}

interface nsICertOverrideServiceType extends nsISupports {
    readonly securityCheckDisabled: boolean;
}

interface nsICertStorageCallbackType extends nsISupports {
}

interface nsIRevocationStateType extends nsISupports {
    readonly state: short;
}

interface nsIIssuerAndSerialRevocationStateType extends nsIRevocationState {
    readonly issuer: ACString;
    readonly serial: ACString;
}

interface nsISubjectAndPubKeyRevocationStateType extends nsIRevocationState {
    readonly subject: ACString;
    readonly pubKey: ACString;
}

interface nsICRLiteCoverageType extends nsISupports {
    readonly b64LogID: ACString;
    readonly minTimestamp: unsigned_long_long;
    readonly maxTimestamp: unsigned_long_long;
}

interface nsICRLiteTimestampType extends nsISupports {
    readonly timestamp: unsigned_long_long;
}

interface nsICertInfoType extends nsISupports {
    readonly cert: ACString;
    readonly subject: ACString;
    readonly trust: short;
}

interface nsICertStorageType extends nsISupports {
}

interface nsICertTreeItemType extends nsISupports {
    readonly cert: nsIX509Cert;
}

interface nsICertTreeType extends nsITreeView {
}

interface nsICertificateDialogsType extends nsISupports {
}

interface nsIChannelType extends nsIRequest {
    originalURI: nsIURI;
    readonly URI: nsIURI;
    owner: nsISupports;
    notificationCallbacks: nsIInterfaceRequestor;
    readonly securityInfo: nsITransportSecurityInfo;
    contentType: ACString;
    contentCharset: ACString;
    contentLength: int64_t;
    readonly canceled: boolean;
    contentDisposition: unsigned_long;
    contentDispositionFilename: AString;
    readonly contentDispositionHeader: ACString;
    loadInfo: nsILoadInfo;
    readonly isDocument: bool;
}

interface nsIIdentChannelType extends nsIChannel {
    channelId: uint64_t;
}

interface nsIUrlClassifierBlockedChannelType extends nsISupports {
    readonly reason: uint8_t;
    readonly tables: ACString;
    readonly url: AString;
    readonly tabId: uint64_t;
    readonly channelId: uint64_t;
    readonly isPrivateBrowsing: boolean;
    readonly topLevelUrl: AString;
}

interface nsIChannelClassifierServiceType extends nsISupports {
}

interface nsIChannelEventSinkType extends nsISupports {
}

interface nsIChildChannelType extends nsISupports {
}

interface nsIChromeRegistryType extends nsISupports {
}

interface nsIXULChromeRegistryType extends nsIChromeRegistry {
}

interface nsIClassInfoType extends nsISupports {
    readonly contractID: AUTF8String;
    readonly classDescription: AUTF8String;
    readonly classID: nsCIDPtr;
    readonly flags: uint32_t;
    readonly classIDNoAlloc: nsCID;
}

interface nsIClassOfServiceType extends nsISupports {
    classFlags: unsigned_long;
    incremental: bool;
}

interface nsIClassifiedChannelType extends nsISupports {
    readonly matchedList: ACString;
    readonly matchedProvider: ACString;
    readonly matchedFullHash: ACString;
    readonly firstPartyClassificationFlags: unsigned_long;
    readonly thirdPartyClassificationFlags: unsigned_long;
    readonly classificationFlags: unsigned_long;
}

interface nsIClearDataServiceType extends nsISupports {
}

interface nsIClearDataCallbackType extends nsISupports {
}

interface nsIClickRuleType extends nsISupports {
    readonly presence: ACString;
    readonly skipPresenceVisibilityCheck: boolean;
    readonly runContext: nsIClickRule_RunContext;
    readonly hide: ACString;
    readonly optOut: ACString;
    readonly optIn: ACString;
}

interface nsIClientAuthDialogsType extends nsISupports {
}

interface nsIClientAuthRememberRecordType extends nsISupports {
    readonly asciiHost: ACString;
    readonly fingerprint: ACString;
    readonly dbKey: ACString;
    readonly entryKey: ACString;
}

interface nsIClientAuthRememberServiceType extends nsISupports {
}

interface nsIClipboardType extends nsISupports {
}

interface nsIClipboardHelperType extends nsISupports {
}

interface nsIClipboardOwnerType extends nsISupports {
}

interface nsICloneableInputStreamType extends nsISupports {
    readonly cloneable: boolean;
}

interface nsICloneableInputStreamWithRangeType extends nsICloneableInputStream {
}

interface nsICodeCoverageType extends nsISupports {
}

interface nsIColorPickerShownCallbackType extends nsISupports {
}

interface nsIColorPickerType extends nsISupports {
}

interface nsICommandLineType extends nsISupports {
    readonly length: long;
    readonly state: unsigned_long;
    preventDefault: boolean;
    readonly workingDirectory: nsIFile;
}

interface nsICommandLineHandlerType extends nsISupports {
    readonly helpInfo: AUTF8String;
}

interface nsICommandLineRunnerType extends nsICommandLine {
    readonly helpText: AUTF8String;
}

interface nsICommandLineValidatorType extends nsISupports {
}

interface nsICommandManagerType extends nsISupports {
}

interface nsICommandParamsType extends nsISupports {
}

interface nsIComponentManagerType extends nsISupports {
}

interface nsIComponentRegistrarType extends nsISupports {
}

interface nsICompressConvStatsType extends nsISupports {
    readonly decodedDataLength: uint64_t;
}

interface nsIConsoleAPIStorageType extends nsISupports {
}

interface nsIConsoleListenerType extends nsISupports {
}

interface nsIConsoleMessageType extends nsISupports {
    readonly logLevel: uint32_t;
    readonly timeStamp: long_long;
    readonly microSecondTimeStamp: long_long;
    readonly message: AString;
    isForwardedFromContentProcess: boolean;
}

interface nsIConsoleServiceType extends nsISupports {
}

interface nsIContentBlockingAllowListType extends nsISupports {
}

interface nsIContentDispatchChooserType extends nsISupports {
}

interface nsIContentHandlerType extends nsISupports {
}

interface nsIContentPermissionTypeType extends nsISupports {
    readonly type: ACString;
    readonly options: nsIArray;
}

interface nsIContentPermissionRequestType extends nsISupports {
    readonly types: nsIArray;
    readonly principal: nsIPrincipal;
    readonly topLevelPrincipal: nsIPrincipal;
    readonly window: mozIDOMWindow;
    readonly element: Element;
    readonly hasValidTransientUserGestureActivation: boolean;
    readonly isRequestDelegatedToUnsafeThirdParty: boolean;
}

interface nsIContentPermissionPromptType extends nsISupports {
}

interface nsIContentPolicyType extends nsISupports {
}

interface nsIContentPrefObserverType extends nsISupports {
}

interface nsIContentPrefService2Type extends nsISupports {
}

interface nsIContentPrefCallback2Type extends nsISupports {
}

interface nsIContentPrefType extends nsISupports {
    readonly domain: AString;
    readonly name: AString;
    readonly value: nsIVariant;
}

interface nsIContentProcessInfoType extends nsISupports {
    readonly isAlive: boolean;
    readonly processId: int32_t;
    readonly tabCount: int32_t;
    readonly messageManager: nsISupports;
}

interface nsIContentProcessProviderType extends nsISupports {
}

interface nsIContentSecurityManagerType extends nsISupports {
}

interface nsIContentSecurityPolicyType extends nsISerializable {
    readonly policyCount: unsigned_long;
    readonly upgradeInsecureRequests: bool;
    readonly blockAllMixedContent: bool;
    readonly enforcesFrameAncestors: bool;
    readonly requestPrincipal: nsIPrincipal;
    readonly selfURI: nsIURI;
    readonly referrer: AString;
    readonly innerWindowID: unsigned_long_long;
    skipAllowInlineStyleCheck: boolean;
}

interface nsICSPEventListenerType extends nsISupports {
}

interface nsIContentSignatureVerifierType extends nsISupports {
}

interface nsIContentSnifferType extends nsISupports {
}

interface nsIContentViewerType extends nsISupports {
    container: nsIDocShell;
    readonly loadCompleted: boolean;
    readonly isStopped: boolean;
    readonly inPermitUnload: boolean;
    readonly beforeUnloadFiring: boolean;
    readonly DOMDocument: Document;
    previousViewer: nsIContentViewer;
    sticky: boolean;
    readonly historyEntry: nsISHEntry;
    readonly isTabModalPromptAllowed: boolean;
    isHidden: boolean;
    readonly presShell: PresShellPtr;
    readonly presContext: nsPresContextPtr;
    readonly deviceFullZoomForTest: float;
    authorStyleDisabled: boolean;
}

interface nsIContentViewerEditType extends nsISupports {
    readonly copyable: boolean;
    readonly inLink: boolean;
    readonly inImage: boolean;
    readonly canGetContents: boolean;
}

interface nsIControllerType extends nsISupports {
}

interface nsICommandControllerType extends nsISupports {
}

interface nsIControllerCommandType extends nsISupports {
}

interface nsIControllerCommandTableType extends nsISupports {
}

interface nsIControllerContextType extends nsISupports {
}

interface nsIControllersType extends nsISupports {
}

interface nsIConverterInputStreamType extends nsIUnicharInputStream {
}

interface nsIConverterOutputStreamType extends nsIUnicharOutputStream {
}

interface nsICookieType extends nsISupports {
    readonly name: ACString;
    readonly value: AUTF8String;
    readonly isDomain: boolean;
    readonly host: AUTF8String;
    readonly rawHost: AUTF8String;
    readonly path: AUTF8String;
    readonly isSecure: boolean;
    readonly expires: uint64_t;
    readonly expiry: int64_t;
    readonly originAttributes: jsval;
    readonly isSession: boolean;
    readonly isHttpOnly: boolean;
    readonly creationTime: int64_t;
    readonly lastAccessed: int64_t;
    readonly sameSite: int32_t;
    readonly schemeMap: nsICookie_schemeType;
}

interface nsICookieBannerListServiceType extends nsISupports {
}

interface nsICookieBannerRuleType extends nsISupports {
    id: ACString;
    readonly clickRule: nsIClickRule;
}

interface nsICookieBannerServiceType extends nsISupports {
    readonly isEnabled: boolean;
}

interface nsICookieJarSettingsType extends nsISerializable {
    readonly cookieBehavior: unsigned_long;
    readonly isFirstPartyIsolated: boolean;
    readonly shouldResistFingerprinting: boolean;
    readonly rejectThirdPartyContexts: boolean;
    readonly limitForeignContexts: boolean;
    readonly blockingAllThirdPartyContexts: boolean;
    readonly blockingAllContexts: boolean;
    partitionForeign: boolean;
    readonly isOnContentBlockingAllowList: boolean;
    readonly partitionKey: AString;
}

interface nsICookieManagerType extends nsISupports {
}

interface nsICookiePermissionType extends nsISupports {
}

interface nsICookieRuleType extends nsISupports {
    readonly cookie: nsICookie;
    readonly expiryRelative: int64_t;
    readonly unsetValue: AUTF8String;
}

interface nsICookieTransactionCallbackType extends nsISupports {
}

interface nsICookieServiceType extends nsISupports {
}

interface nsICrashReporterType extends nsISupports {
    readonly crashReporterEnabled: boolean;
    serverURL: nsIURL;
    minidumpPath: nsIFile;
    submitReports: boolean;
}

interface nsICrashServiceType extends nsISupports {
}

interface nsICryptoHashType extends nsISupports {
}

interface nsICycleCollectorHandlerType extends nsISupports {
}

interface nsICycleCollectorLogSinkType extends nsISupports {
    filenameIdentifier: AString;
    processIdentifier: int32_t;
    readonly gcLog: nsIFile;
    readonly ccLog: nsIFile;
}

interface nsICycleCollectorListenerType extends nsISupports {
    readonly wantAllTraces: boolean;
    disableLog: boolean;
    logSink: nsICycleCollectorLogSink;
    wantAfterProcessing: boolean;
}

interface nsIDAPTelemetryType extends nsISupports {
}

interface nsIDHCPClientType extends nsISupports {
}

interface nsIDNSAdditionalInfoType extends nsISupports {
    readonly port: int32_t;
    readonly resolverURL: ACString;
}

interface nsIDNSByTypeRecordType extends nsIDNSRecord {
    readonly type: unsigned_long;
    readonly results: TypeResult;
}

interface nsIDNSTXTRecordType extends nsISupports {
}

interface nsISVCParamType extends nsISupports {
    readonly type: uint16_t;
}

interface nsISVCParamAlpnType extends nsISupports {
}

interface nsISVCParamNoDefaultAlpnType extends nsISupports {
}

interface nsISVCParamPortType extends nsISupports {
    readonly port: uint16_t;
}

interface nsISVCParamIPv4HintType extends nsISupports {
}

interface nsISVCParamEchConfigType extends nsISupports {
    readonly echconfig: ACString;
}

interface nsISVCParamIPv6HintType extends nsISupports {
}

interface nsISVCParamODoHConfigType extends nsISupports {
    readonly ODoHConfig: ACString;
}

interface nsISVCBRecordType extends nsISupports {
    readonly priority: uint16_t;
    readonly name: ACString;
    readonly port: MaybePort;
    readonly alpn: MaybeAlpnTuple;
    readonly selectedAlpn: ACString;
    readonly echConfig: ACString;
    readonly ODoHConfig: ACString;
    readonly hasIPHintAddress: bool;
}

interface nsIDNSHTTPSSVCRecordType extends nsISupports {
    readonly hasIPAddresses: boolean;
    readonly allRecordsExcluded: boolean;
    readonly ttl: uint32_t;
}

interface nsIDNSListenerType extends nsISupports {
}

interface nsIDNSRecordType extends nsISupports {
}

interface nsIDNSAddrRecordType extends nsIDNSRecord {
    readonly canonicalName: ACString;
    readonly trrFetchDuration: double;
    readonly trrFetchDurationNetworkOnly: double;
    readonly effectiveTRRMode: unsigned_long;
    readonly ttl: uint32_t;
}

interface nsIDNSServiceType extends nsISupports {
    readonly currentTrrURI: AUTF8String;
    readonly currentTrrMode: nsIDNSService_ResolverMode;
    readonly currentTrrConfirmationState: unsigned_long;
    readonly myHostName: AUTF8String;
    readonly ODoHActivated: boolean;
}

interface nsIDOMChromeWindowType extends nsISupports {
    readonly browserDOMWindow: nsIBrowserDOMWindow;
}

interface nsIDOMEventListenerType extends nsISupports {
}

interface nsIDOMGeoPositionType extends nsISupports {
    readonly timestamp: EpochTimeStamp;
    readonly coords: nsIDOMGeoPositionCoords;
}

interface nsIDOMGeoPositionCallbackType extends nsISupports {
}

interface nsIDOMGeoPositionCoordsType extends nsISupports {
    readonly latitude: double;
    readonly longitude: double;
    readonly altitude: double;
    readonly accuracy: double;
    readonly altitudeAccuracy: double;
    readonly heading: double;
    readonly speed: double;
}

interface nsIDOMGeoPositionErrorCallbackType extends nsISupports {
}

interface nsIDOMGlobalPropertyInitializerType extends nsISupports {
}

interface nsIDOMMozBrowserFrameType extends nsISupports {
    mozbrowser: boolean;
}

interface nsIDOMProcessChildType extends nsISupports {
    readonly childID: unsigned_long_long;
    readonly canSend: boolean;
}

interface nsIDOMProcessParentType extends nsISupports {
    readonly childID: unsigned_long_long;
    readonly osPid: long;
    readonly canSend: boolean;
    readonly remoteType: ACString;
}

interface nsIDOMRequestServiceType extends nsISupports {
}

interface nsIDOMStorageManagerType extends nsISupports {
}

interface nsIDOMSessionStorageManagerType extends nsIDOMStorageManager {
}

interface nsIDOMMozWakeLockListenerType extends nsISupports {
}

interface nsIDOMWindowType extends nsISupports {
}

interface nsIDOMWindowUtilsType extends nsISupports {
    imageAnimationMode: unsigned_short;
    readonly docCharsetIsForced: boolean;
    readonly physicalMillimeterInCSSPixels: float;
    readonly lastTransactionId: unsigned_long_long;
    isFirstPaint: boolean;
    readonly parsedStyleSheets: unsigned_long;
    readonly isMozAfterPaintPending: boolean;
    readonly isInputTaskManagerSuspended: boolean;
    readonly IMEIsOpen: boolean;
    readonly IMEStatus: unsigned_long;
    readonly inputContextURI: nsIURI;
    readonly inputContextOrigin: unsigned_long;
    readonly nodeObservedByIMEContentObserver: Node;
    readonly fullZoom: float;
    readonly layerManagerType: AString;
    readonly layerManagerRemote: boolean;
    readonly isWebRenderRequested: boolean;
    readonly currentAudioBackend: AString;
    readonly currentMaxAudioChannels: unsigned_long;
    readonly currentPreferredSampleRate: unsigned_long;
    readonly displayDPI: float;
    readonly isTestControllingRefreshes: bool;
    readonly asyncPanZoomEnabled: bool;
    readonly canvasBackgroundColor: AString;
    readonly focusedInputType: AString;
    readonly focusedActionHint: AString;
    readonly focusedInputMode: AString;
    readonly focusedAutocapitalize: AString;
    readonly paintingSuppressed: boolean;
    readonly isHandlingUserInput: boolean;
    readonly millisSinceLastUserInput: double;
    readonly isParentWindowMainWidgetVisible: boolean;
    readonly restyleGeneration: unsigned_long_long;
    readonly framesConstructed: unsigned_long_long;
    readonly framesReflowed: unsigned_long_long;
    readonly refreshDriverHasPendingTick: bool;
    readonly gpuProcessPid: int32_t;
    systemFont: ACString;
    readonly paintCount: unsigned_long_long;
    readonly effectivelyThrottlesFrameRequests: bool;
    readonly webrtcRawDeviceId: AString;
    readonly suspendedByBrowsingContextGroup: bool;
    readonly hasScrollLinkedEffect: bool;
    readonly orientationLock: uint32_t;
}

interface nsITranslationNodeListType extends nsISupports {
    readonly length: unsigned_long;
}

interface nsIJSRAIIHelperType extends nsISupports {
}

interface nsIDOMXULButtonElementType extends nsIDOMXULControlElement {
    type: AString;
    open: boolean;
    checked: boolean;
    group: AString;
}

interface nsIDOMXULCommandDispatcherType extends nsISupports {
    focusedElement: Element;
    focusedWindow: mozIDOMWindowProxy;
}

interface nsIDOMXULContainerItemElementType extends nsISupports {
    readonly parentContainer: Element;
}

interface nsIDOMXULContainerElementType extends nsIDOMXULContainerItemElement {
}

interface nsIDOMXULControlElementType extends nsISupports {
    disabled: boolean;
}

interface nsIDOMXULMenuListElementType extends nsIDOMXULSelectControlElement {
    editable: boolean;
    open: boolean;
    readonly label: AString;
    crop: AString;
    image: AString;
    readonly inputField: Element;
}

interface nsIDOMXULMultiSelectControlElementType extends nsIDOMXULSelectControlElement {
    selType: AString;
    currentItem: Element;
    currentIndex: long;
    readonly selectedItems: NodeList;
    readonly selectedCount: long;
}

interface nsIDOMXULRadioGroupElementType extends nsISupports {
    focusedItem: Element;
}

interface nsIDOMXULRelatedElementType extends nsISupports {
}

interface nsIDOMXULSelectControlElementType extends nsIDOMXULControlElement {
    selectedItem: Element;
    selectedIndex: long;
    value: AString;
    readonly itemCount: unsigned_long;
}

interface nsIDOMXULSelectControlItemElementType extends nsISupports {
    disabled: boolean;
    crop: AString;
    image: AString;
    label: AString;
    accessKey: AString;
    command: AString;
    value: AString;
    readonly selected: boolean;
    readonly control: Element;
}

interface nsINetDashboardCallbackType extends nsISupports {
}

interface nsIDashboardType extends nsISupports {
    enableLogging: boolean;
}

interface nsIDashboardEventNotifierType extends nsISupports {
}

interface nsIDebug2Type extends nsISupports {
    readonly isDebugBuild: boolean;
    readonly assertionCount: long;
    readonly isDebuggerAttached: bool;
}

interface nsIDeviceSensorDataType extends nsISupports {
    readonly type: unsigned_long;
    readonly x: double;
    readonly y: double;
    readonly z: double;
}

interface nsIDeviceSensorsType extends nsISupports {
}

interface nsIDialogParamBlockType extends nsISupports {
    objects: nsIMutableArray;
}

interface nsIDirIndexType extends nsISupports {
    type: unsigned_long;
    contentType: ACString;
    location: ACString;
    description: AString;
    size: long_long;
    lastModified: PRTime;
}

interface nsIDirIndexListenerType extends nsISupports {
}

interface nsIDirIndexParserType extends nsIStreamListener {
    listener: nsIDirIndexListener;
    readonly comment: string;
    encoding: string;
}

interface nsIDirectTaskDispatcherType extends nsISupports {
}

interface nsIDirectoryEnumeratorType extends nsISimpleEnumerator {
    readonly nextFile: nsIFile;
}

interface nsIDirectoryServiceProviderType extends nsISupports {
}

interface nsIDirectoryServiceProvider2Type extends nsIDirectoryServiceProvider {
}

interface nsIDirectoryServiceType extends nsISupports {
}

interface nsIDisplayInfoType extends nsISupports {
    readonly id: long;
    readonly connected: boolean;
}

interface nsIDocShellType extends nsIDocShellTreeItem {
    readonly presContext: nsPresContext;
    readonly presShell: PresShell;
    readonly eldestPresShell: PresShell;
    readonly contentViewer: nsIContentViewer;
    readonly outerWindowID: unsigned_long_long;
    chromeEventHandler: EventTarget;
    customUserAgent: AString;
    cssErrorReportingEnabled: boolean;
    allowPlugins: boolean;
    allowMetaRedirects: boolean;
    allowSubframes: boolean;
    allowImages: boolean;
    allowMedia: boolean;
    allowDNSPrefetch: boolean;
    allowWindowControl: boolean;
    allowContentRetargeting: boolean;
    allowContentRetargetingOnChildren: boolean;
    appType: nsIDocShell_AppType;
    allowAuth: boolean;
    zoom: float;
    readonly busyFlags: nsIDocShell_BusyFlags;
    loadType: unsigned_long;
    defaultLoadFlags: nsLoadFlags;
    readonly isExecutingOnLoadHandler: boolean;
    layoutHistoryState: nsILayoutHistoryState;
    readonly loadURIDelegate: nsILoadURIDelegate;
    readonly restoringDocument: boolean;
    useErrorPages: boolean;
    readonly failedChannel: nsIChannel;
    readonly previousEntryIndex: long;
    readonly loadedEntryIndex: long;
    readonly currentDocumentChannel: nsIChannel;
    readonly isInUnload: boolean;
    readonly historyID: nsIDRef;
    isAppTab: boolean;
    readonly charset: ACString;
    recordProfileTimelineMarkers: boolean;
    readonly isTopLevelContentDocShell: boolean;
    readonly asyncPanZoomEnabled: bool;
    readonly mayEnableCharacterEncodingMenu: boolean;
    editor: nsIEditor;
    readonly editable: boolean;
    readonly hasEditingSession: boolean;
    deviceSizeIsPageSize: boolean;
    readonly hasLoadedNonBlankURI: boolean;
    windowDraggingAllowed: boolean;
    currentScrollRestorationIsManual: boolean;
    readonly editingSession: nsIEditingSession;
    readonly browserChild: nsIBrowserChild;
    metaViewportOverride: nsIDocShell_MetaViewportOverride;
    useTrackingProtection: boolean;
    readonly isForceReloading: bool;
    readonly messageManager: ContentFrameMessageManager;
    readonly isAttemptingToNavigate: boolean;
    readonly isNavigating: boolean;
}

interface nsIDocShellTreeItemType extends nsISupports {
    name: AString;
    readonly itemType: long;
    readonly parent: nsIDocShellTreeItem;
    readonly sameTypeParent: nsIDocShellTreeItem;
    readonly rootTreeItem: nsIDocShellTreeItem;
    readonly sameTypeRootTreeItem: nsIDocShellTreeItem;
    readonly treeOwner: nsIDocShellTreeOwner;
    readonly childCount: long;
    readonly browsingContext: BrowsingContext;
    readonly domWindow: mozIDOMWindowProxy;
}

interface nsIDocShellTreeOwnerType extends nsISupports {
    readonly primaryContentShell: nsIDocShellTreeItem;
    readonly primaryRemoteTab: nsIRemoteTab;
    readonly primaryContentBrowsingContext: BrowsingContext;
    readonly tabCount: unsigned_long;
    readonly hasPrimaryContent: bool;
}

interface nsIDocumentEncoderNodeFixupType extends nsISupports {
}

interface nsIDocumentEncoderType extends nsISupports {
    readonly mimeType: AString;
}

interface nsIDocumentLoaderType extends nsISupports {
    readonly container: nsISupports;
    readonly loadGroup: nsILoadGroup;
    readonly documentChannel: nsIChannel;
}

interface nsIDocumentLoaderFactoryType extends nsISupports {
}

interface nsIDocumentStateListenerType extends nsISupports {
}

interface nsIDomainPolicyType extends nsISupports {
    readonly blocklist: nsIDomainSet;
    readonly superBlocklist: nsIDomainSet;
    readonly allowlist: nsIDomainSet;
    readonly superAllowlist: nsIDomainSet;
}

interface nsIDomainSetType extends nsISupports {
}

interface nsIDownloaderType extends nsIStreamListener {
}

interface nsIDownloadObserverType extends nsISupports {
}

interface nsIDragServiceType extends nsISupports {
}

interface nsIDragSessionType extends nsISupports {
    canDrop: boolean;
    onlyChromeDrop: boolean;
    dragAction: unsigned_long;
    readonly numDropItems: unsigned_long;
    sourceWindowContext: WindowContext;
    readonly sourceNode: Node;
    triggeringPrincipal: nsIPrincipal;
    csp: nsIContentSecurityPolicy;
    dataTransfer: DataTransfer;
}

interface nsIDroppedLinkItemType extends nsISupports {
    readonly url: AString;
    readonly name: AString;
    readonly type: AString;
}

interface nsIDroppedLinkHandlerType extends nsISupports {
}

interface nsIE10SUtilsType extends nsISupports {
}

interface nsIEarlyHintObserverType extends nsISupports {
}

interface nsIEdgeMigrationUtilsType extends nsISupports {
}

interface nsIEditActionListenerType extends nsISupports {
}

interface nsIEditingSessionType extends nsISupports {
    readonly editorStatus: unsigned_long;
}

interface nsIEditorType extends nsISupports {
    readonly selection: Selection;
    flags: unsigned_long;
    contentsMIMEType: AString;
    readonly isDocumentEditable: boolean;
    readonly isSelectionEditable: boolean;
    readonly document: Document;
    readonly rootElement: Element;
    readonly selectionController: nsISelectionController;
    readonly documentIsEmpty: boolean;
    readonly documentModified: boolean;
    documentCharacterSet: ACString;
    readonly undoRedoEnabled: boolean;
    readonly canUndo: boolean;
    readonly canRedo: boolean;
    readonly composing: boolean;
    readonly unmaskedStart: unsigned_long;
    readonly unmaskedEnd: unsigned_long;
    readonly autoMaskingEnabled: boolean;
    readonly passwordMask: AString;
    readonly textLength: unsigned_long;
    wrapWidth: long;
    newlineHandling: long;
}

interface nsIEditorMailSupportType extends nsISupports {
}

interface nsIEditorSpellCheckType extends nsISupports {
}

interface nsIEditorSpellCheckCallbackType extends nsISupports {
}

interface nsIEffectiveTLDServiceType extends nsISupports {
}

interface nsIEmbeddingSiteWindowType extends nsISupports {
    visibility: boolean;
    title: AString;
    readonly siteWindow: voidPtr;
}

interface nsIEncodedChannelType extends nsISupports {
    readonly contentEncodings: nsIUTF8StringEnumerator;
    applyConversion: boolean;
}

interface nsIEnterprisePoliciesType extends nsISupports {
    readonly status: short;
}

interface nsIEnvironmentType extends nsISupports {
}

interface nsIEventListenerChangeType extends nsISupports {
    readonly target: EventTarget;
    readonly countOfEventListenerChangesAffectingAccessibility: uint32_t;
}

interface nsIListenerChangeListenerType extends nsISupports {
}

interface nsIEventListenerInfoType extends nsISupports {
    readonly type: AString;
    readonly capturing: boolean;
    readonly allowsUntrusted: boolean;
    readonly inSystemEventGroup: boolean;
    enabled: boolean;
    readonly listenerObject: jsval;
}

interface nsIEventListenerServiceType extends nsISupports {
}

interface nsIEventSourceEventListenerType extends nsISupports {
}

interface nsIEventSourceEventServiceType extends nsISupports {
}

interface nsIEventTargetType extends nsISupports {
}

interface nsIStackFrameType extends nsISupports {
    readonly filename: AString;
    readonly name: AString;
    readonly sourceId: int32_t;
    readonly lineNumber: int32_t;
    readonly columnNumber: int32_t;
    readonly sourceLine: AUTF8String;
    readonly asyncCause: AString;
    readonly asyncCaller: nsIStackFrame;
    readonly caller: nsIStackFrame;
    readonly formattedStack: AString;
    readonly nativeSavedFrame: jsval;
}

interface nsIExceptionType extends nsISupports {
}

interface nsIExpatSinkType extends nsISupports {
}

interface nsIExternalHelperAppServiceType extends nsISupports {
}

interface nsPIExternalAppLauncherType extends nsISupports {
}

interface nsIHelperAppLauncherType extends nsICancelable {
    readonly MIMEInfo: nsIMIMEInfo;
    readonly source: nsIURI;
    readonly suggestedFileName: AString;
    readonly targetFile: nsIFile;
    readonly targetFileIsExecutable: boolean;
    readonly timeDownloadStarted: PRTime;
    readonly contentLength: int64_t;
    readonly browsingContextId: uint64_t;
}

interface nsIExternalProtocolHandlerType extends nsIProtocolHandler {
}

interface nsIExternalProtocolServiceType extends nsISupports {
}

interface nsIFOGType extends nsISupports {
}

interface nsIFactoryType extends nsISupports {
}

interface nsIFaviconServiceType extends nsISupports {
    readonly defaultFavicon: nsIURI;
    readonly defaultFaviconMimeType: AUTF8String;
}

interface nsIFaviconDataCallbackType extends nsISupports {
}

interface nsIFileType extends nsISupports {
    leafName: AString;
    nativeLeafName: ACString;
    readonly displayName: AString;
    permissions: unsigned_long;
    permissionsOfLink: unsigned_long;
    lastAccessedTime: PRTime;
    lastAccessedTimeOfLink: PRTime;
    lastModifiedTime: PRTime;
    lastModifiedTimeOfLink: PRTime;
    readonly creationTime: PRTime;
    readonly creationTimeOfLink: PRTime;
    fileSize: int64_t;
    readonly fileSizeOfLink: int64_t;
    readonly target: AString;
    readonly nativeTarget: ACString;
    readonly path: AString;
    readonly parent: nsIFile;
    readonly directoryEntries: nsIDirectoryEnumerator;
    readonly diskSpaceAvailable: int64_t;
    readonly diskCapacity: int64_t;
    persistentDescriptor: ACString;
}

interface nsIFileChannelType extends nsISupports {
    readonly file: nsIFile;
}

interface nsIFilePickerShownCallbackType extends nsISupports {
}

interface nsIFilePickerType extends nsISupports {
    defaultString: AString;
    defaultExtension: AString;
    filterIndex: long;
    displayDirectory: nsIFile;
    displaySpecialDirectory: AString;
    readonly file: nsIFile;
    readonly fileURL: nsIURI;
    readonly files: nsISimpleEnumerator;
    readonly domFileOrDirectory: nsISupports;
    readonly domFileOrDirectoryEnumerator: nsISimpleEnumerator;
    addToRecentDocs: boolean;
    readonly mode: short;
    okButtonLabel: AString;
    capture: short;
}

interface nsIFileProtocolHandlerType extends nsIProtocolHandler {
}

interface nsIFileInputStreamType extends nsIInputStream {
}

interface nsIFileOutputStreamType extends nsIOutputStream {
}

interface nsIFileRandomAccessStreamType extends nsIRandomAccessStream {
}

interface nsIFileMetadataType extends nsISupports {
    readonly size: long_long;
    readonly lastModified: long_long;
}

interface nsIAsyncFileMetadataType extends nsIFileMetadata {
}

interface nsIFileMetadataCallbackType extends nsISupports {
}

interface nsIFileURLType extends nsIURL {
    readonly file: nsIFile;
}

interface nsIFileURLMutatorType extends nsISupports {
}

interface nsIFinalizationWitnessServiceType extends nsISupports {
}

interface nsIFindType extends nsISupports {
    findBackwards: boolean;
    caseSensitive: boolean;
    entireWord: boolean;
    matchDiacritics: boolean;
}

interface nsIFindServiceType extends nsISupports {
    searchString: AString;
    replaceString: AString;
    findBackwards: boolean;
    wrapFind: boolean;
    entireWord: boolean;
    matchCase: boolean;
    matchDiacritics: boolean;
}

interface nsIFocusManagerType extends nsISupports {
    readonly activeWindow: mozIDOMWindowProxy;
    readonly activeBrowsingContext: BrowsingContext;
    focusedWindow: mozIDOMWindowProxy;
    readonly focusedContentBrowsingContext: BrowsingContext;
    readonly focusedElement: Element;
}

interface nsIFontEnumeratorType extends nsISupports {
}

interface nsIFontLoadCompleteCallbackType extends nsISupports {
}

interface nsIForcePendingChannelType extends nsISupports {
}

interface nsIFormAutoCompleteType extends nsISupports {
}

interface nsIFormAutoCompleteObserverType extends nsISupports {
}

interface nsIFormFillControllerType extends nsISupports {
    readonly focusedInput: HTMLInputElement;
    readonly passwordPopupAutomaticallyOpened: boolean;
}

interface nsIFormPOSTActionChannelType extends nsIUploadChannel {
}

interface nsIFormatConverterType extends nsISupports {
}

interface nsIGIOMimeAppType extends nsIHandlerApp {
    readonly id: AUTF8String;
    readonly command: AUTF8String;
    readonly expectsURIs: long;
    readonly supportedURISchemes: nsIUTF8StringEnumerator;
}

interface nsIGIOServiceType extends nsISupports {
}

interface nsIGNOMEShellServiceType extends nsIShellService {
    readonly canSetDesktopBackground: boolean;
}

interface nsIGSettingsCollectionType extends nsISupports {
}

interface nsIGSettingsServiceType extends nsISupports {
}

interface nsIGeolocationUpdateType extends nsISupports {
}

interface nsIGeolocationProviderType extends nsISupports {
}

interface nsIGfxInfoType extends nsISupports {
    readonly D2DEnabled: boolean;
    readonly DWriteEnabled: boolean;
    readonly EmbeddedInFirefoxReality: boolean;
    readonly AzureCanvasBackend: AString;
    readonly AzureContentBackend: AString;
    readonly usingGPUProcess: boolean;
    readonly hasBattery: boolean;
    readonly DWriteVersion: AString;
    readonly cleartypeParameters: AString;
    readonly windowProtocol: AString;
    readonly desktopEnvironment: AString;
    readonly testType: AString;
    readonly ContentBackend: AString;
    readonly isHeadless: boolean;
    readonly TargetFrameRate: unsigned_long;
    readonly CodecSupportInfo: ACString;
    readonly adapterDescription: AString;
    readonly adapterDescription2: AString;
    readonly adapterDriver: AString;
    readonly adapterDriver2: AString;
    readonly adapterVendorID: AString;
    readonly adapterVendorID2: AString;
    readonly adapterDeviceID: AString;
    readonly adapterDeviceID2: AString;
    readonly adapterSubsysID: AString;
    readonly adapterSubsysID2: AString;
    readonly adapterRAM: unsigned_long;
    readonly adapterRAM2: unsigned_long;
    readonly adapterDriverVendor: AString;
    readonly adapterDriverVendor2: AString;
    readonly adapterDriverVersion: AString;
    readonly adapterDriverVersion2: AString;
    readonly adapterDriverDate: AString;
    readonly adapterDriverDate2: AString;
    readonly isGPU2Active: boolean;
    readonly drmRenderDevice: ACString;
}

interface nsIGfxInfoDebugType extends nsISupports {
}

interface nsIGleanBooleanType extends nsISupports {
}

interface nsIGleanDatetimeType extends nsISupports {
}

interface nsIGleanCounterType extends nsISupports {
}

interface nsIGleanTimingDistributionType extends nsISupports {
}

interface nsIGleanMemoryDistributionType extends nsISupports {
}

interface nsIGleanCustomDistributionType extends nsISupports {
}

interface nsIGleanPingTestCallbackType extends nsISupports {
}

interface nsIGleanPingType extends nsISupports {
}

interface nsIGleanStringType extends nsISupports {
}

interface nsIGleanStringListType extends nsISupports {
}

interface nsIGleanTimespanType extends nsISupports {
}

interface nsIGleanUuidType extends nsISupports {
}

interface nsIGleanEventType extends nsISupports {
}

interface nsIGleanQuantityType extends nsISupports {
}

interface nsIGleanDenominatorType extends nsISupports {
}

interface nsIGleanNumeratorType extends nsISupports {
}

interface nsIGleanRateType extends nsISupports {
}

interface nsIGleanUrlType extends nsISupports {
}

interface nsIGtkTaskbarProgressType extends nsITaskbarProgress {
}

interface nsIHTMLAbsPosEditorType extends nsISupports {
    absolutePositioningEnabled: boolean;
    snapToGridEnabled: boolean;
    gridSize: unsigned_long;
}

interface nsIHTMLEditorType extends nsISupports {
    isCSSEnabled: boolean;
    returnInParagraphCreatesNewParagraph: boolean;
}

interface nsIHTMLInlineTableEditorType extends nsISupports {
    inlineTableEditingEnabled: boolean;
}

interface nsIHTMLObjectResizerType extends nsISupports {
    objectResizingEnabled: boolean;
}

interface nsIHandlerServiceType extends nsISupports {
}

interface nsIHangDetailsType extends nsISupports {
    readonly wasPersisted: bool;
    readonly duration: double;
    readonly thread: ACString;
    readonly runnableName: ACString;
    readonly process: ACString;
    readonly remoteType: AUTF8String;
    readonly stack: jsval;
    readonly modules: jsval;
    readonly annotations: jsval;
}

interface nsIHangReportType extends nsISupports {
    readonly scriptBrowser: Element;
    readonly scriptFileName: ACString;
    readonly hangDuration: double;
    readonly addonId: AString;
    readonly childID: unsigned_long_long;
}

interface nsIHapticFeedbackType extends nsISupports {
}

interface nsIHelperAppLauncherDialogType extends nsISupports {
}

interface nsIHttpActivityObserverType extends nsISupports {
    readonly isActive: boolean;
}

interface nsIHttpActivityDistributorType extends nsIHttpActivityObserver {
    observeProxyResponse: boolean;
    observeConnection: boolean;
}

interface nsIHttpAuthManagerType extends nsISupports {
}

interface nsIHttpAuthenticableChannelType extends nsIProxiedChannel {
    readonly isSSL: boolean;
    readonly proxyMethodIsConnect: boolean;
    readonly loadFlags: nsLoadFlags;
    readonly URI: nsIURI;
    readonly loadGroup: nsILoadGroup;
    readonly notificationCallbacks: nsIInterfaceRequestor;
    readonly requestMethod: ACString;
    readonly serverResponseHeader: ACString;
    readonly proxyChallenges: ACString;
    readonly WWWChallenges: ACString;
}

interface nsIHttpAuthenticatorType extends nsISupports {
    readonly authFlags: unsigned_long;
}

interface nsIHttpAuthenticatorCallbackType extends nsISupports {
}

interface nsIHttpChannelType extends nsIIdentChannel {
    requestMethod: ACString;
    referrerInfo: nsIReferrerInfo;
    readonly protocolVersion: ACString;
    readonly transferSize: uint64_t;
    readonly requestSize: uint64_t;
    readonly decodedBodySize: uint64_t;
    readonly encodedBodySize: uint64_t;
    allowSTS: boolean;
    redirectionLimit: unsigned_long;
    readonly responseStatus: unsigned_long;
    readonly responseStatusText: ACString;
    readonly requestSucceeded: boolean;
    isMainDocumentChannel: boolean;
    requestContextID: uint64_t;
    topLevelContentWindowId: uint64_t;
    topBrowsingContextId: uint64_t;
}

interface nsIHttpChannelAuthProviderType extends nsICancelable {
}

interface nsIHttpChannelChildType extends nsISupports {
    readonly clientSetRequestHeaders: RequestHeaderTuples;
}

interface nsIHttpUpgradeListenerType extends nsISupports {
}

interface nsIHttpChannelInternalType extends nsISupports {
    documentURI: nsIURI;
    readonly isAuthChannel: bool;
    thirdPartyFlags: unsigned_long;
    forceAllowThirdPartyCookie: boolean;
    channelIsForDownload: boolean;
    readonly localAddress: AUTF8String;
    readonly localPort: int32_t;
    readonly remoteAddress: AUTF8String;
    readonly remotePort: int32_t;
    readonly onlyConnect: boolean;
    allowSpdy: boolean;
    allowHttp3: boolean;
    responseTimeoutEnabled: boolean;
    initialRwin: unsigned_long;
    readonly apiRedirectToURI: nsIURI;
    allowAltSvc: boolean;
    beConservative: boolean;
    bypassProxy: boolean;
    isTRRServiceChannel: boolean;
    readonly isResolvedByTRR: boolean;
    readonly isLoadedBySocketProcess: boolean;
    isOCSP: boolean;
    tlsFlags: unsigned_long;
    readonly lastModifiedTime: PRTime;
    corsIncludeCredentials: boolean;
    requestMode: RequestMode;
    redirectMode: unsigned_long;
    fetchCacheMode: unsigned_long;
    readonly topWindowURI: nsIURI;
    readonly proxyURI: nsIURI;
    blockAuthPrompt: boolean;
    integrityMetadata: AString;
    readonly connectionInfoHashKey: ACString;
    lastRedirectFlags: unsigned_long;
    navigationStartTimeStamp: TimeStamp;
    readonly crossOriginOpenerPolicy: nsILoadInfo_CrossOriginOpenerPolicy;
    readonly supportsHTTP3: boolean;
    readonly hasHTTPSRR: boolean;
    earlyHintPreloaderId: unsigned_long_long;
    readonly isProxyUsed: boolean;
}

interface nsIHttpHeaderVisitorType extends nsISupports {
}

interface nsIHttpProtocolHandlerType extends nsIProxiedProtocolHandler {
    readonly userAgent: ACString;
    readonly rfpUserAgent: ACString;
    readonly appName: ACString;
    readonly appVersion: ACString;
    readonly platform: ACString;
    readonly oscpu: ACString;
    readonly misc: ACString;
}

interface nsIHttpPushListenerType extends nsISupports {
}

interface nsIHttpServerType extends nsISupports {
    readonly identity: nsIHttpServerIdentity;
}

interface nsIHttpServerStoppedCallbackType extends nsISupports {
}

interface nsIHttpServerIdentityType extends nsISupports {
    readonly primaryScheme: string;
    readonly primaryHost: string;
    readonly primaryPort: long;
}

interface nsIHttpRequestHandlerType extends nsISupports {
}

interface nsIHttpRequestType extends nsISupports {
    readonly method: string;
    readonly scheme: string;
    readonly host: string;
    readonly port: unsigned_long;
    readonly path: string;
    readonly queryString: string;
    readonly httpVersion: string;
    readonly headers: nsISimpleEnumerator;
    readonly bodyInputStream: nsIInputStream;
}

interface nsIHttpResponseType extends nsISupports {
    readonly bodyOutputStream: nsIOutputStream;
}

interface nsIHttpsOnlyModePermissionType extends nsISupports {
}

interface nsIIDBPermissionsRequestType extends nsISupports {
    readonly browserElement: Element;
    readonly responseObserver: nsIObserver;
}

interface nsIIDNServiceType extends nsISupports {
}

interface nsIINIParserType extends nsISupports {
}

interface nsIINIParserWriterType extends nsISupports {
}

interface nsIINIParserFactoryType extends nsISupports {
}

interface nsIIOServiceType extends nsISupports {
    offline: boolean;
    readonly connectivity: boolean;
    manageOfflineStatus: boolean;
    readonly socketProcessLaunched: boolean;
    readonly socketProcessId: unsigned_long_long;
}

interface nsIIOServiceInternalType extends nsISupports {
}

interface nsIIOUtilType extends nsISupports {
}

interface nsIMozIconURIType extends nsIURI {
    readonly iconURL: nsIURL;
    readonly imageSize: unsigned_long;
    readonly stockIcon: ACString;
    readonly iconSize: ACString;
    readonly iconState: ACString;
    readonly contentType: ACString;
    readonly fileExtension: ACString;
}

interface nsIIdentityCredentialPromptServiceType extends nsISupports {
}

interface nsIIdentityCredentialStorageServiceType extends nsISupports {
}

interface nsIIdlePeriodType extends nsISupports {
}

interface nsIImageLoadingContentType extends imgINotificationObserver {
    readonly currentURI: nsIURI;
    readonly syncDecodingHint: boolean;
}

interface nsIIncrementalDownloadType extends nsIRequest {
    readonly URI: nsIURI;
    readonly finalURI: nsIURI;
    readonly destination: nsIFile;
    readonly totalSize: long_long;
    readonly currentSize: long_long;
}

interface nsIIncrementalStreamLoaderObserverType extends nsISupports {
}

interface nsIIncrementalStreamLoaderType extends nsIStreamListener {
    readonly numBytesRead: unsigned_long;
    readonly request: nsIRequest;
}

interface nsIInlineSpellCheckerType extends nsISupports {
    readonly spellChecker: nsIEditorSpellCheck;
    enableRealTimeSpell: boolean;
    readonly spellCheckPending: boolean;
}

interface nsIInputListAutoCompleteType extends nsISupports {
}

interface nsIInputStreamType extends nsISupports {
}

interface nsIInputStreamChannelType extends nsISupports {
    contentStream: nsIInputStream;
    srcdocData: AString;
    readonly isSrcdocChannel: boolean;
    baseURI: nsIURI;
}

interface nsIInputStreamLengthType extends nsISupports {
}

interface nsIAsyncInputStreamLengthType extends nsISupports {
}

interface nsIInputStreamLengthCallbackType extends nsISupports {
}

interface nsIInputStreamPriorityType extends nsISupports {
    priority: unsigned_long;
}

interface nsIInputStreamPumpType extends nsIRequest {
}

interface nsIInputStreamTeeType extends nsIInputStream {
    source: nsIInputStream;
    sink: nsIOutputStream;
    eventTarget: nsIEventTarget;
}

interface nsIInterceptionInfoType extends nsISupports {
}

interface nsIInterfaceRequestorType extends nsISupports {
}

interface nsIJARChannelType extends nsIChannel {
    jarFile: nsIFile;
    readonly zipEntry: nsIZipEntry;
}

interface nsIJARURIType extends nsIURL {
    readonly JARFile: nsIURI;
    readonly JAREntry: AUTF8String;
}

interface nsIJARURIMutatorType extends nsISupports {
}

interface nsIJSInspectorType extends nsISupports {
    readonly eventLoopNestLevel: unsigned_long;
    readonly lastNestRequestor: jsval;
}

interface nsIJumpListCommittedCallbackType extends nsISupports {
}

interface nsIJumpListBuilderType extends nsISupports {
    readonly available: short;
    readonly isListCommitted: boolean;
    readonly maxListItems: short;
}

interface nsIJumpListItemType extends nsISupports {
    readonly type: short;
}

interface nsIJumpListSeparatorType extends nsIJumpListItem {
}

interface nsIJumpListLinkType extends nsIJumpListItem {
    uri: nsIURI;
    uriTitle: AString;
    readonly uriHash: ACString;
}

interface nsIJumpListShortcutType extends nsIJumpListItem {
    app: nsILocalHandlerApp;
    iconIndex: long;
    faviconPageUri: nsIURI;
}

interface nsIKeyValueServiceType extends nsISupports {
}

interface nsIKeyValueDatabaseType extends nsISupports {
}

interface nsIKeyValuePairType extends nsISupports {
    readonly key: AUTF8String;
    readonly value: nsIVariant;
}

interface nsIKeyValueEnumeratorType extends nsISupports {
}

interface nsIKeyValueDatabaseCallbackType extends nsISupports {
}

interface nsIKeyValueEnumeratorCallbackType extends nsISupports {
}

interface nsIKeyValuePairCallbackType extends nsISupports {
}

interface nsIKeyValueVariantCallbackType extends nsISupports {
}

interface nsIKeyValueVoidCallbackType extends nsISupports {
}

interface nsIKeychainMigrationUtilsType extends nsISupports {
}

interface nsILayoutDebuggingToolsType extends nsISupports {
}

interface nsILayoutHistoryStateType extends nsISupports {
    readonly hasStates: boolean;
}

interface nsILineInputStreamType extends nsISupports {
}

interface nsILoadContextType extends nsISupports {
    readonly associatedWindow: mozIDOMWindowProxy;
    readonly topWindow: mozIDOMWindowProxy;
    readonly topFrameElement: Element;
    readonly isContent: boolean;
    usePrivateBrowsing: boolean;
    readonly useRemoteTabs: boolean;
    readonly useRemoteSubframes: boolean;
    useTrackingProtection: boolean;
    readonly originAttributes: jsval;
}

interface nsILoadContextInfoType extends nsISupports {
    readonly isPrivate: boolean;
    readonly isAnonymous: boolean;
    readonly originAttributes: jsval;
}

interface nsILoadContextInfoFactoryType extends nsISupports {
    readonly default: nsILoadContextInfo;
    readonly private: nsILoadContextInfo;
    readonly anonymous: nsILoadContextInfo;
}

interface nsILoadGroupType extends nsIRequest {
    groupObserver: nsIRequestObserver;
    defaultLoadRequest: nsIRequest;
    readonly requests: nsISimpleEnumerator;
    readonly activeCount: unsigned_long;
    notificationCallbacks: nsIInterfaceRequestor;
    readonly requestContextID: unsigned_long_long;
    defaultLoadFlags: nsLoadFlags;
    readonly isBrowsingContextDiscarded: boolean;
}

interface nsILoadGroupChildType extends nsISupports {
    parentLoadGroup: nsILoadGroup;
    readonly childLoadGroup: nsILoadGroup;
    readonly rootLoadGroup: nsILoadGroup;
}

interface nsILoadInfoType extends nsISupports {
    readonly loadingPrincipal: nsIPrincipal;
    readonly triggeringPrincipal: nsIPrincipal;
    triggeringRemoteType: AUTF8String;
    principalToInherit: nsIPrincipal;
    readonly loadingDocument: Document;
    readonly loadingContext: nsISupports;
    readonly securityFlags: nsSecurityFlags;
    readonly sandboxFlags: unsigned_long;
    triggeringSandboxFlags: unsigned_long;
    readonly securityMode: unsigned_long;
    skipContentSniffing: boolean;
    httpsOnlyStatus: unsigned_long;
    hasValidUserGestureActivation: boolean;
    allowDeprecatedSystemRequests: boolean;
    parserCreatedScript: boolean;
    isUserTriggeredSave: boolean;
    isInDevToolsContext: boolean;
    isInThirdPartyContext: boolean;
    isThirdPartyContextToTopWindow: boolean;
    readonly cookiePolicy: unsigned_long;
    cookieJarSettings: nsICookieJarSettings;
    storagePermission: nsILoadInfo_StoragePermissionState;
    isMetaRefresh: boolean;
    readonly forceInheritPrincipal: boolean;
    readonly forceInheritPrincipalOverruleOwner: boolean;
    readonly loadingSandboxed: boolean;
    readonly aboutBlankInherits: boolean;
    readonly allowChrome: boolean;
    readonly disallowScript: boolean;
    readonly dontFollowRedirects: boolean;
    readonly loadErrorPage: boolean;
    isFormSubmission: boolean;
    readonly externalContentPolicyType: nsContentPolicyType;
    sendCSPViolationEvents: boolean;
    readonly internalContentPolicyType: nsContentPolicyType;
    readonly blockAllMixedContent: boolean;
    readonly upgradeInsecureRequests: boolean;
    readonly browserUpgradeInsecureRequests: boolean;
    browserDidUpgradeInsecureRequests: boolean;
    readonly browserWouldUpgradeInsecureRequests: boolean;
    forceAllowDataURI: boolean;
    allowInsecureRedirectToDataURI: boolean;
    skipContentPolicyCheckForWebRequest: boolean;
    originalFrameSrcLoad: boolean;
    readonly forceInheritPrincipalDropped: boolean;
    readonly innerWindowID: unsigned_long_long;
    readonly browsingContextID: unsigned_long_long;
    readonly browsingContext: BrowsingContext;
    readonly frameBrowsingContextID: unsigned_long_long;
    readonly frameBrowsingContext: BrowsingContext;
    readonly targetBrowsingContextID: unsigned_long_long;
    readonly targetBrowsingContext: BrowsingContext;
    originAttributes: jsval;
    initialSecurityCheckDone: boolean;
    loadTriggeredFromExternal: boolean;
    readonly serviceWorkerTaintingSynthesized: boolean;
    readonly redirectChainIncludingInternalRedirects: jsval;
    readonly redirectChain: jsval;
    readonly forcePreflight: boolean;
    readonly isPreflight: boolean;
    readonly tainting: unsigned_long;
    readonly isTopLevelLoad: boolean;
    resultPrincipalURI: nsIURI;
    channelCreationOriginalURI: nsIURI;
    readonly topLevelPrincipal: nsIPrincipal;
    documentHasUserInteracted: boolean;
    allowListFutureDocumentsCreatedFromThisRedirectChain: boolean;
    needForCheckingAntiTrackingHeuristic: boolean;
    cspNonce: AString;
    requestBlockingReason: unsigned_long;
    cspEventListener: nsICSPEventListener;
    readonly isFromProcessingFrameAttributes: boolean;
    loadingEmbedderPolicy: nsILoadInfo_CrossOriginEmbedderPolicy;
    isOriginTrialCoepCredentiallessEnabledForTopLevel: boolean;
    isMediaRequest: boolean;
    isMediaInitialRequest: boolean;
    isFromObjectOrEmbed: boolean;
    readonly shouldSkipCheckForBrokenURLOrZeroSized: boolean;
    unstrippedURI: nsIURI;
}

interface nsILoadURIDelegateType extends nsISupports {
}

interface nsILocalFileMacType extends nsIFile {
    readonly fileSizeWithResFork: int64_t;
    fileType: OSType;
    fileCreator: OSType;
    readonly bundleDisplayName: AString;
    readonly bundleIdentifier: AUTF8String;
    readonly bundleContentsLastModifiedTime: int64_t;
}

interface nsILocalFileWinType extends nsIFile {
    readonly canonicalPath: AString;
    readOnly: bool;
    useDOSDevicePathSyntax: boolean;
}

interface nsILocalStorageManagerType extends nsISupports {
    readonly nextGenLocalStorageEnabled: boolean;
}

interface nsILoginAutoCompleteSearchType extends nsISupports {
}

interface nsILoginDetectionServiceType extends nsISupports {
}

interface nsILoginInfoType extends nsISupports {
    readonly displayOrigin: AString;
    origin: AString;
    hostname: AString;
    formActionOrigin: AString;
    formSubmitURL: AString;
    httpRealm: AString;
    username: AString;
    usernameField: AString;
    password: AString;
    passwordField: AString;
}

interface nsILoginSearchCallbackType extends nsISupports {
}

interface nsILoginManagerType extends nsISupports {
    readonly initializationPromise: Promise;
    readonly uiBusy: boolean;
    readonly isLoggedIn: boolean;
}

interface nsILoginManagerAuthPrompterType extends nsISupports {
    browser: Element;
}

interface nsILoginManagerCryptoType extends nsISupports {
    readonly uiBusy: boolean;
    readonly isLoggedIn: boolean;
    readonly defaultEncType: unsigned_long;
}

interface nsILoginManagerPrompterType extends nsISupports {
}

interface nsILoginManagerStorageType extends nsISupports {
    readonly uiBusy: boolean;
    readonly isLoggedIn: boolean;
}

interface nsILoginMetaInfoType extends nsISupports {
    guid: AString;
    timeCreated: unsigned_long_long;
    timeLastUsed: unsigned_long_long;
    timePasswordChanged: unsigned_long_long;
    timesUsed: unsigned_long;
}

interface nsILoginReputationVerdictTypeType extends nsISupports {
}

interface nsILoginReputationQueryType extends nsISupports {
    readonly formURI: nsIURI;
}

interface nsILoginReputationQueryCallbackType extends nsISupports {
}

interface nsILoginReputationServiceType extends nsISupports {
}

interface nsIMIMEHeaderParamType extends nsISupports {
}

interface nsIHandlerInfoType extends nsISupports {
    readonly type: ACString;
    description: AString;
    preferredApplicationHandler: nsIHandlerApp;
    readonly possibleApplicationHandlers: nsIMutableArray;
    readonly hasDefaultHandler: boolean;
    readonly defaultDescription: AString;
    preferredAction: nsHandlerInfoAction;
    alwaysAskBeforeHandling: boolean;
}

interface nsIMIMEInfoType extends nsIHandlerInfo {
    primaryExtension: AUTF8String;
    readonly MIMEType: ACString;
    readonly possibleLocalHandlers: nsIArray;
}

interface nsIHandlerAppType extends nsISupports {
    name: AString;
    detailedDescription: AString;
}

interface nsILocalHandlerAppType extends nsIHandlerApp {
    executable: nsIFile;
    readonly parameterCount: unsigned_long;
}

interface nsIWebHandlerAppType extends nsIHandlerApp {
    uriTemplate: AUTF8String;
}

interface nsIDBusHandlerAppType extends nsIHandlerApp {
    service: AUTF8String;
    objectPath: AUTF8String;
    dBusInterface: AUTF8String;
    method: AUTF8String;
}

interface nsIMIMEInputStreamType extends nsIInputStream {
    readonly data: nsIInputStream;
}

interface nsIMIMEServiceType extends nsISupports {
}

interface nsIMacAttributionServiceType extends nsISupports {
}

interface nsIMacDockSupportType extends nsISupports {
    dockMenu: nsIStandaloneNativeMenu;
    badgeText: AString;
    readonly isAppInDock: bool;
}

interface nsIMacFinderProgressCanceledCallbackType extends nsISupports {
}

interface nsIMacFinderProgressType extends nsISupports {
}

interface nsIMacPreferencesReaderType extends nsISupports {
}

interface nsIMacSharingServiceType extends nsISupports {
}

interface nsIMacShellServiceType extends nsIShellService {
}

interface nsIMacUserActivityUpdaterType extends nsISupports {
}

interface nsITrashAppCallbackType extends nsISupports {
}

interface nsIMacWebAppUtilsType extends nsISupports {
}

interface nsIMarionetteType extends nsISupports {
    readonly running: boolean;
}

interface nsIMediaDeviceType extends nsISupports {
    readonly type: AString;
    readonly mediaSource: AString;
    readonly rawId: AString;
    readonly id: AString;
    readonly scary: boolean;
    readonly rawName: AString;
}

interface nsIMediaManagerServiceType extends nsISupports {
    readonly activeMediaCaptureWindows: nsIArray;
}

interface nsIFinishDumpingCallbackType extends nsISupports {
}

interface nsIDumpGCAndCCLogsCallbackType extends nsISupports {
}

interface nsIMemoryInfoDumperType extends nsISupports {
}

interface nsIHandleReportCallbackType extends nsISupports {
}

interface nsIMemoryReporterType extends nsISupports {
}

interface nsIFinishReportingCallbackType extends nsISupports {
}

interface nsIHeapAllocatedCallbackType extends nsISupports {
}

interface nsIMemoryReporterManagerType extends nsISupports {
    readonly vsize: int64_t;
    readonly vsizeMaxContiguous: int64_t;
    readonly resident: int64_t;
    readonly residentFast: int64_t;
    readonly residentPeak: int64_t;
    readonly residentUnique: int64_t;
    readonly heapAllocated: int64_t;
    readonly heapOverheadFraction: int64_t;
    readonly JSMainRuntimeGCHeap: int64_t;
    readonly JSMainRuntimeTemporaryPeak: int64_t;
    readonly JSMainRuntimeCompartmentsSystem: int64_t;
    readonly JSMainRuntimeCompartmentsUser: int64_t;
    readonly JSMainRuntimeRealmsSystem: int64_t;
    readonly JSMainRuntimeRealmsUser: int64_t;
    readonly imagesContentUsedUncompressed: int64_t;
    readonly storageSQLite: int64_t;
    readonly lowMemoryEventsPhysical: int64_t;
    readonly ghostWindows: int64_t;
    readonly pageFaultsHard: int64_t;
    readonly hasMozMallocUsableSize: boolean;
    readonly isDMDEnabled: boolean;
    readonly isDMDRunning: boolean;
}

interface nsIMessageLoopType extends nsISupports {
}

interface nsIMessageSenderType extends nsISupports {
}

interface nsIInProcessContentFrameMessageManagerType extends nsIMessageSender {
}

interface nsIMozBrowserFrameType extends nsIDOMMozBrowserFrame {
    readonly reallyIsBrowser: boolean;
}

interface nsIMultiPartChannelType extends nsISupports {
    readonly baseChannel: nsIChannel;
    readonly partID: uint32_t;
    readonly isFirstPart: boolean;
    readonly isLastPart: boolean;
}

interface nsIMultiPartChannelListenerType extends nsISupports {
}

interface nsIMultiplexInputStreamType extends nsISupports {
    readonly count: unsigned_long;
}

interface nsIMutableArrayType extends nsIArrayExtensions {
}

interface nsINSSComponentType extends nsISupports {
}

interface nsINSSErrorsServiceType extends nsISupports {
}

interface nsINSSVersionType extends nsISupports {
    readonly NSPR_MinVersion: AString;
    readonly NSS_MinVersion: AString;
    readonly NSSUTIL_MinVersion: AString;
    readonly NSSSSL_MinVersion: AString;
    readonly NSSSMIME_MinVersion: AString;
    readonly NSPR_Version: AString;
    readonly NSS_Version: AString;
    readonly NSSUTIL_Version: AString;
    readonly NSSSSL_Version: AString;
    readonly NSSSMIME_Version: AString;
}

interface nsINamedType extends nsISupports {
    readonly name: AUTF8String;
}

interface nsINamedPipeDataObserverType extends nsISupports {
}

interface nsINamedPipeServiceType extends nsISupports {
}

interface nsINativeAppSupportType extends nsISupports {
}

interface nsINativeDNSResolverOverrideType extends nsISupports {
}

interface nsINativeOSFileResultType extends nsISupports {
    readonly result: jsval;
    readonly dispatchDurationMS: double;
    readonly executionDurationMS: double;
}

interface nsINativeOSFileSuccessCallbackType extends nsISupports {
}

interface nsINativeOSFileErrorCallbackType extends nsISupports {
}

interface nsINativeOSFileInternalsServiceType extends nsISupports {
}

interface nsINavBookmarkObserverType extends nsISupports {
    readonly skipTags: boolean;
}

interface nsINavBookmarksServiceType extends nsISupports {
    readonly placesRoot: long_long;
    readonly bookmarksMenuFolder: long_long;
    readonly tagsFolder: long_long;
    readonly toolbarFolder: long_long;
    readonly totalSyncChanges: long_long;
}

interface nsINavHistoryResultNodeType extends nsISupports {
    readonly parent: nsINavHistoryContainerResultNode;
    readonly parentResult: nsINavHistoryResult;
    readonly uri: AUTF8String;
    readonly type: unsigned_long;
    readonly title: AUTF8String;
    readonly accessCount: unsigned_long;
    readonly time: PRTime;
    readonly icon: AUTF8String;
    readonly indentLevel: long;
    readonly bookmarkIndex: long;
    readonly itemId: long_long;
    readonly dateAdded: PRTime;
    readonly lastModified: PRTime;
    readonly tags: AString;
    readonly pageGuid: ACString;
    readonly bookmarkGuid: ACString;
    readonly visitId: long_long;
    readonly fromVisitId: long_long;
    readonly visitType: unsigned_long;
}

interface nsINavHistoryContainerResultNodeType extends nsINavHistoryResultNode {
    containerOpen: boolean;
    readonly state: unsigned_short;
    readonly hasChildren: boolean;
    readonly childCount: unsigned_long;
}

interface nsINavHistoryQueryResultNodeType extends nsINavHistoryContainerResultNode {
    readonly query: nsINavHistoryQuery;
    readonly queryOptions: nsINavHistoryQueryOptions;
    readonly folderItemId: long_long;
    readonly targetFolderGuid: ACString;
}

interface nsINavHistoryResultObserverType extends nsISupports {
    readonly observeHistoryDetails: boolean;
    result: nsINavHistoryResult;
}

interface nsINavHistoryResultType extends nsISupports {
    sortingMode: unsigned_short;
    suppressNotifications: boolean;
    readonly root: nsINavHistoryContainerResultNode;
}

interface nsINavHistoryQueryType extends nsISupports {
    beginTime: PRTime;
    beginTimeReference: unsigned_long;
    readonly hasBeginTime: boolean;
    readonly absoluteBeginTime: PRTime;
    endTime: PRTime;
    endTimeReference: unsigned_long;
    readonly hasEndTime: boolean;
    readonly absoluteEndTime: PRTime;
    searchTerms: AString;
    readonly hasSearchTerms: boolean;
    minVisits: long;
    maxVisits: long;
    readonly transitionCount: unsigned_long;
    onlyBookmarked: boolean;
    domainIsHost: boolean;
    domain: AUTF8String;
    readonly hasDomain: boolean;
    uri: nsIURI;
    readonly hasUri: boolean;
    annotationIsNot: boolean;
    annotation: AUTF8String;
    readonly hasAnnotation: boolean;
    tags: nsIVariant;
    tagsAreNot: boolean;
    readonly parentCount: unsigned_long;
}

interface nsINavHistoryQueryOptionsType extends nsISupports {
    sortingMode: unsigned_short;
    resultType: unsigned_short;
    excludeItems: boolean;
    excludeQueries: boolean;
    expandQueries: boolean;
    includeHidden: boolean;
    maxResults: unsigned_long;
    queryType: unsigned_short;
    asyncEnabled: boolean;
}

interface nsINavHistoryServiceType extends nsISupports {
    readonly databaseStatus: unsigned_short;
    readonly historyDisabled: boolean;
    readonly DBConnection: mozIStorageConnection;
    readonly shutdownClient: nsIAsyncShutdownClient;
    readonly connectionShutdownClient: nsIAsyncShutdownClient;
}

interface nsINestedURIType extends nsISupports {
    readonly innerURI: nsIURI;
    readonly innermostURI: nsIURI;
}

interface nsINestedURIMutatorType extends nsISupports {
}

interface nsINestedAboutURIMutatorType extends nsISupports {
}

interface nsIJSURIMutatorType extends nsISupports {
}

interface nsINetAddrType extends nsISupports {
    readonly family: unsigned_short;
    readonly address: AUTF8String;
    readonly port: unsigned_short;
    readonly flow: unsigned_long;
    readonly scope: unsigned_long;
    readonly isV4Mapped: boolean;
}

interface nsINetUtilType extends nsISupports {
}

interface nsINetworkConnectivityServiceType extends nsISupports {
    readonly DNSv4: nsINetworkConnectivityService_ConnectivityState;
    readonly DNSv6: nsINetworkConnectivityService_ConnectivityState;
    readonly IPv4: nsINetworkConnectivityService_ConnectivityState;
    readonly IPv6: nsINetworkConnectivityService_ConnectivityState;
    readonly NAT64: nsINetworkConnectivityService_ConnectivityState;
}

interface nsIListNetworkAddressesListenerType extends nsISupports {
}

interface nsIGetHostnameListenerType extends nsISupports {
}

interface nsINetworkInfoServiceType extends nsISupports {
}

interface nsIInterceptedBodyCallbackType extends nsISupports {
}

interface nsIInterceptedChannelType extends nsISupports {
    readonly channel: nsIChannel;
    readonly secureUpgradedChannelURI: nsIURI;
    readonly internalContentPolicyType: nsContentPolicyType;
    readonly consoleReportCollector: nsIConsoleReportCollector;
}

interface nsINetworkInterceptControllerType extends nsISupports {
}

interface nsINetworkLinkServiceType extends nsISupports {
    readonly isLinkUp: boolean;
    readonly linkStatusKnown: boolean;
    readonly linkType: unsigned_long;
    readonly networkID: ACString;
    readonly platformDNSIndications: unsigned_long;
}

interface nsINetworkPredictorType extends nsISupports {
}

interface nsINetworkPredictorVerifierType extends nsISupports {
}

interface nsINotificationStorageCallbackType extends nsISupports {
}

interface nsINotificationStorageType extends nsISupports {
}

interface nsINullChannelType extends nsISupports {
}

interface nsIOSFileConstantsServiceType extends nsISupports {
}

interface nsIOSKeyStoreType extends nsISupports {
    readonly isNSSKeyStore: bool;
}

interface nsIOSPermissionRequestType extends nsISupports {
}

interface nsIOSReauthenticatorType extends nsISupports {
}

interface nsIObjectInputStreamType extends nsIBinaryInputStream {
}

interface nsIObjectLoadingContentType extends nsISupports {
    readonly actualType: ACString;
    readonly displayedType: unsigned_long;
    readonly srcURI: nsIURI;
}

interface nsIObjectOutputStreamType extends nsIBinaryOutputStream {
}

interface nsIObliviousHttpClientResponseType extends nsISupports {
}

interface nsIObliviousHttpClientRequestType extends nsISupports {
    readonly response: nsIObliviousHttpClientResponse;
}

interface nsIObliviousHttpServerResponseType extends nsISupports {
}

interface nsIObliviousHttpServerType extends nsISupports {
}

interface nsIObliviousHttpType extends nsISupports {
}

interface nsIObserverType extends nsISupports {
}

interface nsIObserverServiceType extends nsISupports {
}

interface nsIBrowsingContextReadyCallbackType extends nsISupports {
}

interface nsIOpenWindowInfoType extends nsISupports {
    readonly parent: BrowsingContext;
    readonly isRemote: boolean;
    readonly forceNoOpener: boolean;
    readonly isForPrinting: boolean;
    readonly isForWindowDotPrint: boolean;
    readonly originAttributes: jsval;
}

interface nsIOutputStreamType extends nsISupports {
}

interface nsIPK11TokenType extends nsISupports {
    readonly tokenName: AUTF8String;
    readonly isInternalKeyToken: boolean;
    readonly tokenManID: AUTF8String;
    readonly tokenHWVersion: AUTF8String;
    readonly tokenFWVersion: AUTF8String;
    readonly tokenSerialNumber: AUTF8String;
    readonly needsUserInit: boolean;
    readonly hasPassword: boolean;
}

interface nsIPK11TokenDBType extends nsISupports {
}

interface nsIPKCS11ModuleType extends nsISupports {
    readonly name: AUTF8String;
    readonly libName: AUTF8String;
}

interface nsIPKCS11ModuleDBType extends nsISupports {
    readonly canToggleFIPS: boolean;
    readonly isFIPSEnabled: boolean;
}

interface nsIPKCS11SlotType extends nsISupports {
    readonly name: AUTF8String;
    readonly desc: AUTF8String;
    readonly manID: AUTF8String;
    readonly HWVersion: AUTF8String;
    readonly FWVersion: AUTF8String;
    readonly status: unsigned_long;
    readonly tokenName: AUTF8String;
}

interface nsIPageThumbsStorageServiceType extends nsISupports {
    readonly path: AString;
}

interface nsIPaperType extends nsISupports {
    readonly id: AString;
    readonly name: AString;
    readonly width: double;
    readonly height: double;
    readonly unwriteableMargin: Promise;
}

interface nsIPaperMarginType extends nsISupports {
    readonly top: double;
    readonly right: double;
    readonly bottom: double;
    readonly left: double;
}

interface nsIParentChannelType extends nsIStreamListener {
    readonly remoteType: AUTF8String;
}

interface nsIAsyncVerifyRedirectReadyCallbackType extends nsISupports {
}

interface nsIParentRedirectingChannelType extends nsIParentChannel {
}

interface nsIParentalControlsServiceType extends nsISupports {
    readonly parentalControlsEnabled: boolean;
    readonly blockFileDownloadsEnabled: boolean;
    readonly loggingEnabled: boolean;
}

interface nsIParserUtilsType extends nsISupports {
}

interface nsIPartitioningExceptionListObserverType extends nsISupports {
}

interface nsIPartitioningExceptionListServiceType extends nsISupports {
}

interface nsIPaymentResponseDataType extends nsISupports {
    readonly type: uint32_t;
}

interface nsIGeneralResponseDataType extends nsIPaymentResponseData {
    readonly data: AString;
}

interface nsIBasicCardResponseDataType extends nsIPaymentResponseData {
    readonly cardholderName: AString;
    readonly cardNumber: AString;
    readonly expiryMonth: AString;
    readonly expiryYear: AString;
    readonly cardSecurityCode: AString;
    readonly billingAddress: nsIPaymentAddress;
}

interface nsIPaymentActionResponseType extends nsISupports {
    readonly requestId: AString;
    readonly type: uint32_t;
}

interface nsIPaymentCanMakeActionResponseType extends nsIPaymentActionResponse {
    readonly result: bool;
}

interface nsIPaymentShowActionResponseType extends nsIPaymentActionResponse {
    readonly acceptStatus: uint32_t;
    readonly methodName: AString;
    readonly data: nsIPaymentResponseData;
    readonly payerName: AString;
    readonly payerEmail: AString;
    readonly payerPhone: AString;
}

interface nsIPaymentAbortActionResponseType extends nsIPaymentActionResponse {
    readonly abortStatus: uint32_t;
}

interface nsIPaymentCompleteActionResponseType extends nsIPaymentActionResponse {
    readonly completeStatus: uint32_t;
}

interface nsIMethodChangeDetailsType extends nsISupports {
    readonly type: uint32_t;
}

interface nsIGeneralChangeDetailsType extends nsIMethodChangeDetails {
    readonly details: AString;
}

interface nsIBasicCardChangeDetailsType extends nsIMethodChangeDetails {
    readonly billingAddress: nsIPaymentAddress;
}

interface nsIPaymentAddressType extends nsISupports {
    readonly country: AString;
    readonly addressLine: nsIArray;
    readonly region: AString;
    readonly regionCode: AString;
    readonly city: AString;
    readonly dependentLocality: AString;
    readonly postalCode: AString;
    readonly sortingCode: AString;
    readonly organization: AString;
    readonly recipient: AString;
    readonly phone: AString;
}

interface nsIPaymentMethodDataType extends nsISupports {
    readonly supportedMethods: AString;
    readonly data: jsval;
}

interface nsIPaymentCurrencyAmountType extends nsISupports {
    readonly currency: AString;
    readonly value: AString;
}

interface nsIPaymentItemType extends nsISupports {
    readonly label: AString;
    readonly amount: nsIPaymentCurrencyAmount;
    readonly pending: boolean;
}

interface nsIPaymentDetailsModifierType extends nsISupports {
    readonly supportedMethods: AString;
    readonly total: nsIPaymentItem;
    readonly additionalDisplayItems: nsIArray;
    readonly data: jsval;
}

interface nsIPaymentShippingOptionType extends nsISupports {
    readonly id: AString;
    readonly label: AString;
    readonly amount: nsIPaymentCurrencyAmount;
    selected: boolean;
}

interface nsIPaymentDetailsType extends nsISupports {
    readonly id: AString;
    readonly totalItem: nsIPaymentItem;
    readonly displayItems: nsIArray;
    readonly shippingOptions: nsIArray;
    readonly modifiers: nsIArray;
    readonly error: AString;
    readonly shippingAddressErrors: jsval;
    readonly payerErrors: jsval;
    readonly paymentMethodErrors: jsval;
}

interface nsIPaymentOptionsType extends nsISupports {
    readonly requestPayerName: boolean;
    readonly requestPayerEmail: boolean;
    readonly requestPayerPhone: boolean;
    readonly requestShipping: boolean;
    readonly requestBillingAddress: boolean;
    readonly shippingType: AString;
}

interface nsIPaymentRequestType extends nsISupports {
    readonly topOuterWindowId: uint64_t;
    readonly topLevelPrincipal: nsIPrincipal;
    readonly requestId: AString;
    readonly completeStatus: AString;
    readonly paymentMethods: nsIArray;
    readonly paymentDetails: nsIPaymentDetails;
    readonly paymentOptions: nsIPaymentOptions;
    readonly shippingOption: AString;
}

interface nsIPaymentRequestServiceType extends nsISupports {
}

interface nsIPaymentUIServiceType extends nsISupports {
}

interface nsIPermissionType extends nsISupports {
    readonly principal: nsIPrincipal;
    readonly type: ACString;
    readonly capability: uint32_t;
    readonly expireType: uint32_t;
    readonly expireTime: int64_t;
    readonly modificationTime: int64_t;
}

interface nsIPermissionDelegateHandlerType extends nsISupports {
    readonly permissionDelegateFPEnabled: boolean;
}

interface nsIPermissionManagerType extends nsISupports {
}

interface nsIPropertyElementType extends nsISupports {
    key: AUTF8String;
    value: AString;
}

interface nsIPersistentPropertiesType extends nsIProperties {
}

interface nsIPipeType extends nsISupports {
    readonly inputStream: nsIAsyncInputStream;
    readonly outputStream: nsIAsyncOutputStream;
}

interface nsISearchableInputStreamType extends nsISupports {
}

interface nsIPlacesPreviewsHelperServiceType extends nsISupports {
}

interface nsIPlatformInfoType extends nsISupports {
    readonly platformVersion: ACString;
    readonly platformBuildID: ACString;
}

interface nsIPluginTagType extends nsISupports {
    readonly description: AUTF8String;
    readonly filename: AUTF8String;
    readonly fullpath: AUTF8String;
    readonly version: AUTF8String;
    readonly name: AUTF8String;
    readonly niceName: AUTF8String;
    readonly blocklisted: boolean;
    readonly isEnabledStateLocked: boolean;
    readonly active: boolean;
    readonly blocklistState: unsigned_long;
    readonly disabled: boolean;
    readonly clicktoplay: boolean;
    readonly loaded: boolean;
    enabledState: unsigned_long;
    readonly lastModifiedTime: PRTime;
    readonly isFlashPlugin: boolean;
    readonly id: unsigned_long;
}

interface nsIFakePluginTagType extends nsIPluginTag {
    readonly handlerURI: nsIURI;
    readonly sandboxScript: AString;
}

interface nsIPowerManagerServiceType extends nsISupports {
}

interface nsIPrefBranchType extends nsISupports {
    readonly root: ACString;
}

interface nsIPrefLocalizedStringType extends nsISupportsString {
}

interface nsIPrefStatsCallbackType extends nsISupports {
}

interface nsIPrefObserverType extends nsISupports {
}

interface nsIPrefServiceType extends nsISupports {
    readonly dirty: boolean;
}

interface nsIPrefetchServiceType extends nsISupports {
}

interface nsIPreloadedStyleSheetType extends nsISupports {
}

interface nsIPrincipalType extends nsISupports {
    readonly hashValue: unsigned_long;
    readonly URI: nsIURI;
    domain: nsIURI;
    readonly originAttributes: jsval;
    readonly origin: ACString;
    readonly asciiOrigin: ACString;
    readonly hostPort: ACString;
    readonly asciiHost: ACString;
    readonly host: ACString;
    readonly prePath: ACString;
    readonly filePath: ACString;
    readonly asciiSpec: ACString;
    readonly spec: ACString;
    readonly exposablePrePath: ACString;
    readonly exposableSpec: ACString;
    readonly scheme: ACString;
    readonly localStorageQuotaKey: ACString;
    readonly isOriginPotentiallyTrustworthy: boolean;
    readonly isLoopbackHost: boolean;
    readonly storageOriginKey: ACString;
    readonly originNoSuffix: ACString;
    readonly originSuffix: AUTF8String;
    readonly siteOrigin: ACString;
    readonly siteOriginNoSuffix: ACString;
    readonly baseDomain: ACString;
    readonly addonId: AString;
    readonly addonPolicy: WebExtensionPolicy;
    readonly userContextId: unsigned_long;
    readonly privateBrowsingId: unsigned_long;
    readonly isInIsolatedMozBrowserElement: boolean;
    readonly isNullPrincipal: boolean;
    readonly isContentPrincipal: boolean;
    readonly isExpandedPrincipal: boolean;
    readonly isSystemPrincipal: boolean;
    readonly isAddonOrExpandedAddonPrincipal: boolean;
    readonly isOnion: boolean;
    readonly isScriptAllowedByPolicy: boolean;
    readonly nextSubDomainPrincipal: nsIPrincipal;
    readonly isIpAddress: boolean;
    readonly isLocalIpAddress: boolean;
    readonly precursorPrincipal: nsIPrincipal;
}

interface nsIExpandedPrincipalType extends nsISupports {
    readonly csp: nsIContentSecurityPolicy;
}

interface nsIPrintDialogServiceType extends nsISupports {
}

interface nsIPrintPreviewNavigationType extends nsISupports {
    readonly pageCount: long;
}

interface nsIPrintSettingsType extends nsISupports {
    edgeTop: double;
    edgeLeft: double;
    edgeBottom: double;
    edgeRight: double;
    marginTop: double;
    marginLeft: double;
    marginBottom: double;
    marginRight: double;
    unwriteableMarginTop: double;
    unwriteableMarginLeft: double;
    unwriteableMarginBottom: double;
    unwriteableMarginRight: double;
    scaling: double;
    printBGColors: boolean;
    printBGImages: boolean;
    honorPageRuleMargins: boolean;
    ignoreUnwriteableMargins: boolean;
    showMarginGuides: boolean;
    printSelectionOnly: boolean;
    title: AString;
    docURL: AString;
    headerStrLeft: AString;
    headerStrCenter: AString;
    headerStrRight: AString;
    footerStrLeft: AString;
    footerStrCenter: AString;
    footerStrRight: AString;
    printSilent: boolean;
    shrinkToFit: boolean;
    paperId: AString;
    paperWidth: double;
    paperHeight: double;
    paperSizeUnit: short;
    printReversed: boolean;
    printInColor: boolean;
    orientation: long;
    numCopies: long;
    numPagesPerSheet: long;
    outputDestination: nsIPrintSettings_OutputDestinationType;
    outputFormat: short;
    printerName: AString;
    toFileName: AString;
    outputStream: nsIOutputStream;
    printPageDelay: long;
    resolution: long;
    duplex: long;
    isInitializedFromPrinter: boolean;
    isInitializedFromPrefs: boolean;
}

interface nsIPrintSettingsServiceType extends nsISupports {
    readonly defaultPrintSettingsForPrinting: nsIPrintSettings;
    readonly lastUsedPrinterName: AString;
}

interface nsIPrintSettingsWinType extends nsISupports {
    deviceName: AString;
    driverName: AString;
    devMode: nsDevMode;
}

interface nsIPrinterInfoType extends nsISupports {
    readonly defaultSettings: nsIPrintSettings;
}

interface nsIPrinterType extends nsISupports {
    readonly name: AString;
    readonly systemName: AString;
    readonly printerInfo: Promise;
    readonly supportsDuplex: Promise;
    readonly supportsColor: Promise;
    readonly supportsMonochrome: Promise;
    readonly supportsCollation: Promise;
}

interface nsIPrinterListType extends nsISupports {
    readonly systemDefaultPrinterName: AString;
    readonly printers: Promise;
    readonly fallbackPaperList: Promise;
}

interface nsIPrivacyTransitionObserverType extends nsISupports {
}

interface nsIPrivateBrowsingChannelType extends nsISupports {
    readonly isChannelPrivate: boolean;
}

interface nsIProcessType extends nsISupports {
    startHidden: boolean;
    noShell: boolean;
    readonly pid: unsigned_long;
    readonly exitValue: long;
    readonly isRunning: boolean;
}

interface nsIProcessToolsServiceType extends nsISupports {
    readonly pid: unsigned_long_long;
}

interface nsIProfileStartupType extends nsISupports {
    readonly directory: nsIFile;
}

interface nsIProfileMigratorType extends nsISupports {
}

interface nsIProfileUnlockerType extends nsISupports {
}

interface nsIProfilerStartParamsType extends nsISupports {
    readonly entries: uint32_t;
    readonly duration: double;
    readonly interval: double;
    readonly features: uint32_t;
    readonly activeTabID: uint64_t;
}

interface nsIProfilerType extends nsISupports {
    readonly activeConfiguration: jsval;
    readonly sharedLibraries: jsval;
}

interface nsIProgressEventSinkType extends nsISupports {
}

interface nsIPromptType extends nsISupports {
}

interface nsIPromptCollectionType extends nsISupports {
}

interface nsIPromptFactoryType extends nsISupports {
}

interface nsIPromptInstanceType extends nsISupports {
}

interface nsIPromptServiceType extends nsISupports {
}

interface nsIPropertiesType extends nsISupports {
}

interface nsIPropertyType extends nsISupports {
    readonly name: AString;
    readonly value: nsIVariant;
}

interface nsIPropertyBagType extends nsISupports {
    readonly enumerator: nsISimpleEnumerator;
}

interface nsIPropertyBag2Type extends nsIPropertyBag {
}

interface nsIProtectedAuthThreadType extends nsISupports {
    readonly slot: nsIPKCS11Slot;
}

interface nsIProtocolHandlerWithDynamicFlagsType extends nsISupports {
}

interface nsIProtocolHandlerType extends nsISupports {
    readonly scheme: ACString;
}

interface nsIProtocolProxyCallbackType extends nsISupports {
}

interface nsIProxyProtocolFilterResultType extends nsISupports {
}

interface nsIProtocolProxyFilterType extends nsISupports {
}

interface nsIProtocolProxyChannelFilterType extends nsISupports {
}

interface nsIProxyConfigChangedCallbackType extends nsISupports {
}

interface nsIProtocolProxyServiceType extends nsISupports {
    readonly proxyConfigType: unsigned_long;
    readonly isPACLoading: boolean;
}

interface nsIProtocolProxyService2Type extends nsIProtocolProxyService {
}

interface nsIProxiedChannelType extends nsISupports {
    readonly proxyInfo: nsIProxyInfo;
    readonly httpProxyConnectResponseCode: int32_t;
}

interface nsIProxiedProtocolHandlerType extends nsIProtocolHandler {
}

interface nsIProxyInfoType extends nsISupports {
    readonly host: AUTF8String;
    readonly port: long;
    readonly type: ACString;
    readonly flags: unsigned_long;
    readonly resolveFlags: unsigned_long;
    readonly username: ACString;
    readonly password: ACString;
    readonly failoverTimeout: unsigned_long;
    failoverProxy: nsIProxyInfo;
    sourceId: ACString;
    readonly proxyAuthorizationHeader: ACString;
    readonly connectionIsolationKey: ACString;
}

interface nsIPublicKeyPinningServiceType extends nsISupports {
}

interface nsIPurgeTrackerServiceType extends nsISupports {
}

interface nsIPushErrorReporterType extends nsISupports {
}

interface nsIPushNotifierType extends nsISupports {
}

interface nsIPushDataType extends nsISupports {
}

interface nsIPushMessageType extends nsISupports {
    readonly principal: nsIPrincipal;
    readonly data: nsIPushData;
}

interface nsIPushSubscriptionType extends nsISupports {
    readonly endpoint: AString;
    readonly pushCount: long_long;
    readonly lastPush: long_long;
    readonly quota: long;
    readonly isSystemSubscription: bool;
    readonly p256dhPrivateKey: jsval;
}

interface nsIPushSubscriptionCallbackType extends nsISupports {
}

interface nsIUnsubscribeResultCallbackType extends nsISupports {
}

interface nsIPushClearResultCallbackType extends nsISupports {
}

interface nsIPushServiceType extends nsISupports {
    readonly pushTopic: AString;
    readonly subscriptionChangeTopic: AString;
    readonly subscriptionModifiedTopic: AString;
}

interface nsIPushQuotaManagerType extends nsISupports {
}

interface nsIQueryContentEventResultType extends nsISupports {
    readonly offset: unsigned_long;
    readonly tentativeCaretOffset: unsigned_long;
    readonly reversed: boolean;
    readonly left: long;
    readonly top: long;
    readonly width: long;
    readonly height: long;
    readonly text: AString;
    readonly succeeded: boolean;
    readonly notFound: boolean;
    readonly tentativeCaretOffsetNotFound: boolean;
}

interface nsIQuotaUsageCallbackType extends nsISupports {
}

interface nsIQuotaCallbackType extends nsISupports {
}

interface nsIQuotaManagerServiceType extends nsISupports {
}

interface nsIQuotaRequestBaseType extends nsISupports {
    readonly principal: nsIPrincipal;
    readonly resultCode: nsresult;
    readonly resultName: ACString;
}

interface nsIQuotaUsageRequestType extends nsIQuotaRequestBase {
    readonly result: nsIVariant;
    callback: nsIQuotaUsageCallback;
}

interface nsIQuotaRequestType extends nsIQuotaRequestBase {
    readonly result: nsIVariant;
    callback: nsIQuotaCallback;
}

interface nsIQuotaFullOriginMetadataResultType extends nsISupports {
    readonly suffix: ACString;
    readonly group: ACString;
    readonly origin: ACString;
    readonly persistenceType: ACString;
    readonly persisted: boolean;
    readonly lastAccessTime: long_long;
}

interface nsIQuotaUsageResultType extends nsISupports {
    readonly origin: ACString;
    readonly persisted: boolean;
    readonly usage: unsigned_long_long;
    readonly lastAccessed: unsigned_long_long;
}

interface nsIQuotaOriginUsageResultType extends nsISupports {
    readonly usage: unsigned_long_long;
    readonly fileUsage: unsigned_long_long;
}

interface nsIQuotaEstimateResultType extends nsISupports {
    readonly usage: unsigned_long_long;
    readonly limit: unsigned_long_long;
}

interface nsIRaceCacheWithNetworkType extends nsISupports {
}

interface nsIRandomAccessStreamType extends nsISeekableStream {
}

interface nsIRandomGeneratorType extends nsISupports {
}

interface nsIRedirectChannelRegistrarType extends nsISupports {
}

interface nsIRedirectHistoryEntryType extends nsISupports {
    readonly principal: nsIPrincipal;
    readonly referrerURI: nsIURI;
    readonly remoteAddress: ACString;
}

interface nsIRedirectResultListenerType extends nsISupports {
}

interface nsIReferrerInfoType extends nsISerializable {
    readonly originalReferrer: nsIURI;
    readonly referrerPolicy: nsIReferrerInfo_ReferrerPolicyIDL;
    readonly sendReferrer: boolean;
    readonly computedReferrerSpec: AString;
}

interface nsIReflowObserverType extends nsISupports {
}

interface nsIRefreshURIType extends nsISupports {
    readonly refreshPending: boolean;
}

interface nsIRegionType extends nsISupports {
    readonly current: AString;
    readonly home: AString;
}

interface nsIRelativeFilePrefType extends nsISupports {
    file: nsIFile;
    relativeToKey: ACString;
}

interface nsIRemoteAgentType extends nsISupports {
    readonly debuggerAddress: AString;
    readonly running: boolean;
}

interface nsIRemoteTabType extends nsISupports {
    renderLayers: boolean;
    readonly hasLayers: boolean;
    priorityHint: boolean;
    readonly tabId: uint64_t;
    readonly contentProcessId: uint64_t;
    readonly osPid: int32_t;
    readonly browsingContext: BrowsingContext;
    readonly hasPresented: boolean;
}

interface nsIRequestType extends nsISupports {
    readonly name: AUTF8String;
    readonly status: nsresult;
    loadGroup: nsILoadGroup;
    loadFlags: nsLoadFlags;
    canceledReason: ACString;
}

interface nsIRequestTailUnblockCallbackType extends nsISupports {
}

interface nsIRequestContextType extends nsISupports {
    readonly ID: unsigned_long_long;
    readonly blockingTransactionCount: unsigned_long;
    spdyPushCache: SpdyPushCachePtr;
}

interface nsIRequestContextServiceType extends nsISupports {
}

interface nsIRequestObserverType extends nsISupports {
}

interface nsIRequestObserverProxyType extends nsIRequestObserver {
}

interface nsIResProtocolHandlerType extends nsISubstitutingProtocolHandler {
}

interface nsIResumableChannelType extends nsISupports {
    readonly entityID: ACString;
}

interface nsIRunnableType extends nsISupports {
}

interface nsIRunnablePriorityType extends nsISupports {
    readonly priority: unsigned_long;
}

interface nsIRunnableIPCMessageTypeType extends nsISupports {
    readonly type: unsigned_long;
}

interface nsISDBCallbackType extends nsISupports {
}

interface nsISDBCloseCallbackType extends nsISupports {
}

interface nsISDBConnectionType extends nsISupports {
    closeCallback: nsISDBCloseCallback;
}

interface nsISDBRequestType extends nsISupports {
    readonly result: nsIVariant;
    readonly resultCode: nsresult;
    callback: nsISDBCallback;
}

interface nsISDBResultType extends nsISupports {
}

interface nsISHEntryType extends nsISupports {
    URI: nsIURI;
    originalURI: nsIURI;
    resultPrincipalURI: nsIURI;
    unstrippedURI: nsIURI;
    loadReplace: boolean;
    title: AString;
    name: AString;
    isSubFrame: boolean;
    hasUserInteraction: boolean;
    hasUserActivation: boolean;
    referrerInfo: nsIReferrerInfo;
    contentViewer: nsIContentViewer;
    readonly isInBFCache: boolean;
    sticky: boolean;
    windowState: nsISupports;
    refreshURIList: nsIMutableArray;
    postData: nsIInputStream;
    layoutHistoryState: nsILayoutHistoryState;
    parent: nsISHEntry;
    loadType: unsigned_long;
    ID: unsigned_long;
    cacheKey: unsigned_long;
    saveLayoutStateFlag: boolean;
    contentType: ACString;
    URIWasModified: boolean;
    triggeringPrincipal: nsIPrincipal;
    principalToInherit: nsIPrincipal;
    partitionedPrincipalToInherit: nsIPrincipal;
    csp: nsIContentSecurityPolicy;
    stateData: nsIStructuredCloneContainer;
    docshellID: nsIDRef;
    readonly isSrcdocEntry: boolean;
    srcdocData: AString;
    baseURI: nsIURI;
    scrollRestorationIsManual: boolean;
    readonly loadedInThisProcess: boolean;
    shistory: nsISHistory;
    lastTouched: unsigned_long;
    readonly childCount: long;
    persist: boolean;
    readonly bfcacheID: unsigned_long_long;
    wireframe: jsval;
}

interface nsISHistoryType extends nsISupports {
    readonly count: long;
    index: long;
    readonly requestedIndex: long;
}

interface nsISHistoryListenerType extends nsISupports {
}

interface nsISafeOutputStreamType extends nsISupports {
}

interface nsIScreenType extends nsISupports {
    readonly pixelDepth: long;
    readonly colorDepth: long;
    readonly contentsScaleFactor: double;
    readonly defaultCSSScaleFactor: double;
    readonly dpi: float;
    readonly refreshRate: long;
    readonly isPseudoDisplay: boolean;
}

interface nsIScreenManagerType extends nsISupports {
    readonly primaryScreen: nsIScreen;
    readonly totalScreenPixels: int64_t;
}

interface nsIScriptChannelType extends nsISupports {
    executionPolicy: unsigned_long;
    executeAsync: boolean;
    readonly isDocumentLoad: boolean;
}

interface nsIScriptErrorNoteType extends nsISupports {
    readonly errorMessage: AString;
    readonly sourceName: AString;
    readonly sourceId: uint32_t;
    readonly lineNumber: uint32_t;
    readonly columnNumber: uint32_t;
}

interface nsIScriptErrorType extends nsIConsoleMessage {
    readonly errorMessage: AString;
    readonly sourceName: AString;
    readonly sourceLine: AString;
    readonly sourceId: uint32_t;
    readonly lineNumber: uint32_t;
    readonly columnNumber: uint32_t;
    readonly flags: uint32_t;
    readonly category: string;
    readonly outerWindowID: unsigned_long_long;
    readonly innerWindowID: unsigned_long_long;
    readonly isFromPrivateWindow: boolean;
    readonly isFromChromeContext: boolean;
    readonly isPromiseRejection: boolean;
    exception: jsval;
    readonly hasException: boolean;
    stack: jsval;
    readonly stackGlobal: jsval;
    errorMessageName: AString;
    readonly notes: nsIArray;
    cssSelectors: AString;
}

interface nsIScriptLoaderObserverType extends nsISupports {
}

interface nsIScriptSecurityManagerType extends nsISupports {
    readonly domainPolicyActive: boolean;
}

interface nsIScriptableBase64EncoderType extends nsISupports {
}

interface nsIScriptableContentIteratorType extends nsISupports {
    readonly currentNode: Node;
    readonly isDone: bool;
}

interface nsIScriptableInputStreamType extends nsISupports {
}

interface nsIScriptableUnicodeConverterType extends nsISupports {
    charset: ACString;
    isInternal: boolean;
}

interface nsISearchSubmissionType extends nsISupports {
    readonly postData: nsIInputStream;
    readonly uri: nsIURI;
}

interface nsISearchEngineType extends nsISupports {
    readonly searchUrlQueryParamName: AString;
    readonly searchUrlPublicSuffix: AString;
    alias: AString;
    readonly description: AString;
    hidden: boolean;
    readonly iconURI: nsIURI;
    readonly name: AString;
    readonly id: AString;
    readonly searchForm: AString;
    readonly sendAttributionRequest: boolean;
    readonly telemetryId: AString;
    readonly identifier: AString;
    readonly isAppProvided: boolean;
    readonly inMemory: boolean;
    readonly isGeneralPurposeEngine: boolean;
}

interface nsISearchParseSubmissionResultType extends nsISupports {
    readonly engine: nsISearchEngine;
    readonly terms: AString;
    readonly termsParameterName: AString;
}

interface nsISearchServiceType extends nsISupports {
    readonly isInitialized: bool;
    readonly appDefaultEngine: nsISearchEngine;
    readonly appPrivateDefaultEngine: nsISearchEngine;
    defaultEngine: nsISearchEngine;
    defaultPrivateEngine: nsISearchEngine;
    readonly separatePrivateDefaultUrlbarResultEnabled: boolean;
}

interface nsISecCheckWrapChannelType extends nsISupports {
    readonly innerChannel: nsIChannel;
}

interface nsISecretDecoderRingType extends nsISupports {
}

interface nsISecureBrowserUIType extends nsISupports {
    readonly state: unsigned_long;
    readonly isSecureContext: bool;
    readonly secInfo: nsITransportSecurityInfo;
}

interface nsISecurityConsoleMessageType extends nsISupports {
    tag: AString;
    category: AString;
}

interface nsISecurityUITelemetryType extends nsISupports {
}

interface nsISeekableStreamType extends nsITellableStream {
}

interface nsISelectionControllerType extends nsISelectionDisplay {
    readonly caretVisible: boolean;
}

interface nsISelectionDisplayType extends nsISupports {
}

interface nsISelectionListenerType extends nsISupports {
}

interface nsISensitiveInfoHiddenURIType extends nsISupports {
}

interface nsISerialEventTargetType extends nsIEventTarget {
}

interface nsISerializableType extends nsISupports {
}

interface nsISerializationHelperType extends nsISupports {
}

interface nsIServerSocketType extends nsISupports {
    readonly port: long;
}

interface nsIServerSocketListenerType extends nsISupports {
}

interface nsIServiceManagerType extends nsISupports {
}

interface nsIServiceWorkerUnregisterCallbackType extends nsISupports {
}

interface nsIServiceWorkerInfoType extends nsISupports {
    readonly id: AString;
    readonly scriptSpec: AString;
    readonly cacheName: AString;
    readonly state: unsigned_short;
    readonly debugger: nsIWorkerDebugger;
    readonly handlesFetchEvents: bool;
    readonly installedTime: PRTime;
    readonly activatedTime: PRTime;
    readonly redundantTime: PRTime;
    readonly navigationFaultCount: unsigned_long;
    testingInjectCancellation: nsresult;
}

interface nsIServiceWorkerRegistrationInfoListenerType extends nsISupports {
}

interface nsIServiceWorkerRegistrationInfoType extends nsISupports {
    readonly principal: nsIPrincipal;
    readonly unregistered: boolean;
    readonly scope: AString;
    readonly scriptSpec: AString;
    readonly updateViaCache: unsigned_short;
    readonly lastUpdateTime: PRTime;
    readonly evaluatingWorker: nsIServiceWorkerInfo;
    readonly installingWorker: nsIServiceWorkerInfo;
    readonly waitingWorker: nsIServiceWorkerInfo;
    readonly activeWorker: nsIServiceWorkerInfo;
    readonly quotaUsageCheckCount: long;
}

interface nsIServiceWorkerManagerListenerType extends nsISupports {
}

interface nsIServiceWorkerManagerType extends nsISupports {
}

interface nsISessionStorageServiceType extends nsISupports {
}

interface nsISessionStoreRestoreDataType extends nsISupports {
    url: AUTF8String;
    innerHTML: AString;
    scroll: ACString;
}

interface nsISharePickerType extends nsISupports {
    readonly openerWindow: mozIDOMWindowProxy;
}

interface nsISharingHandlerAppType extends nsIHandlerApp {
}

interface nsIShellServiceType extends nsISupports {
    desktopBackgroundColor: unsigned_long;
}

interface nsIJSEnumeratorType extends nsISupports {
}

interface nsISimpleEnumeratorBaseType extends nsISupports {
}

interface nsISimpleEnumeratorType extends nsISimpleEnumeratorBase {
}

interface nsISimpleStreamListenerType extends nsIStreamListener {
}

interface nsISimpleURIMutatorType extends nsISupports {
}

interface nsISiteSecurityStateType extends nsISupports {
    readonly hostname: ACString;
    readonly expireTime: long_long;
    readonly securityPropertyState: short;
    readonly includeSubdomains: boolean;
    readonly originAttributes: jsval;
}

interface nsISiteHSTSStateType extends nsISiteSecurityState {
}

interface nsISiteSecurityServiceType extends nsISupports {
}

interface nsISlowScriptDebugCallbackType extends nsISupports {
}

interface nsISlowScriptDebuggerStartupCallbackType extends nsISupports {
}

interface nsISlowScriptDebugRemoteCallbackType extends nsISupports {
}

interface nsISlowScriptDebugType extends nsISupports {
    activationHandler: nsISlowScriptDebugCallback;
    remoteActivationHandler: nsISlowScriptDebugRemoteCallback;
}

interface nsISocketFilterType extends nsISupports {
}

interface nsISocketFilterHandlerType extends nsISupports {
}

interface nsISocketProviderType extends nsISupports {
}

interface nsISocketProviderServiceType extends nsISupports {
}

interface nsISocketTransportType extends nsITransport {
    readonly host: AUTF8String;
    readonly port: long;
    originAttributes: jsval;
    readonly tlsSocketControl: nsITLSSocketControl;
    securityCallbacks: nsIInterfaceRequestor;
    connectionFlags: unsigned_long;
    tlsFlags: unsigned_long;
    QoSBits: octet;
    recvBufferSize: unsigned_long;
    sendBufferSize: unsigned_long;
    keepaliveEnabled: boolean;
    readonly resetIPFamilyPreference: boolean;
    readonly echConfigUsed: boolean;
    readonly retryDnsIfPossible: boolean;
    readonly status: nsresult;
}

interface nsISTSShutdownObserverType extends nsISupports {
}

interface nsISocketTransportServiceType extends nsISupports {
}

interface nsIRoutedSocketTransportServiceType extends nsISocketTransportService {
}

interface nsISoundType extends nsISupports {
}

interface nsISpeculativeConnectType extends nsISupports {
}

interface nsISpeculativeConnectionOverriderType extends nsISupports {
    readonly parallelSpeculativeConnectLimit: unsigned_long;
    readonly ignoreIdle: boolean;
    readonly isFromPredictor: boolean;
    readonly allow1918: boolean;
}

interface nsISpeechGrammarCompilationCallbackType extends nsISupports {
}

interface nsISpeechRecognitionServiceType extends nsISupports {
}

interface nsISpeechTaskCallbackType extends nsISupports {
}

interface nsISpeechTaskType extends nsISupports {
}

interface nsISpeechServiceType extends nsISupports {
}

interface nsIStandaloneNativeMenuType extends nsISupports {
}

interface nsIStandardURLType extends nsISupports {
}

interface nsIStandardURLMutatorType extends nsISupports {
}

interface nsIStartupCacheInfoType extends nsISupports {
    readonly IgnoreDiskCache: boolean;
    readonly FoundDiskCacheOnInit: boolean;
    readonly WroteToDiskCache: boolean;
    readonly DiskCachePath: AString;
}

interface nsIStorageActivityServiceType extends nsISupports {
}

interface nsIStorageStreamType extends nsISupports {
    length: uint32_t;
    readonly writeInProgress: boolean;
}

interface nsIStreamBufferAccessType extends nsISupports {
    readonly unbufferedStream: nsISupports;
}

interface nsIStreamConverterType extends nsIStreamListener {
}

interface nsIStreamConverterServiceType extends nsISupports {
}

interface nsIStreamListenerType extends nsIRequestObserver {
}

interface nsIStreamListenerTeeType extends nsIStreamListener {
}

interface nsIStreamLoaderObserverType extends nsISupports {
}

interface nsIStreamLoaderType extends nsIStreamListener {
    readonly numBytesRead: unsigned_long;
    readonly request: nsIRequest;
}

interface nsIStreamTransportServiceType extends nsISupports {
}

interface nsIInputAvailableCallbackType extends nsISupports {
}

interface nsIStringBundleType extends nsISupports {
}

interface nsIStringBundleServiceType extends nsISupports {
}

interface nsIStringEnumeratorBaseType extends nsISupports {
}

interface nsIStringEnumeratorType extends nsIStringEnumeratorBase {
}

interface nsIUTF8StringEnumeratorType extends nsIStringEnumeratorBase {
}

interface nsIStringInputStreamType extends nsIInputStream {
}

interface nsIStructuredCloneContainerType extends nsISupports {
    readonly serializedNBytes: unsigned_long_long;
    readonly formatVersion: unsigned_long;
}

interface nsISFVBareItemType extends nsISupports {
    readonly type: long;
}

interface nsISFVIntegerType extends nsISFVBareItem {
    value: long_long;
}

interface nsISFVStringType extends nsISFVBareItem {
    value: ACString;
}

interface nsISFVBoolType extends nsISFVBareItem {
    value: boolean;
}

interface nsISFVDecimalType extends nsISFVBareItem {
    value: double;
}

interface nsISFVTokenType extends nsISFVBareItem {
    value: ACString;
}

interface nsISFVByteSeqType extends nsISFVBareItem {
    value: ACString;
}

interface nsISFVParamsType extends nsISupports {
}

interface nsISFVParametrizableType extends nsISupports {
    readonly params: nsISFVParams;
}

interface nsISFVItemOrInnerListType extends nsISFVParametrizable {
}

interface nsISFVSerializeType extends nsISupports {
}

interface nsISFVItemType extends nsISFVItemOrInnerList {
    readonly value: nsISFVBareItem;
}

interface nsISFVInnerListType extends nsISFVItemOrInnerList {
}

interface nsISFVListType extends nsISFVSerialize {
}

interface nsISFVDictionaryType extends nsISFVSerialize {
}

interface nsISFVServiceType extends nsISupports {
}

interface nsIStyleSheetServiceType extends nsISupports {
}

interface nsISubstitutingProtocolHandlerType extends nsIProtocolHandler {
}

interface nsIOutputIteratorType extends nsISupports {
}

interface nsIInputIteratorType extends nsISupports {
}

interface nsIForwardIteratorType extends nsISupports {
}

interface nsIBidirectionalIteratorType extends nsISupports {
}

interface nsIRandomAccessIteratorType extends nsISupports {
}

interface nsISupportsPrimitiveType extends nsISupports {
    readonly type: unsigned_short;
}

interface nsISupportsIDType extends nsISupportsPrimitive {
    data: nsIDPtr;
}

interface nsISupportsCStringType extends nsISupportsPrimitive {
    data: ACString;
}

interface nsISupportsStringType extends nsISupportsPrimitive {
    data: AString;
}

interface nsISupportsPRBoolType extends nsISupportsPrimitive {
    data: boolean;
}

interface nsISupportsPRUint8Type extends nsISupportsPrimitive {
    data: uint8_t;
}

interface nsISupportsPRUint16Type extends nsISupportsPrimitive {
    data: uint16_t;
}

interface nsISupportsPRUint32Type extends nsISupportsPrimitive {
    data: uint32_t;
}

interface nsISupportsPRUint64Type extends nsISupportsPrimitive {
    data: uint64_t;
}

interface nsISupportsPRTimeType extends nsISupportsPrimitive {
    data: PRTime;
}

interface nsISupportsCharType extends nsISupportsPrimitive {
    data: char;
}

interface nsISupportsPRInt16Type extends nsISupportsPrimitive {
    data: int16_t;
}

interface nsISupportsPRInt32Type extends nsISupportsPrimitive {
    data: int32_t;
}

interface nsISupportsPRInt64Type extends nsISupportsPrimitive {
    data: int64_t;
}

interface nsISupportsFloatType extends nsISupportsPrimitive {
    data: float;
}

interface nsISupportsDoubleType extends nsISupportsPrimitive {
    data: double;
}

interface nsISupportsInterfacePointerType extends nsISupportsPrimitive {
    data: nsISupports;
    dataIID: nsIDPtr;
}

interface nsISupportsPriorityType extends nsISupports {
    priority: long;
}

interface nsISyncStreamListenerType extends nsIStreamListener {
    readonly inputStream: nsIInputStream;
}

interface nsISynthVoiceRegistryType extends nsISupports {
    readonly voiceCount: uint32_t;
}

interface nsISystemInfoType extends nsISupports {
    readonly diskInfo: Promise;
    readonly countryCode: Promise;
    readonly osInfo: Promise;
    readonly processInfo: Promise;
}

interface nsISystemProxySettingsType extends nsISupports {
    readonly mainThreadOnly: bool;
    readonly PACURI: AUTF8String;
}

interface nsISystemStatusBarType extends nsISupports {
}

interface nsITCPSocketCallbackType extends nsISupports {
}

interface nsITLSServerSocketType extends nsIServerSocket {
    serverCert: nsIX509Cert;
}

interface nsITLSClientStatusType extends nsISupports {
    readonly peerCert: nsIX509Cert;
    readonly tlsVersionUsed: short;
    readonly cipherName: ACString;
    readonly keyLength: unsigned_long;
    readonly macLength: unsigned_long;
}

interface nsITLSServerConnectionInfoType extends nsISupports {
    readonly serverSocket: nsITLSServerSocket;
    readonly status: nsITLSClientStatus;
}

interface nsITLSServerSecurityObserverType extends nsISupports {
}

interface nsITLSSocketControlType extends nsISupports {
    readonly earlyDataAccepted: bool;
    readonly KEAUsed: short;
    readonly KEAKeyBits: unsigned_long;
    readonly providerFlags: uint32_t;
    readonly SSLVersionUsed: short;
    readonly SSLVersionOffered: short;
    readonly MACAlgorithmUsed: short;
    denyClientCert: boolean;
    readonly clientCertSent: boolean;
    readonly failedVerification: boolean;
    esniTxt: ACString;
    echConfig: ACString;
    readonly retryEchConfig: ACString;
    readonly peerId: ACString;
    readonly securityInfo: nsITransportSecurityInfo;
}

interface nsITXTToHTMLConvType extends nsIStreamConverter {
}

interface nsITableEditorType extends nsISupports {
}

interface nsITaggingServiceType extends nsISupports {
}

interface nsITaskbarOverlayIconControllerType extends nsISupports {
}

interface nsITaskbarPreviewType extends nsISupports {
    controller: nsITaskbarPreviewController;
    tooltip: AString;
    visible: boolean;
    active: boolean;
}

interface nsITaskbarPreviewButtonType extends nsISupports {
    tooltip: AString;
    dismissOnClick: boolean;
    hasBorder: boolean;
    disabled: boolean;
    image: imgIContainer;
    visible: boolean;
}

interface nsITaskbarPreviewCallbackType extends nsISupports {
}

interface nsITaskbarPreviewControllerType extends nsISupports {
    readonly width: unsigned_long;
    readonly height: unsigned_long;
    readonly thumbnailAspectRatio: float;
}

interface nsITaskbarProgressType extends nsISupports {
}

interface nsITaskbarTabPreviewType extends nsITaskbarPreview {
    title: AString;
    icon: imgIContainer;
}

interface nsITaskbarWindowPreviewType extends nsITaskbarPreview {
    enableCustomDrawing: boolean;
}

interface nsIFetchTelemetryDataCallbackType extends nsISupports {
}

interface nsITelemetryType extends nsISupports {
    readonly lastShutdownDuration: uint32_t;
    readonly failedProfileLockCount: uint32_t;
    readonly slowSQL: jsval;
    readonly debugSlowSQL: jsval;
    readonly lateWrites: jsval;
    canRecordBase: boolean;
    canRecordExtended: boolean;
    readonly canRecordReleaseData: boolean;
    readonly canRecordPrereleaseData: boolean;
    readonly isOfficialTelemetry: boolean;
    readonly fileIOReports: jsval;
}

interface nsITellableStreamType extends nsISupports {
}

interface nsITextInputProcessorType extends nsISupports {
    readonly hasComposition: boolean;
}

interface nsITextInputProcessorNotificationType extends nsISupports {
    readonly type: ACString;
    readonly hasRange: bool;
    readonly offset: unsigned_long;
    readonly text: AString;
    readonly collapsed: boolean;
    readonly length: uint32_t;
    readonly reversed: boolean;
    readonly writingMode: ACString;
    readonly causedByComposition: boolean;
    readonly causedBySelectionEvent: boolean;
    readonly occurredDuringComposition: boolean;
    readonly removedLength: unsigned_long;
    readonly addedLength: unsigned_long;
    readonly causedOnlyByComposition: boolean;
    readonly includingChangesDuringComposition: boolean;
    readonly includingChangesWithoutComposition: boolean;
}

interface nsITextInputProcessorCallbackType extends nsISupports {
}

interface nsITextToSubURIType extends nsISupports {
}

interface nsIThreadType extends nsISerialEventTarget {
    readonly PRThread: PRThread;
    CanInvokeJS: boolean;
    readonly eventTarget: nsIEventTarget;
    readonly lastLongTaskEnd: TimeStamp;
    readonly lastLongNonIdleTaskEnd: TimeStamp;
}

interface nsIThreadInternalType extends nsIThread {
    observer: nsIThreadObserver;
}

interface nsIThreadObserverType extends nsISupports {
}

interface nsINestedEventLoopConditionType extends nsISupports {
}

interface nsIThreadManagerType extends nsISupports {
    readonly mainThread: nsIThread;
    readonly currentThread: nsIThread;
    readonly mainThreadEventTarget: nsIEventTarget;
}

interface nsIThreadPoolListenerType extends nsISupports {
}

interface nsIThreadPoolType extends nsIEventTarget {
    threadLimit: unsigned_long;
    idleThreadLimit: unsigned_long;
    idleThreadTimeout: unsigned_long;
    idleThreadTimeoutRegressive: boolean;
    threadStackSize: unsigned_long;
    listener: nsIThreadPoolListener;
}

interface nsIThreadRetargetableRequestType extends nsISupports {
    readonly deliveryTarget: nsIEventTarget;
}

interface nsIThreadRetargetableStreamListenerType extends nsISupports {
}

interface nsIThreadShutdownType extends nsISupports {
    readonly completed: boolean;
}

interface nsIInputChannelThrottleQueueType extends nsISupports {
    readonly meanBytesPerSecond: unsigned_long;
    readonly maxBytesPerSecond: unsigned_long;
}

interface nsIThrottledInputChannelType extends nsISupports {
    throttleQueue: nsIInputChannelThrottleQueue;
}

interface nsIServerTimingType extends nsISupports {
    readonly name: ACString;
    readonly duration: double;
    readonly description: ACString;
}

interface nsITimedChannelType extends nsISupports {
    timingEnabled: boolean;
    redirectCount: uint8_t;
    internalRedirectCount: uint8_t;
    channelCreation: TimeStamp;
    asyncOpen: TimeStamp;
    launchServiceWorkerStart: TimeStamp;
    launchServiceWorkerEnd: TimeStamp;
    dispatchFetchEventStart: TimeStamp;
    dispatchFetchEventEnd: TimeStamp;
    handleFetchEventStart: TimeStamp;
    handleFetchEventEnd: TimeStamp;
    readonly domainLookupStart: TimeStamp;
    readonly domainLookupEnd: TimeStamp;
    readonly connectStart: TimeStamp;
    readonly tcpConnectEnd: TimeStamp;
    readonly secureConnectionStart: TimeStamp;
    readonly connectEnd: TimeStamp;
    readonly requestStart: TimeStamp;
    readonly responseStart: TimeStamp;
    readonly responseEnd: TimeStamp;
    redirectStart: TimeStamp;
    redirectEnd: TimeStamp;
    initiatorType: AString;
    allRedirectsSameOrigin: boolean;
    allRedirectsPassTimingAllowCheck: boolean;
    readonly cacheReadStart: TimeStamp;
    readonly cacheReadEnd: TimeStamp;
    readonly transactionPending: TimeStamp;
    readonly channelCreationTime: PRTime;
    readonly asyncOpenTime: PRTime;
    readonly launchServiceWorkerStartTime: PRTime;
    readonly launchServiceWorkerEndTime: PRTime;
    readonly dispatchFetchEventStartTime: PRTime;
    readonly dispatchFetchEventEndTime: PRTime;
    readonly handleFetchEventStartTime: PRTime;
    readonly handleFetchEventEndTime: PRTime;
    readonly domainLookupStartTime: PRTime;
    readonly domainLookupEndTime: PRTime;
    readonly connectStartTime: PRTime;
    readonly tcpConnectEndTime: PRTime;
    readonly secureConnectionStartTime: PRTime;
    readonly connectEndTime: PRTime;
    readonly requestStartTime: PRTime;
    readonly responseStartTime: PRTime;
    readonly responseEndTime: PRTime;
    readonly cacheReadStartTime: PRTime;
    readonly cacheReadEndTime: PRTime;
    readonly redirectStartTime: PRTime;
    readonly redirectEndTime: PRTime;
    readonly transactionPendingTime: PRTime;
    reportResourceTiming: boolean;
    readonly serverTiming: nsIArray;
}

interface nsITimerCallbackType extends nsISupports {
}

interface nsITimerType extends nsISupports {
    delay: unsigned_long;
    type: unsigned_long;
    readonly closure: voidPtr;
    readonly callback: nsITimerCallback;
    target: nsIEventTarget;
    readonly allowedEarlyFiringMicroseconds: unsigned_long;
}

interface nsITlsHandshakeCallbackListenerType extends nsISupports {
}

interface nsITokenDialogsType extends nsISupports {
}

interface nsITokenPasswordDialogsType extends nsISupports {
}

interface nsIToolkitChromeRegistryType extends nsIXULChromeRegistry {
}

interface nsIProfileLockType extends nsISupports {
    readonly directory: nsIFile;
    readonly localDirectory: nsIFile;
    readonly replacedLockTime: PRTime;
}

interface nsIToolkitProfileType extends nsISupports {
    readonly rootDir: nsIFile;
    readonly localDir: nsIFile;
    name: AUTF8String;
}

interface nsIToolkitProfileServiceType extends nsISupports {
    readonly isListOutdated: boolean;
    startWithLastProfile: boolean;
    readonly profiles: nsISimpleEnumerator;
    readonly currentProfile: nsIToolkitProfile;
    defaultProfile: nsIToolkitProfile;
    readonly profileCount: unsigned_long;
}

interface nsIToolkitShellServiceType extends nsISupports {
}

interface nsITooltipListenerType extends nsISupports {
}

interface nsITooltipTextProviderType extends nsISupports {
}

interface nsITouchBarHelperType extends nsISupports {
    readonly activeUrl: AString;
    readonly activeTitle: AString;
    readonly isUrlbarFocused: boolean;
    allItems: nsIArray;
    readonly document: Document;
}

interface nsITouchBarInputCallbackType extends nsISupports {
}

interface nsITouchBarInputType extends nsISupports {
    readonly key: AString;
    title: AString;
    image: nsIURI;
    type: AString;
    callback: nsITouchBarInputCallback;
    color: uint32_t;
    disabled: boolean;
    children: nsIArray;
}

interface nsITouchBarUpdaterType extends nsISupports {
}

interface nsITraceableChannelType extends nsISupports {
}

interface nsITrackingDBServiceType extends nsISupports {
}

interface nsITransactionType extends nsISupports {
    readonly isTransient: boolean;
}

interface nsITransactionManagerType extends nsISupports {
    readonly numberOfUndoItems: long;
    readonly numberOfRedoItems: long;
    maxTransactionCount: long;
}

interface nsITransferType extends nsIWebProgressListener2 {
}

interface nsIFlavorDataProviderType extends nsISupports {
}

interface nsITransferableType extends nsISupports {
    converter: nsIFormatConverter;
    isPrivateData: boolean;
    requestingPrincipal: nsIPrincipal;
    contentPolicyType: nsContentPolicyType;
    cookieJarSettings: nsICookieJarSettings;
}

interface nsITransportType extends nsISupports {
}

interface nsITransportEventSinkType extends nsISupports {
}

interface nsITransportProviderType extends nsISupports {
}

interface nsITransportSecurityInfoType extends nsISupports {
    readonly securityState: unsigned_long;
    readonly errorCode: long;
    readonly errorCodeString: AString;
    readonly serverCert: nsIX509Cert;
    readonly cipherName: ACString;
    readonly keyLength: unsigned_long;
    readonly secretKeyLength: unsigned_long;
    readonly keaGroupName: ACString;
    readonly signatureSchemeName: ACString;
    readonly protocolVersion: unsigned_short;
    readonly certificateTransparencyStatus: unsigned_short;
    readonly isAcceptedEch: boolean;
    readonly isDelegatedCredential: boolean;
    readonly overridableErrorCategory: nsITransportSecurityInfo_OverridableErrorCategory;
    readonly madeOCSPRequests: boolean;
    readonly usedPrivateDNS: boolean;
    readonly isExtendedValidation: boolean;
    readonly negotiatedNPN: ACString;
    readonly resumed: boolean;
    readonly isBuiltCertChainRootBuiltInRoot: boolean;
    readonly peerId: ACString;
}

interface nsITreeSelectionType extends nsISupports {
    tree: XULTreeElement;
    readonly single: boolean;
    readonly count: long;
    selectEventsSuppressed: boolean;
    currentIndex: long;
    readonly shiftSelectPivot: long;
}

interface nsINativeTreeSelectionType extends nsITreeSelection {
}

interface nsITreeViewType extends nsISupports {
    readonly rowCount: long;
    selection: nsITreeSelection;
}

interface nsITypeAheadFindType extends nsISupports {
    readonly searchString: AString;
    caseSensitive: boolean;
    matchDiacritics: boolean;
    entireWord: boolean;
    readonly foundLink: Element;
    readonly foundEditable: Element;
    readonly currentWindow: mozIDOMWindow;
}

interface nsIU2FTokenManagerType extends nsISupports {
}

interface nsIUDPSocketType extends nsISupports {
    readonly localAddr: nsINetAddr;
    readonly port: long;
    multicastLoopback: boolean;
    multicastInterface: AUTF8String;
    multicastInterfaceAddr: NetAddr;
    recvBufferSize: long;
    sendBufferSize: long;
    dontFragment: boolean;
}

interface nsIUDPSocketListenerType extends nsISupports {
}

interface nsIUDPMessageType extends nsISupports {
    readonly fromAddr: nsINetAddr;
    readonly data: ACString;
    readonly outputStream: nsIOutputStream;
    readonly rawData: jsval;
}

interface nsIUDPSocketSyncListenerType extends nsISupports {
}

interface nsIUDPSocketInternalType extends nsISupports {
}

interface nsIURIType extends nsISupports {
    readonly spec: AUTF8String;
    readonly prePath: AUTF8String;
    readonly scheme: ACString;
    readonly userPass: AUTF8String;
    readonly username: AUTF8String;
    readonly password: AUTF8String;
    readonly hostPort: AUTF8String;
    readonly host: AUTF8String;
    readonly port: long;
    readonly pathQueryRef: AUTF8String;
    readonly asciiSpec: ACString;
    readonly asciiHostPort: ACString;
    readonly asciiHost: ACString;
    readonly ref: AUTF8String;
    readonly specIgnoringRef: AUTF8String;
    readonly hasRef: boolean;
    readonly filePath: AUTF8String;
    readonly query: AUTF8String;
    readonly displayHost: AUTF8String;
    readonly displayHostPort: AUTF8String;
    readonly displaySpec: AUTF8String;
    readonly displayPrePath: AUTF8String;
}

interface nsIURIClassifierCallbackType extends nsISupports {
}

interface nsIURIClassifierType extends nsISupports {
}

interface nsIURIContentListenerType extends nsISupports {
    loadCookie: nsISupports;
    parentContentListener: nsIURIContentListener;
}

interface nsIURIFixupInfoType extends nsISupports {
    consumer: BrowsingContext;
    preferredURI: nsIURI;
    fixedURI: nsIURI;
    keywordProviderName: AString;
    keywordAsSent: AString;
    fixupChangedProtocol: boolean;
    fixupCreatedAlternateURI: boolean;
    originalInput: AUTF8String;
    postData: nsIInputStream;
}

interface nsIURIFixupType extends nsISupports {
}

interface nsIURILoaderType extends nsISupports {
}

interface nsIURISetSpecType extends nsISupports {
}

interface nsIURISettersType extends nsIURISetSpec {
}

interface nsIURIMutatorType extends nsIURISetters {
}

interface nsIURIWithSpecialOriginType extends nsISupports {
    readonly origin: nsIURI;
}

interface nsIURLType extends nsIURI {
    readonly directory: AUTF8String;
    readonly fileName: AUTF8String;
    readonly fileBaseName: AUTF8String;
    readonly fileExtension: AUTF8String;
}

interface nsIURLMutatorType extends nsISupports {
}

interface nsIURLDecorationAnnotationsServiceType extends nsISupports {
}

interface nsIURLFormatterType extends nsISupports {
}

interface nsIURLParserType extends nsISupports {
}

interface nsIURLQueryStrippingListObserverType extends nsISupports {
}

interface nsIURLQueryStrippingListServiceType extends nsISupports {
}

interface nsIUUIDGeneratorType extends nsISupports {
}

interface nsIUnicharInputStreamType extends nsISupports {
}

interface nsIUnicharLineInputStreamType extends nsISupports {
}

interface nsIUnicharOutputStreamType extends nsISupports {
}

interface nsIUpdatePatchType extends nsISupports {
    readonly type: AString;
    readonly URL: AString;
    finalURL: AString;
    readonly size: unsigned_long;
    state: AString;
    errorCode: long;
    selected: boolean;
}

interface nsIUpdateType extends nsISupports {
    readonly type: AString;
    readonly name: AString;
    readonly displayVersion: AString;
    readonly appVersion: AString;
    readonly previousAppVersion: AString;
    readonly buildID: AString;
    readonly detailsURL: AString;
    readonly serviceURL: AString;
    readonly channel: AString;
    readonly unsupported: boolean;
    promptWaitTime: long_long;
    isCompleteUpdate: boolean;
    installDate: long_long;
    statusText: AString;
    readonly selectedPatch: nsIUpdatePatch;
    state: AString;
    errorCode: long;
    elevationFailure: boolean;
    readonly patchCount: unsigned_long;
}

interface nsIUpdateCheckResultType extends nsISupports {
    readonly checksAllowed: boolean;
    readonly succeeded: boolean;
    readonly request: jsval;
}

interface nsIUpdateCheckType extends nsISupports {
    readonly id: long;
    readonly result: Promise;
}

interface nsIUpdateCheckerType extends nsISupports {
}

interface nsIApplicationUpdateServiceType extends nsISupports {
    readonly disabled: boolean;
    readonly canUsuallyCheckForUpdates: boolean;
    readonly canCheckForUpdates: boolean;
    readonly elevationRequired: boolean;
    readonly canUsuallyApplyUpdates: boolean;
    readonly canApplyUpdates: boolean;
    readonly isOtherInstanceHandlingUpdates: boolean;
    readonly canUsuallyStageUpdates: boolean;
    readonly canStageUpdates: boolean;
    readonly canUsuallyUseBits: boolean;
    readonly canUseBits: boolean;
    readonly manualUpdateOnly: boolean;
    onlyDownloadUpdatesThisSession: boolean;
    readonly currentState: long;
    readonly stateTransition: Promise;
}

interface nsIUpdateProcessorType extends nsISupports {
}

interface nsIUpdateSyncManagerType extends nsISupports {
}

interface nsIUpdateManagerType extends nsISupports {
    readyUpdate: nsIUpdate;
    downloadingUpdate: nsIUpdate;
}

interface nsIUpdateTimerManagerType extends nsISupports {
}

interface nsIUploadChannelType extends nsISupports {
    readonly uploadStream: nsIInputStream;
}

interface nsIUploadChannel2Type extends nsISupports {
    readonly uploadStreamHasHeaders: boolean;
}

interface nsIUrlClassifierCallbackType extends nsISupports {
}

interface nsIUrlClassifierUpdateObserverType extends nsISupports {
}

interface nsIUrlClassifierDBServiceType extends nsISupports {
}

interface nsIUrlClassifierLookupCallbackType extends nsISupports {
}

interface nsIUrlClassifierClassifyCallbackType extends nsISupports {
}

interface nsIUrlClassifierExceptionListObserverType extends nsISupports {
}

interface nsIUrlClassifierExceptionListServiceType extends nsISupports {
}

interface nsIUrlClassifierFeatureType extends nsISupports {
    readonly name: ACString;
    readonly exceptionHostList: ACString;
}

interface nsIUrlClassifierFeatureResultType extends nsISupports {
    readonly uri: nsIURI;
    readonly feature: nsIUrlClassifierFeature;
    readonly list: ACString;
}

interface nsIUrlClassifierFeatureCallbackType extends nsISupports {
}

interface nsIFullHashMatchType extends nsISupports {
    readonly tableName: ACString;
    readonly fullHash: ACString;
    readonly cacheDuration: uint32_t;
}

interface nsIUrlClassifierHashCompleterCallbackType extends nsISupports {
}

interface nsIUrlClassifierHashCompleterType extends nsISupports {
}

interface nsIUrlClassifierPositiveCacheEntryType extends nsISupports {
    readonly fullhash: ACString;
    readonly expiry: long_long;
}

interface nsIUrlClassifierCacheEntryType extends nsISupports {
    readonly prefix: ACString;
    readonly expiry: long_long;
    readonly matches: nsIArray;
}

interface nsIUrlClassifierCacheInfoType extends nsISupports {
    readonly table: ACString;
    readonly entries: nsIArray;
}

interface nsIUrlClassifierGetCacheCallbackType extends nsISupports {
}

interface nsIUrlClassifierInfoType extends nsISupports {
}

interface nsIUrlClassifierPrefixSetType extends nsISupports {
}

interface nsIUrlClassifierRemoteSettingsServiceType extends nsISupports {
}

interface nsIUrlClassifierStreamUpdaterType extends nsISupports {
}

interface nsIUrlClassifierParseFindFullHashCallbackType extends nsISupports {
}

interface nsIUrlClassifierUtilsType extends nsISupports {
}

interface nsIUrlListManagerType extends nsISupports {
}

interface nsIUserIdleServiceType extends nsISupports {
    readonly idleTime: unsigned_long;
    disabled: boolean;
}

interface nsIUserIdleServiceInternalType extends nsIUserIdleService {
}

interface nsIUtilityProcessTestType extends nsISupports {
}

interface nsIVariantType extends nsISupports {
    readonly dataType: uint16_t;
}

interface nsIWritableVariantType extends nsIVariant {
    writable: boolean;
}

interface nsIVersionComparatorType extends nsISupports {
}

interface nsIViewSourceChannelType extends nsIChannel {
    originalContentType: ACString;
    readonly isSrcdocChannel: boolean;
    baseURI: nsIURI;
}

interface nsIWakeLockType extends nsISupports {
}

interface nsIWeakReferenceType extends nsISupports {
}

interface nsISupportsWeakReferenceType extends nsISupports {
}

interface nsIWebBrowserType extends nsISupports {
    containerWindow: nsIWebBrowserChrome;
    readonly contentDOMWindow: mozIDOMWindowProxy;
}

interface nsIWebBrowserChromeType extends nsISupports {
    chromeFlags: unsigned_long;
}

interface nsIWebBrowserChromeFocusType extends nsISupports {
}

interface nsIWebBrowserFindType extends nsISupports {
    searchString: AString;
    findBackwards: boolean;
    wrapFind: boolean;
    entireWord: boolean;
    matchCase: boolean;
    matchDiacritics: boolean;
    searchFrames: boolean;
}

interface nsIWebBrowserFindInFramesType extends nsISupports {
    currentSearchFrame: mozIDOMWindowProxy;
    rootSearchFrame: mozIDOMWindowProxy;
    searchSubframes: boolean;
    searchParentFrames: boolean;
}

interface nsIWebBrowserPersistType extends nsICancelable {
    persistFlags: unsigned_long;
    readonly currentState: unsigned_long;
    readonly result: nsresult;
    progressListener: nsIWebProgressListener;
}

interface nsIWebBrowserPersistURIMapType extends nsISupports {
    readonly numMappedURIs: unsigned_long;
    readonly targetBaseURI: AUTF8String;
}

interface nsIWebBrowserPersistDocumentType extends nsISupports {
    readonly isClosed: boolean;
    readonly isPrivate: boolean;
    readonly documentURI: AUTF8String;
    readonly baseURI: AUTF8String;
    readonly contentType: ACString;
    readonly characterSet: ACString;
    readonly title: AString;
    readonly referrerInfo: nsIReferrerInfo;
    readonly cookieJarSettings: nsICookieJarSettings;
    readonly contentDisposition: AString;
    readonly postData: nsIInputStream;
    readonly principal: nsIPrincipal;
    readonly cacheKey: unsigned_long;
    persistFlags: unsigned_long;
}

interface nsIWebBrowserPersistResourceVisitorType extends nsISupports {
}

interface nsIWebBrowserPersistWriteCompletionType extends nsISupports {
}

interface nsIWebBrowserPersistDocumentReceiverType extends nsISupports {
}

interface nsIWebBrowserPrintType extends nsISupports {
    readonly doingPrint: boolean;
    readonly doingPrintPreview: boolean;
    readonly rawNumPages: long;
    readonly printPreviewNumPages: long;
    readonly printPreviewCurrentPageNumber: long;
}

interface nsIWebNavigationType extends nsISupports {
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    readonly document: Document;
    readonly currentURI: nsIURI;
    readonly sessionHistory: nsISupports;
}

interface nsIWebNavigationInfoType extends nsISupports {
}

interface nsIWebPageDescriptorType extends nsISupports {
    readonly currentDescriptor: nsISupports;
}

interface nsIWebProgressType extends nsISupports {
    readonly browsingContext: BrowsingContext;
    readonly DOMWindow: mozIDOMWindowProxy;
    readonly isTopLevel: boolean;
    readonly isLoadingDocument: boolean;
    readonly loadType: unsigned_long;
    target: nsIEventTarget;
    readonly documentRequest: nsIRequest;
}

interface nsIWebProgressListenerType extends nsISupports {
}

interface nsIWebProgressListener2Type extends nsIWebProgressListener {
}

interface nsIWebProtocolHandlerRegistrarType extends nsISupports {
}

interface nsIWebSocketChannelType extends nsISupports {
    readonly originalURI: nsIURI;
    readonly URI: nsIURI;
    notificationCallbacks: nsIInterfaceRequestor;
    readonly securityInfo: nsITransportSecurityInfo;
    loadGroup: nsILoadGroup;
    loadInfo: nsILoadInfo;
    protocol: ACString;
    readonly extensions: ACString;
    readonly httpChannelId: uint64_t;
    pingInterval: unsigned_long;
    pingTimeout: unsigned_long;
    serial: unsigned_long;
}

interface nsIWebSocketFrameType extends nsISupports {
    readonly timeStamp: DOMHighResTimeStamp;
    readonly finBit: boolean;
    readonly rsvBit1: boolean;
    readonly rsvBit2: boolean;
    readonly rsvBit3: boolean;
    readonly opCode: unsigned_short;
    readonly maskBit: boolean;
    readonly mask: unsigned_long;
    readonly payload: ACString;
}

interface nsIWebSocketEventListenerType extends nsISupports {
}

interface nsIWebSocketEventServiceType extends nsISupports {
}

interface nsIWebSocketImplType extends nsISupports {
}

interface nsIWebSocketListenerType extends nsISupports {
}

interface nsIWebTransportType extends nsISupports {
}

interface WebTransportSessionEventListenerType extends nsISupports {
}

interface nsIWebTransportStreamCallbackType extends nsISupports {
}

interface nsIWebTransportSendStreamStatsType extends nsISupports {
    readonly timestamp: TimeStamp;
    readonly bytesSent: unsigned_long_long;
    readonly bytesAcknowledged: unsigned_long_long;
}

interface nsIWebTransportReceiveStreamStatsType extends nsISupports {
    readonly timestamp: TimeStamp;
    readonly bytesReceived: unsigned_long_long;
}

interface nsIWebTransportStreamStatsCallbackType extends nsISupports {
}

interface nsIWebTransportReceiveStreamType extends nsISupports {
}

interface nsIWebTransportSendStreamType extends nsISupports {
}

interface nsIWebTransportBidirectionalStreamType extends nsISupports {
}

interface nsIWebVTTListenerType extends nsISupports {
}

interface nsIWebVTTParserWrapperType extends nsISupports {
}

interface nsIWellKnownOpportunisticUtilsType extends nsISupports {
    readonly valid: bool;
}

interface nsIWifiAccessPointType extends nsISupports {
    readonly mac: ACString;
    readonly ssid: AString;
    readonly rawSSID: ACString;
    readonly signal: long;
}

interface nsIWifiListenerType extends nsISupports {
}

interface nsIWifiMonitorType extends nsISupports {
}

interface nsIWinAppHelperType extends nsISupports {
    readonly userCanElevate: boolean;
}

interface nsIWinTaskSchedulerServiceType extends nsISupports {
}

interface nsIWinTaskbarType extends nsISupports {
    readonly available: boolean;
    readonly defaultGroupId: AString;
    readonly defaultPrivateGroupId: AString;
}

interface nsIWindowCreatorType extends nsISupports {
}

interface nsIWindowMediatorType extends nsISupports {
}

interface nsIWindowMediatorListenerType extends nsISupports {
}

interface nsIWindowProviderType extends nsISupports {
}

interface nsIWindowWatcherType extends nsISupports {
    readonly activeWindow: mozIDOMWindowProxy;
}

interface nsIWindowlessBrowserType extends nsIWebNavigation {
    readonly docShell: nsIDocShell;
    readonly browsingContext: BrowsingContext;
}

interface nsIUnknownWindowsTagListenerType extends nsISupports {
}

interface nsIWindowsAlertsServiceType extends nsIAlertsService {
}

interface nsIWindowsPackageManagerType extends nsISupports {
}

interface nsIWindowsRegKeyType extends nsISupports {
    key: HKEY;
    readonly childCount: unsigned_long;
    readonly valueCount: unsigned_long;
}

interface nsIWindowsShellServiceType extends nsISupports {
}

interface nsIWindowsUIUtilsType extends nsISupports {
    readonly systemSmallIconSize: long;
    readonly systemLargeIconSize: long;
    readonly inTabletMode: boolean;
}

interface nsIWorkerDebuggerListenerType extends nsISupports {
}

interface nsIWorkerDebuggerType extends nsISupports {
    readonly isClosed: bool;
    readonly isChrome: bool;
    readonly isInitialized: bool;
    readonly parent: nsIWorkerDebugger;
    readonly type: unsigned_long;
    readonly url: AString;
    readonly window: mozIDOMWindow;
    readonly principal: nsIPrincipal;
    readonly serviceWorkerID: unsigned_long;
    readonly id: AString;
}

interface nsIWorkerDebuggerManagerListenerType extends nsISupports {
}

interface nsIWorkerDebuggerManagerType extends nsISupports {
}

interface nsIWritablePropertyBagType extends nsIPropertyBag {
}

interface nsIWritablePropertyBag2Type extends nsIPropertyBag2 {
}

interface nsIX509CertType extends nsISupports {
    readonly emailAddress: AString;
    readonly isBuiltInRoot: bool;
    readonly subjectName: AString;
    readonly commonName: AString;
    readonly organization: AString;
    readonly organizationalUnit: AString;
    readonly sha256Fingerprint: AString;
    readonly sha1Fingerprint: AString;
    readonly tokenName: AString;
    readonly issuerName: AString;
    readonly serialNumber: AString;
    readonly issuerCommonName: AString;
    readonly issuerOrganization: AString;
    readonly issuerOrganizationUnit: AString;
    readonly validity: nsIX509CertValidity;
    readonly dbKey: ACString;
    readonly displayName: AString;
    readonly certType: unsigned_long;
    readonly sha256SubjectPublicKeyInfoDigest: ACString;
}

interface nsIOpenSignedAppFileCallbackType extends nsISupports {
}

interface nsIAsyncBoolCallbackType extends nsISupports {
}

interface nsICertVerificationCallbackType extends nsISupports {
}

interface nsIX509CertDBType extends nsISupports {
}

interface nsIX509CertValidityType extends nsISupports {
    readonly notBefore: PRTime;
    readonly notAfter: PRTime;
}

interface nsIXPCScriptableType extends nsISupports {
    readonly className: AUTF8String;
}

interface nsIXREDirProviderType extends nsISupports {
}

interface nsIXULAppInfoType extends nsIPlatformInfo {
    readonly vendor: ACString;
    readonly name: ACString;
    readonly ID: ACString;
    readonly version: ACString;
    readonly appBuildID: ACString;
    readonly UAName: ACString;
    readonly sourceURL: ACString;
    readonly updateURL: ACString;
}

interface nsIXULBrowserWindowType extends nsISupports {
}

interface nsIXULRuntimeType extends nsISupports {
    readonly inSafeMode: boolean;
    readonly win32kExperimentStatus: nsIXULRuntime_ExperimentStatus;
    readonly win32kLiveStatusTestingOnly: nsIXULRuntime_ContentWin32kLockdownState;
    readonly win32kSessionStatus: nsIXULRuntime_ContentWin32kLockdownState;
    readonly fissionAutostart: boolean;
    readonly fissionExperimentStatus: nsIXULRuntime_ExperimentStatus;
    readonly fissionDecisionStatus: nsIXULRuntime_FissionDecisionStatus;
    readonly fissionDecisionStatusString: ACString;
    readonly sessionHistoryInParent: boolean;
    logConsoleErrors: boolean;
    readonly OS: AUTF8String;
    readonly XPCOMABI: AUTF8String;
    readonly widgetToolkit: AUTF8String;
    readonly processType: unsigned_long;
    readonly processID: unsigned_long;
    readonly uniqueProcessID: uint64_t;
    readonly remoteType: AUTF8String;
    readonly browserTabsRemoteAutostart: boolean;
    readonly maxWebProcessCount: uint32_t;
    readonly accessibilityEnabled: boolean;
    readonly accessibleHandlerUsed: boolean;
    readonly accessibilityInstantiator: AString;
    readonly shouldBlockIncompatJaws: boolean;
    readonly is64Bit: boolean;
    readonly isTextRecognitionSupported: boolean;
    readonly replacedLockTime: PRTime;
    readonly defaultUpdateChannel: AUTF8String;
    readonly distributionID: AUTF8String;
    readonly windowsDLLBlocklistStatus: boolean;
    readonly restartedByOS: boolean;
    readonly chromeColorSchemeIsDark: boolean;
    readonly contentThemeDerivedColorSchemeIsDark: boolean;
    readonly drawInTitlebar: boolean;
    readonly processStartupShortcut: AString;
    readonly launcherProcessState: uint32_t;
    readonly lastAppVersion: ACString;
    readonly lastAppBuildID: ACString;
}

interface nsIXULStoreType extends nsISupports {
}

interface nsIZipEntryType extends nsISupports {
    readonly compression: unsigned_short;
    readonly size: unsigned_long;
    readonly realSize: unsigned_long;
    readonly CRC32: unsigned_long;
    readonly isDirectory: boolean;
    readonly lastModifiedTime: PRTime;
    readonly isSynthetic: boolean;
    readonly permissions: unsigned_long;
}

interface nsIZipReaderType extends nsISupports {
    readonly file: nsIFile;
}

interface nsIZipReaderCacheType extends nsISupports {
}

interface nsIZipWriterType extends nsISupports {
    comment: ACString;
    readonly inQueue: boolean;
    readonly file: nsIFile;
}

interface nsPIDNSServiceType extends nsIDNSService {
    prefetchEnabled: boolean;
}

interface nsPIPromptServiceType extends nsISupports {
}

interface nsPISocketTransportServiceType extends nsIRoutedSocketTransportService {
    readonly sendBufferSize: long;
    offline: boolean;
    readonly keepaliveIdleTime: long;
    readonly keepaliveRetryInterval: long;
    readonly keepaliveProbeCount: long;
}

interface nsPIWidgetCocoaType extends nsISupports {
    readonly sheetWindowParent: NSWindowPtr;
    readonly isSheet: boolean;
}

interface nsPIWindowWatcherType extends nsISupports {
}

interface txIEXSLTFunctionsType extends nsISupports {
}

interface xpcIJSWeakReferenceType extends nsISupports {
}

interface nsIXPCComponents_InterfacesType extends nsISupports {
}

interface nsIXPCComponents_ClassesType extends nsISupports {
}

interface nsIXPCComponents_ResultsType extends nsISupports {
}

interface nsIXPCComponents_IDType extends nsISupports {
}

interface nsIXPCComponents_ExceptionType extends nsISupports {
}

interface nsIXPCComponents_ConstructorType extends nsISupports {
}

interface nsIXPCComponents_utils_SandboxType extends nsISupports {
}

interface nsIScheduledGCCallbackType extends nsISupports {
}

interface nsIXPCComponents_UtilsType extends nsISupports {
    readonly Sandbox: nsIXPCComponents_utils_Sandbox;
    strict_mode: boolean;
    readonly isInAutomation: boolean;
}

interface nsIXPCComponentsType extends nsISupports {
    readonly interfaces: nsIXPCComponents_Interfaces;
    readonly results: nsIXPCComponents_Results;
    readonly classes: nsIXPCComponents_Classes;
    readonly stack: nsIStackFrame;
    readonly manager: nsIComponentManager;
    readonly utils: nsIXPCComponents_Utils;
    readonly ID: nsIXPCComponents_ID;
    readonly Exception: nsIXPCComponents_Exception;
    readonly Constructor: nsIXPCComponents_Constructor;
    returnCode: jsval;
}

interface nsIXPCTestObjectReadOnlyType extends nsISupports {
    readonly strReadOnly: string;
    readonly boolReadOnly: boolean;
    readonly shortReadOnly: short;
    readonly longReadOnly: long;
    readonly floatReadOnly: float;
    readonly charReadOnly: char;
    readonly timeReadOnly: PRTime;
}

interface nsIXPCTestObjectReadWriteType extends nsISupports {
    stringProperty: string;
    booleanProperty: boolean;
    shortProperty: short;
    longProperty: long;
    floatProperty: float;
    charProperty: char;
    timeProperty: PRTime;
}

interface nsIXPCTestBug809674Type extends nsISupports {
    valProperty: jsval;
    uintProperty: unsigned_long;
}

interface nsIXPCTestCEnumsType extends nsISupports {
}

interface nsIXPCTestESMReturnCodeParentType extends nsISupports {
}

interface nsIXPCTestESMReturnCodeChildType extends nsISupports {
}

interface nsIXPCTestInterfaceAType extends nsISupports {
    name: string;
}

interface nsIXPCTestInterfaceBType extends nsISupports {
    name: string;
}

interface nsIXPCTestInterfaceCType extends nsISupports {
    someInteger: long;
}

interface nsIXPCTestParamsType extends nsISupports {
}

interface nsIXPCTestReturnCodeParentType extends nsISupports {
}

interface nsIXPCTestReturnCodeChildType extends nsISupports {
}

interface nsIXPCTestFunctionInterfaceType extends nsISupports {
}

interface nsIXPCTestUtilsType extends nsISupports {
}

