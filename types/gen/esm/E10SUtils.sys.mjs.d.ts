declare module "resource://gre/modules/E10SUtils.sys.mjs" {export namespace E10SUtils {
    export { DEFAULT_REMOTE_TYPE };
    export { NOT_REMOTE };
    export { WEB_REMOTE_TYPE };
    export { WEB_REMOTE_COOP_COEP_TYPE_PREFIX };
    export { FILE_REMOTE_TYPE };
    export { EXTENSION_REMOTE_TYPE };
    export { PRIVILEGEDABOUT_REMOTE_TYPE };
    export { PRIVILEGEDMOZILLA_REMOTE_TYPE };
    export { FISSION_WEB_REMOTE_TYPE };
    export { SERVICEWORKER_REMOTE_TYPE };
    export { STANDARD_SAFE_PROTOCOLS };
    /**
     * @param aURI The URI of the about page
     * @return The instance of the nsIAboutModule related to this uri
     */
    export function getAboutModule(aURL: any): any;
    export function useCrossOriginOpenerPolicy(): any;
    export let _log: any;
    export function _uriStr(aUri: any): any;
    /**
     * @returns {Console}
     */
    export function log(): Console;
    /**
     * Serialize csp data.
     *
     * @param {nsIContentSecurity} csp. The csp to serialize.
     * @return {String} The base64 encoded csp data.
     */
    export function serializeCSP(csp: any): string;
    /**
     * Deserialize a base64 encoded csp (serialized with
     * Utils::serializeCSP).
     *
     * @param {String} csp_b64 A base64 encoded serialized csp.
     * @return {nsIContentSecurityPolicy} A deserialized csp.
     */
    export function deserializeCSP(csp_b64: string): nsIContentSecurityPolicy;
    export function canLoadURIInRemoteType(aURL: any, aRemoteSubframes: any, aRemoteType?: string, aOriginAttributes?: {}): boolean;
    export function getRemoteTypeForURI(aURL: any, aMultiProcess: any, aRemoteSubframes: any, aPreferredRemoteType: string, aCurrentUri: any, aOriginAttributes?: {}): any;
    export function getRemoteTypeForURIObject(aURI: any, options: any): any;
    export function makeInputStream(data: any): nsIDocShellType | nsIDocShellTreeItemType | nsISupportsType | nsIPrefServiceType | nsIWindowMediatorType | mozIDOMWindowProxyType | nsIDirectoryServiceType | nsIPropertiesType | nsIPrefBranchType | nsIObserverServiceType | nsIEnvironmentType | IJSDebuggerType | IPeerConnectionObserverType | IPeerConnectionType | IUrlClassifierUITelemetryType | nsIScriptableOKType | nsIScriptableWithNotXPCOMType | nsISessionStoreFunctionsType | amIAddonManagerStartupType | amIWebInstallPromptType | extIWebNavigationType | imgICacheType | imgIContainerType | imgIContainerDebugType | imgIEncoderType | nsIAsyncInputStreamType | nsIInputStreamType | imgILoaderType | imgINotificationObserverType | imgIRequestType | nsIRequestType | imgIScriptedNotificationObserverType | imgIToolsType | imgIContainerCallbackType | inIDeepTreeWalkerType | mozIAppServicesLoggerType | mozIVisitInfoType | mozIPlaceInfoType | mozIVisitInfoCallbackType | mozIVisitedStatusCallbackType | mozIAsyncHistoryType | mozIBridgedSyncEngineCallbackType | mozIBridgedSyncEngineApplyCallbackType | mozIBridgedSyncEngineType | mozIDOMWindowType | mozIDownloadPlatformType | mozIExtensionServiceWorkerInfoType | mozIExtensionListenerCallOptionsType | mozIExtensionEventListenerType | mozIExtensionAPIRequestType | mozIExtensionAPIRequestResultType | mozIExtensionAPIRequestHandlerType | mozIExtensionProcessScriptType | mozIExtensionStorageAreaType | mozIConfigurableExtensionStorageAreaType | mozISyncedExtensionStorageAreaType | mozIExtensionStorageListenerType | mozIExtensionStorageCallbackType | mozIGeckoMediaPluginChromeServiceType | mozIGeckoMediaPluginServiceType | mozIInterruptibleType | mozIJSSubScriptLoaderType | mozILocaleServiceType | mozIMozIntlType | mozIMozIntlHelperType | mozIOSPreferencesType | mozIPersonalDictionaryType | mozIPlacesAutoCompleteType | mozIPlacesPendingOperationType | mozIRemoteLazyInputStreamType | mozISandboxReportType | mozISandboxReportArrayType | mozISandboxReporterType | mozISandboxSettingsType | mozISandboxTestType | mozIServicesLogSinkType | mozISpellCheckingEngineType | mozIStorageAsyncConnectionType | mozIStorageAsyncStatementType | mozIStorageBaseStatementType | mozIStorageBindingParamsType | mozIStorageBindingParamsArrayType | mozIStorageCompletionCallbackType | mozIStorageConnectionType | mozIStorageErrorType | mozIStorageFunctionType | mozIStoragePendingStatementType | mozIStorageProgressHandlerType | mozIStorageResultSetType | mozIStorageRowType | mozIStorageValueArrayType | mozIStorageServiceType | mozIStorageStatementType | mozIStorageStatementCallbackType | mozIStorageVacuumParticipantType | mozISyncedBookmarksMirrorProgressListenerType | mozISyncedBookmarksMirrorCallbackType | mozISyncedBookmarksMirrorLoggerType | mozISyncedBookmarksMergerType | mozITXTToHTMLConvType | nsIStreamConverterType | nsIStreamListenerType | nsIRequestObserverType | mozITestInterfaceJSType | mozIThirdPartyUtilType | nsIASN1TreeType | nsITreeViewType | nsIAboutModuleType | nsIAboutNewTabServiceType | nsIInstalledApplicationType | nsIAboutThirdPartyType | nsIAddonPolicyServiceType | nsIAddonContentPolicyType | nsIAlertNotificationImageListenerType | nsIAlertActionType | nsIAlertNotificationType | nsIAlertsServiceType | nsIAlertsDoNotDisturbType | nsIAlertsIconDataType | nsIAlertsIconURIType | nsIAndroidEventCallbackType | nsIAndroidEventFinalizerType | nsIAndroidEventListenerType | nsIAndroidEventDispatcherType | nsIAndroidViewType | nsIAndroidBridgeType | nsIAppShellType | nsIAppShellServiceType | nsIAppStartupType | nsIAppWindowType | nsIApplicationChooserFinishedCallbackType | nsIApplicationChooserType | nsIApplicationReputationServiceType | nsIApplicationReputationQueryType | nsIApplicationReputationCallbackType | nsIArrayType | nsIArrayBufferInputStreamType | nsIArrayExtensionsType | nsIInputStreamCallbackType | nsIAsyncOutputStreamType | nsIOutputStreamType | nsIOutputStreamCallbackType | nsIAsyncShutdownBlockerType | nsIAsyncShutdownClientType | nsIAsyncShutdownCompletionCallbackType | nsIAsyncShutdownBarrierType | nsIAsyncShutdownServiceType | nsIAsyncStreamCopierType | nsIAsyncStreamCopier2Type | nsIAsyncVerifyRedirectCallbackType | nsISuspendedTypesType | nsIAudioChannelAgentCallbackType | nsIAudioChannelAgentType | nsIAudioDeviceInfoType | nsIAuthInformationType | nsIAuthModuleType | nsIAuthPromptType | nsIAuthPrompt2Type | nsIAuthPromptAdapterFactoryType | nsIAuthPromptCallbackType | nsIAuthPromptProviderType | nsIAutoCompleteControllerType | nsIAutoCompleteInputType | nsIAutoCompletePopupType | nsIAutoCompleteResultType | nsIAutoCompleteSearchType | nsIAutoCompleteObserverType | nsIAutoCompleteSearchDescriptorType | nsIAutoCompleteSimpleResultType | nsIAutoCompleteSimpleResultListenerType | nsIAutoCompleteSimpleSearchType | nsIAutoplayType | nsITabUnloaderType | nsIAvailableMemoryWatcherBaseType | nsIBFCacheEntryType | nsIBackgroundChannelRegistrarType | nsIBackgroundFileSaverType | nsIBackgroundFileSaverObserverType | nsIBackgroundTasksType | nsIBackgroundTasksManagerType | nsICommandLineHandlerType | nsIBackgroundTasksRunnerType | nsIBaseWindowType | nsIBidiKeyboardType | nsIBinaryHttpRequestType | nsIBinaryHttpResponseType | nsIBinaryHttpType | nsIBinaryInputStreamType | nsIBinaryOutputStreamType | nsIBitsType | nsIBitsNewRequestCallbackType | nsIBitsRequestType | nsIBitsCallbackType | nsIBlocklistServiceType | nsIBounceTrackingProtectionType | nsIBrowserType | nsIBrowserChildType | nsIBrowserControllerType | nsIOpenURIInFrameParamsType | nsIBrowserDOMWindowType | nsIBrowserElementAPIType | nsIBrowserHandlerType | nsIBrowserUsageType | nsIVisibleTabType | nsIBrowserWindowTrackerType | nsIBufferedInputStreamType | nsIBufferedOutputStreamType | nsIByteRangeRequestType | nsICacheEntryType | nsICacheEntryMetaDataVisitorType | nsICacheEntryDoomCallbackType | nsICacheEntryOpenCallbackType | nsIInputStreamReceiverType | nsICacheInfoChannelType | nsICachePurgeLockType | nsICacheStorageType | nsICacheStorageServiceType | nsICacheStorageConsumptionObserverType | nsICacheStorageVisitorType | nsICacheTestingType | nsICachingChannelType | nsICancelableType | nsICaptivePortalCallbackType | nsICaptivePortalDetectorType | nsICaptivePortalServiceCallbackType | nsICaptivePortalServiceType | nsICascadeFilterType | nsICategoryEntryType | nsISupportsCStringType | nsISupportsPrimitiveType | nsICategoryManagerType | nsICertOverrideType | nsICertOverrideServiceType | nsICertStorageCallbackType | nsIRevocationStateType | nsIIssuerAndSerialRevocationStateType | nsISubjectAndPubKeyRevocationStateType | nsICRLiteCoverageType | nsICRLiteTimestampType | nsICertInfoType | nsICertStorageType | nsICertTreeItemType | nsICertTreeType | nsICertificateDialogsType | nsIChannelType | nsIIdentChannelType | nsIUrlClassifierBlockedChannelType | nsIChannelClassifierServiceType | nsIChannelEventSinkType | nsIChildChannelType | nsIChromeRegistryType | nsIXULChromeRegistryType | nsIClassInfoType | nsIClassOfServiceType | nsIClassifiedChannelType | nsIClearDataServiceType | nsIClearDataCallbackType | nsIClickRuleType | nsIClientAuthDialogCallbackType | nsIClientAuthDialogServiceType | nsIClientAuthDialogsType | nsIClientAuthRememberRecordType | nsIClientAuthRememberServiceType | nsIAsyncSetClipboardDataType | nsIAsyncSetClipboardDataCallbackType | nsIClipboardType | nsIClipboardHelperType | nsIClipboardOwnerType | nsICloneableInputStreamType | nsICloneableInputStreamWithRangeType | nsICodeCoverageType | nsIColorPickerShownCallbackType | nsIColorPickerType | nsICommandLineType | nsICommandLineRunnerType | nsICommandLineValidatorType | nsICommandManagerType | nsICommandParamsType | nsIComponentManagerType | nsIComponentRegistrarType | nsICompressConvStatsType | nsIConsoleAPIStorageType | nsIConsoleListenerType | nsIConsoleMessageType | nsIConsoleServiceType | nsIContentBlockingAllowListType | nsIContentDispatchChooserType | nsIContentHandlerType | nsIContentPermissionTypeType | nsIContentPermissionRequestType | nsIContentPermissionPromptType | nsIContentPolicyType | nsIContentPrefObserverType | nsIContentPrefService2Type | nsIContentPrefCallback2Type | nsIContentPrefType | nsIContentProcessInfoType | nsIContentProcessProviderType | nsIContentSecurityManagerType | nsIContentSecurityPolicyType | nsISerializableType | nsICSPEventListenerType | nsIContentSignatureVerifierType | nsIContentSnifferType | nsIContentViewerType | nsIContentViewerEditType | nsIControllerType | nsICommandControllerType | nsIControllerCommandType | nsIControllerCommandTableType | nsIControllerContextType | nsIControllersType | nsIConverterInputStreamType | nsIUnicharInputStreamType | nsIConverterOutputStreamType | nsIUnicharOutputStreamType | nsICookieType | nsICookieBannerListServiceType | nsICookieBannerRuleType | nsICookieBannerServiceType | nsICookieJarSettingsType | nsICookieManagerType | nsICookieNotificationType | nsICookiePermissionType | nsICookieRuleType | nsICookieTransactionCallbackType | nsICookieServiceType | nsICrashReporterType | nsICrashServiceType | nsICryptoHashType | nsICycleCollectorHandlerType | nsICycleCollectorLogSinkType | nsICycleCollectorListenerType | nsIDAPTelemetryType | nsIDHCPClientType | nsIDNSAdditionalInfoType | nsIDNSByTypeRecordType | nsIDNSRecordType | nsIDNSTXTRecordType | nsISVCParamType | nsISVCParamAlpnType | nsISVCParamNoDefaultAlpnType | nsISVCParamPortType | nsISVCParamIPv4HintType | nsISVCParamEchConfigType | nsISVCParamIPv6HintType | nsISVCParamODoHConfigType | nsISVCBRecordType | nsIDNSHTTPSSVCRecordType | nsIDNSListenerType | nsIDNSAddrRecordType | nsIDNSServiceType | nsIDOMChromeWindowType | nsIDOMEventListenerType | nsIDOMGeoPositionType | nsIDOMGeoPositionCallbackType | nsIDOMGeoPositionCoordsType | nsIDOMGeoPositionErrorCallbackType | nsIDOMGlobalPropertyInitializerType | nsIDOMMozBrowserFrameType | nsIDOMProcessChildType | nsIDOMProcessParentType | nsIDOMRequestServiceType | nsIDOMStorageManagerType | nsIDOMSessionStorageManagerType | nsIDOMMozWakeLockListenerType | nsIDOMWindowType | nsIDOMWindowUtilsType | nsITranslationNodeListType | nsIJSRAIIHelperType | nsIDOMXULButtonElementType | nsIDOMXULControlElementType | nsIDOMXULCommandDispatcherType | nsIDOMXULContainerItemElementType | nsIDOMXULContainerElementType | nsIDOMXULMenuListElementType | nsIDOMXULSelectControlElementType | nsIDOMXULMultiSelectControlElementType | nsIDOMXULRadioGroupElementType | nsIDOMXULRelatedElementType | nsIDOMXULSelectControlItemElementType | nsINetDashboardCallbackType | nsIDashboardType | nsIDashboardEventNotifierType | nsIDataStorageManagerType | nsIDataStorageType | nsIDataStorageItemType | nsIDebug2Type | nsIDefaultAgentType | nsIDeviceSensorDataType | nsIDeviceSensorsType | nsIDialogParamBlockType | nsIDirIndexType | nsIDirIndexListenerType | nsIDirIndexParserType | nsIDirectTaskDispatcherType | nsIDirectoryEnumeratorType | nsISimpleEnumeratorType | nsISimpleEnumeratorBaseType | nsIDirectoryServiceProviderType | nsIDirectoryServiceProvider2Type | nsIDisplayInfoType | nsIDocShellTreeOwnerType | nsIDocumentEncoderNodeFixupType | nsIDocumentEncoderType | nsIDocumentLoaderType | nsIDocumentLoaderFactoryType | nsIDocumentStateListenerType | nsIDomainPolicyType | nsIDomainSetType | nsIDownloaderType | nsIDownloadObserverType | nsIDragServiceType | nsIDragSessionType | nsIDroppedLinkItemType | nsIDroppedLinkHandlerType | nsIE10SUtilsType | nsIEarlyHintObserverType | nsIEdgeMigrationUtilsType | nsIEditActionListenerType | nsIEditingSessionType | nsIEditorType | nsIEditorMailSupportType | nsIEditorSpellCheckType | nsIEditorSpellCheckCallbackType | nsIEffectiveTLDServiceType | nsIEmbeddingSiteWindowType | nsIEncodedChannelType | nsIEnterprisePoliciesType | nsIEventListenerChangeType | nsIListenerChangeListenerType | nsIEventListenerInfoType | nsIEventListenerServiceType | nsIEventSourceEventListenerType | nsIEventSourceEventServiceType | nsIEventTargetType | nsIStackFrameType | nsIExceptionType | nsIExpatSinkType | nsIExternalHelperAppServiceType | nsPIExternalAppLauncherType | nsIHelperAppLauncherType | nsIExternalProtocolHandlerType | nsIProtocolHandlerType | nsIExternalProtocolServiceType | nsIFOGType | nsIFactoryType | nsIFaviconServiceType | nsIFaviconDataCallbackType | nsIFileType | nsIFileChannelType | nsIFilePickerType | nsIFilePickerShownCallbackType | nsIFileProtocolHandlerType | nsIFileInputStreamType | nsIFileOutputStreamType | nsIFileRandomAccessStreamType | nsIRandomAccessStreamType | nsISeekableStreamType | nsITellableStreamType | nsIFileMetadataType | nsIAsyncFileMetadataType | nsIFileMetadataCallbackType | nsIFileURLType | nsIURLType | nsIURIType | nsIFileURLMutatorType | nsIFinalizationWitnessServiceType | nsIFindType | nsIFindServiceType | nsIFingerprintingOverrideType | nsIFingerprintingWebCompatServiceType | nsIFocusManagerType | nsIFontEnumeratorType | nsIFontLoadCompleteCallbackType | nsIForcePendingChannelType | nsIFormAutoCompleteType | nsIFormAutoCompleteObserverType | nsIFormFillControllerType | nsIFormPOSTActionChannelType | nsIUploadChannelType | nsIFormatConverterType | nsIGIOMimeAppType | nsIHandlerAppType | nsIGIOServiceType | nsIGNOMEShellServiceType | nsIShellServiceType | nsIGSettingsCollectionType | nsIGSettingsServiceType | nsIGeolocationUpdateType | nsIGeolocationProviderType | nsIGfxInfoType | nsIGfxInfoDebugType | nsIGleanBooleanType | nsIGleanDatetimeType | nsIGleanCounterType | nsIGleanTimingDistributionType | nsIGleanMemoryDistributionType | nsIGleanCustomDistributionType | nsIGleanPingTestCallbackType | nsIGleanPingType | nsIGleanStringType | nsIGleanStringListType | nsIGleanTimespanType | nsIGleanUuidType | nsIGleanEventType | nsIGleanQuantityType | nsIGleanDenominatorType | nsIGleanNumeratorType | nsIGleanRateType | nsIGleanUrlType | nsIGleanTextType | nsIGtkTaskbarProgressType | nsITaskbarProgressType | nsIHTMLAbsPosEditorType | nsIHTMLEditorType | nsIHTMLInlineTableEditorType | nsIHTMLObjectResizerType | nsIHandlerServiceType | nsIHangDetailsType | nsIHangReportType | nsIHapticFeedbackType | nsIHelperAppLauncherDialogType | nsIHttpActivityObserverType | nsIHttpActivityDistributorType | nsIHttpAuthManagerType | nsIHttpAuthenticableChannelType | nsIProxiedChannelType | nsIHttpAuthenticatorType | nsIHttpAuthenticatorCallbackType | nsIHttpChannelType | nsIHttpChannelAuthProviderType | nsIHttpChannelChildType | nsIHttpUpgradeListenerType | nsIHttpChannelInternalType | nsIHttpHeaderVisitorType | nsIHttpProtocolHandlerType | nsIProxiedProtocolHandlerType | nsIHttpPushListenerType | nsIHttpServerType | nsIHttpServerStoppedCallbackType | nsIHttpServerIdentityType | nsIHttpRequestHandlerType | nsIHttpRequestType | nsIHttpResponseType | nsIHttpsOnlyModePermissionType | nsIIDBPermissionsRequestType | nsIIDNServiceType | nsIINIParserType | nsIINIParserWriterType | nsIINIParserFactoryType | nsIIOServiceType | nsIIOServiceInternalType | nsIIOUtilType | nsIMozIconURIType | nsIIdentityCredentialPromptServiceType | nsIIdentityCredentialStorageServiceType | nsIIdlePeriodType | nsIImageLoadingContentType | nsIIncrementalDownloadType | nsIIncrementalStreamLoaderObserverType | nsIIncrementalStreamLoaderType | nsIInlineSpellCheckerType | nsIInputListAutoCompleteType | nsIInputStreamChannelType | nsIInputStreamLengthType | nsIAsyncInputStreamLengthType | nsIInputStreamLengthCallbackType | nsIInputStreamPriorityType | nsIInputStreamPumpType | nsIInputStreamTeeType | nsIInterceptionInfoType | nsIInterfaceRequestorType | nsIJARChannelType | nsIJARURIType | nsIJARURIMutatorType | nsIJSInspectorType | nsIJumpListCommittedCallbackType | nsIJumpListBuilderType | nsIJumpListItemType | nsIJumpListSeparatorType | nsIJumpListLinkType | nsIJumpListShortcutType | nsIKeyValueServiceType | nsIKeyValueDatabaseType | nsIKeyValuePairType | nsIKeyValueEnumeratorType | nsIKeyValueDatabaseCallbackType | nsIKeyValueEnumeratorCallbackType | nsIKeyValuePairCallbackType | nsIKeyValueVariantCallbackType | nsIKeyValueVoidCallbackType | nsIKeychainMigrationUtilsType | nsILayoutDebuggingToolsType | nsILayoutHistoryStateType | nsILineInputStreamType | nsILoadContextType | nsILoadContextInfoType | nsILoadContextInfoFactoryType | nsILoadGroupType | nsILoadGroupChildType | nsILoadInfoType | nsILoadURIDelegateType | nsILocalFileMacType | nsILocalFileWinType | nsILocalStorageManagerType | nsILoginAutoCompleteSearchType | nsILoginDetectionServiceType | nsILoginInfoType | nsILoginSearchCallbackType | nsILoginManagerType | nsILoginManagerAuthPrompterType | nsILoginManagerCryptoType | nsILoginManagerPrompterType | nsILoginManagerStorageType | nsILoginMetaInfoType | nsILoginReputationVerdictTypeType | nsILoginReputationQueryType | nsILoginReputationQueryCallbackType | nsILoginReputationServiceType | nsIMIMEHeaderParamType | nsIHandlerInfoType | nsIMIMEInfoType | nsILocalHandlerAppType | nsIWebHandlerAppType | nsIDBusHandlerAppType | nsIMIMEInputStreamType | nsIMIMEServiceType | nsIMacAttributionServiceType | nsIMacDockSupportType | nsIMacFinderProgressCanceledCallbackType | nsIMacFinderProgressType | nsIMacPreferencesReaderType | nsIMacSharingServiceType | nsIMacShellServiceType | nsIMacUserActivityUpdaterType | nsITrashAppCallbackType | nsIMacWebAppUtilsType | nsIMarionetteType | nsIMediaDeviceType | nsIMediaManagerServiceType | nsIFinishDumpingCallbackType | nsIDumpGCAndCCLogsCallbackType | nsIMemoryInfoDumperType | nsIHandleReportCallbackType | nsIMemoryReporterType | nsIFinishReportingCallbackType | nsIHeapAllocatedCallbackType | nsIMemoryReporterManagerType | nsIMessageLoopType | nsIMessageSenderType | nsIInProcessContentFrameMessageManagerType | nsIMozBrowserFrameType | nsIMultiPartChannelType | nsIMultiPartChannelListenerType | nsIMultiplexInputStreamType | nsIMutableArrayType | nsINSSComponentType | nsINSSErrorsServiceType | nsINSSVersionType | nsINamedType | nsINamedPipeDataObserverType | nsINamedPipeServiceType | nsINativeAppSupportType | nsINativeDNSResolverOverrideType | nsINativeOSFileResultType | nsINativeOSFileSuccessCallbackType | nsINativeOSFileErrorCallbackType | nsINativeOSFileInternalsServiceType | nsINavBookmarksServiceType | nsINavHistoryResultNodeType | nsINavHistoryContainerResultNodeType | nsINavHistoryQueryResultNodeType | nsINavHistoryResultObserverType | nsINavHistoryResultType | nsINavHistoryQueryType | nsINavHistoryQueryOptionsType | nsINavHistoryServiceType | nsINestedURIType | nsINestedURIMutatorType | nsINestedAboutURIMutatorType | nsIJSURIMutatorType | nsINetAddrType | nsINetUtilType | nsINetworkConnectivityServiceType | nsIListNetworkAddressesListenerType | nsIGetHostnameListenerType | nsINetworkInfoServiceType | nsIInterceptedBodyCallbackType | nsIInterceptedChannelType | nsINetworkInterceptControllerType | nsINetworkLinkServiceType | nsINetworkPredictorType | nsINetworkPredictorVerifierType | nsINotificationStorageCallbackType | nsINotificationStorageType | nsINullChannelType | nsIOSFileConstantsServiceType | nsIOSKeyStoreType | nsIOSPermissionRequestType | nsIOSReauthenticatorType | nsIObjectInputStreamType | nsIObjectLoadingContentType | nsIObjectOutputStreamType | nsIObliviousHttpClientResponseType | nsIObliviousHttpClientRequestType | nsIObliviousHttpServerResponseType | nsIObliviousHttpServerType | nsIObliviousHttpType | nsIObliviousHttpServiceType | nsIObliviousHttpChannelType | nsIObserverType | nsIBrowsingContextReadyCallbackType | nsIOpenWindowInfoType | nsIPK11TokenType | nsIPK11TokenDBType | nsIPKCS11ModuleType | nsIPKCS11ModuleDBType | nsIPKCS11SlotType | nsIPageThumbsStorageServiceType | nsIPaperType | nsIPaperMarginType | nsIParentChannelType | nsIAsyncVerifyRedirectReadyCallbackType | nsIParentRedirectingChannelType | nsIParentalControlsServiceType | nsIParserUtilsType | nsIPartitioningExceptionListObserverType | nsIPartitioningExceptionListServiceType | nsIPaymentResponseDataType | nsIGeneralResponseDataType | nsIBasicCardResponseDataType | nsIPaymentActionResponseType | nsIPaymentCanMakeActionResponseType | nsIPaymentShowActionResponseType | nsIPaymentAbortActionResponseType | nsIPaymentCompleteActionResponseType | nsIMethodChangeDetailsType | nsIGeneralChangeDetailsType | nsIBasicCardChangeDetailsType | nsIPaymentAddressType | nsIPaymentMethodDataType | nsIPaymentCurrencyAmountType | nsIPaymentItemType | nsIPaymentDetailsModifierType | nsIPaymentShippingOptionType | nsIPaymentDetailsType | nsIPaymentOptionsType | nsIPaymentRequestType | nsIPaymentRequestServiceType | nsIPaymentUIServiceType | nsIPermissionType | nsIPermissionDelegateHandlerType | nsIPermissionManagerType | nsIPropertyElementType | nsIPersistentPropertiesType | nsIPipeType | nsISearchableInputStreamType | nsIPlacesPreviewsHelperServiceType | nsIPlatformInfoType | nsIPluginTagType | nsIFakePluginTagType | nsIPowerManagerServiceType | nsIPrefLocalizedStringType | nsISupportsStringType | nsIPrefStatsCallbackType | nsIPrefObserverType | nsIPrefetchServiceType | nsIPreloadedStyleSheetType | nsIPrincipalType | nsIExpandedPrincipalType | nsIPrintDialogServiceType | nsIPrintPreviewNavigationType | nsIPrintSettingsType | nsIPrintSettingsServiceType | nsIPrintSettingsWinType | nsIPrinterInfoType | nsIPrinterType | nsIPrinterListType | nsIPrivacyTransitionObserverType | nsIPrivateBrowsingChannelType | nsIProcessType | nsIProcessToolsServiceType | nsIProfileStartupType | nsIProfileMigratorType | nsIProfileUnlockerType | nsIProfilerStartParamsType | nsIProfilerType | nsIProgressEventSinkType | nsIPromptType | nsIPromptCollectionType | nsIPromptFactoryType | nsIPromptInstanceType | nsIPromptServiceType | nsIPropertyType | nsIPropertyBagType | nsIPropertyBag2Type | nsIProtectedAuthThreadType | nsIProtocolHandlerWithDynamicFlagsType | nsIProtocolProxyCallbackType | nsIProxyProtocolFilterResultType | nsIProtocolProxyFilterType | nsIProtocolProxyChannelFilterType | nsIProxyConfigChangedCallbackType | nsIProtocolProxyServiceType | nsIProtocolProxyService2Type | nsIProxyInfoType | nsIPublicKeyPinningServiceType | nsIPurgeTrackerServiceType | nsIPushErrorReporterType | nsIPushNotifierType | nsIPushDataType | nsIPushMessageType | nsIPushSubscriptionType | nsIPushSubscriptionCallbackType | nsIUnsubscribeResultCallbackType | nsIPushClearResultCallbackType | nsIPushServiceType | nsIPushQuotaManagerType | nsIQueryContentEventResultType | nsIQuotaUsageCallbackType | nsIQuotaCallbackType | nsIQuotaManagerServiceType | nsIQuotaRequestBaseType | nsIQuotaUsageRequestType | nsIQuotaRequestType | nsIQuotaFullOriginMetadataResultType | nsIQuotaUsageResultType | nsIQuotaOriginUsageResultType | nsIQuotaEstimateResultType | nsIRFPServiceType | nsIRaceCacheWithNetworkType | nsIRandomGeneratorType | nsIRddProcessTestType | nsIRedirectChannelRegistrarType | nsIRedirectHistoryEntryType | nsIRedirectResultListenerType | nsIReferrerInfoType | nsIReflowObserverType | nsIRefreshURIType | nsIRegionType | nsIRelativeFilePrefType | nsIRemoteAgentType | nsIRemoteTabType | nsIRequestTailUnblockCallbackType | nsIRequestContextType | nsIRequestContextServiceType | nsIRequestObserverProxyType | nsIResProtocolHandlerType | nsISubstitutingProtocolHandlerType | nsIResumableChannelType | nsIRunnableType | nsIRunnablePriorityType | nsIRunnableIPCMessageTypeType | nsISDBCallbackType | nsISDBCloseCallbackType | nsISDBConnectionType | nsISDBRequestType | nsISDBResultType | nsISHEntryType | nsISHistoryType | nsISHistoryListenerType | nsISafeOutputStreamType | nsIScreenType | nsIScreenManagerType | nsIScriptChannelType | nsIScriptErrorNoteType | nsIScriptErrorType | nsIScriptLoaderObserverType | nsIScriptSecurityManagerType | nsIScriptableBase64EncoderType | nsIScriptableContentIteratorType | nsIScriptableInputStreamType | nsIScriptableUnicodeConverterType | nsISearchSubmissionType | nsISearchEngineType | nsISearchParseSubmissionResultType | nsISearchServiceType | nsISecCheckWrapChannelType | nsISecretDecoderRingType | nsISecureBrowserUIType | nsISecurityConsoleMessageType | nsISecurityUITelemetryType | nsISelectionControllerType | nsISelectionDisplayType | nsISelectionListenerType | nsISensitiveInfoHiddenURIType | nsISerialEventTargetType | nsISerializationHelperType | nsIServerSocketType | nsIServerSocketListenerType | nsIServiceManagerType | nsIServiceWorkerUnregisterCallbackType | nsIServiceWorkerInfoType | nsIServiceWorkerRegistrationInfoListenerType | nsIServiceWorkerRegistrationInfoType | nsIServiceWorkerManagerListenerType | nsIServiceWorkerManagerType | nsISessionStorageServiceType | nsISessionStoreRestoreDataType | nsISharePickerType | nsISharingHandlerAppType | nsIJSEnumeratorType | nsISimpleStreamListenerType | nsISimpleURIMutatorType | nsISiteSecurityServiceType | nsISlowScriptDebugCallbackType | nsISlowScriptDebuggerStartupCallbackType | nsISlowScriptDebugRemoteCallbackType | nsISlowScriptDebugType | nsISocketFilterType | nsISocketFilterHandlerType | nsISocketProviderType | nsISocketProviderServiceType | nsISocketTransportType | nsITransportType | nsISTSShutdownObserverType | nsISocketTransportServiceType | nsIRoutedSocketTransportServiceType | nsISoundType | nsISpeculativeConnectType | nsISpeculativeConnectionOverriderType | nsISpeechGrammarCompilationCallbackType | nsISpeechRecognitionServiceType | nsISpeechTaskCallbackType | nsISpeechTaskType | nsISpeechServiceType | nsIStandaloneNativeMenuType | nsIStandardURLType | nsIStandardURLMutatorType | nsIStartupCacheInfoType | nsIStorageActivityServiceType | nsIStorageStreamType | nsIStreamBufferAccessType | nsIStreamConverterServiceType | nsIStreamListenerTeeType | nsIStreamLoaderObserverType | nsIStreamLoaderType | nsIStreamTransportServiceType | nsIInputAvailableCallbackType | nsIStringBundleType | nsIStringBundleServiceType | nsIStringEnumeratorBaseType | nsIStringEnumeratorType | nsIUTF8StringEnumeratorType | nsIStringInputStreamType | nsIStructuredCloneContainerType | nsISFVBareItemType | nsISFVIntegerType | nsISFVStringType | nsISFVBoolType | nsISFVDecimalType | nsISFVTokenType | nsISFVByteSeqType | nsISFVParamsType | nsISFVParametrizableType | nsISFVItemOrInnerListType | nsISFVSerializeType | nsISFVItemType | nsISFVInnerListType | nsISFVListType | nsISFVDictionaryType | nsISFVServiceType | nsIStyleSheetServiceType | nsIOutputIteratorType | nsIInputIteratorType | nsIForwardIteratorType | nsIBidirectionalIteratorType | nsIRandomAccessIteratorType | nsISupportsIDType | nsISupportsPRBoolType | nsISupportsPRUint8Type | nsISupportsPRUint16Type | nsISupportsPRUint32Type | nsISupportsPRUint64Type | nsISupportsPRTimeType | nsISupportsCharType | nsISupportsPRInt16Type | nsISupportsPRInt32Type | nsISupportsPRInt64Type | nsISupportsFloatType | nsISupportsDoubleType | nsISupportsInterfacePointerType | nsISupportsPriorityType | nsISyncStreamListenerType | nsISynthVoiceRegistryType | nsISystemInfoType | nsISystemProxySettingsType | nsISystemStatusBarType | nsITCPSocketCallbackType | nsITLSServerSocketType | nsITLSClientStatusType | nsITLSServerConnectionInfoType | nsITLSServerSecurityObserverType | nsITLSSocketControlType | nsITRRSkipReasonType | nsITXTToHTMLConvType | nsITableEditorType | nsITaggingServiceType | nsITaskbarOverlayIconControllerType | nsITaskbarPreviewType | nsITaskbarPreviewButtonType | nsITaskbarPreviewCallbackType | nsITaskbarPreviewControllerType | nsITaskbarTabPreviewType | nsITaskbarWindowPreviewType | nsIFetchTelemetryDataCallbackType | nsITelemetryType | nsITextInputProcessorType | nsITextInputProcessorNotificationType | nsITextInputProcessorCallbackType | nsITextToSubURIType | nsIThreadType | nsIThreadInternalType | nsIThreadObserverType | nsINestedEventLoopConditionType | nsIThreadManagerType | nsIThreadPoolListenerType | nsIThreadPoolType | nsIThreadRetargetableRequestType | nsIThreadRetargetableStreamListenerType | nsIThreadShutdownType | nsIInputChannelThrottleQueueType | nsIThrottledInputChannelType | nsIServerTimingType | nsITimedChannelType | nsITimerCallbackType | nsITimerType | nsITimerManagerType | nsITlsHandshakeCallbackListenerType | nsITokenDialogsType | nsITokenPasswordDialogsType | nsIToolkitChromeRegistryType | nsIProfileLockType | nsIToolkitProfileType | nsIToolkitProfileServiceType | nsIToolkitShellServiceType | nsITooltipListenerType | nsITooltipTextProviderType | nsITouchBarHelperType | nsITouchBarInputCallbackType | nsITouchBarInputType | nsITouchBarUpdaterType | nsITraceableChannelType | nsITrackingDBServiceType | nsITransactionType | nsITransactionManagerType | nsITransferType | nsIWebProgressListener2Type | nsIWebProgressListenerType | nsIFlavorDataProviderType | nsITransferableType | nsITransportEventSinkType | nsITransportProviderType | nsITransportSecurityInfoType | nsITreeSelectionType | nsINativeTreeSelectionType | nsITypeAheadFindType | nsIU2FTokenManagerType | nsIUDPSocketType | nsIUDPSocketListenerType | nsIUDPMessageType | nsIUDPSocketSyncListenerType | nsIUDPSocketInternalType | nsIURIClassifierCallbackType | nsIURIClassifierType | nsIURIContentListenerType | nsIURIFixupInfoType | nsIURIFixupType | nsIURILoaderType | nsIURISetSpecType | nsIURISettersType | nsIURIMutatorType | nsIURIWithSpecialOriginType | nsIURLMutatorType | nsIURLDecorationAnnotationsServiceType | nsIURLFormatterType | nsIURLParserType | nsIURLQueryStringStripperType | nsIURLQueryStrippingListObserverType | nsIURLQueryStrippingListServiceType | nsIUUIDGeneratorType | nsIUnicharLineInputStreamType | nsIUpdatePatchType | nsIUpdateType | nsIUpdateCheckResultType | nsIUpdateCheckType | nsIUpdateCheckerType | nsIApplicationUpdateServiceType | nsIUpdateProcessorType | nsIUpdateSyncManagerType | nsIUpdateManagerType | nsIUpdateTimerManagerType | nsIUploadChannel2Type | nsIUrlClassifierCallbackType | nsIUrlClassifierUpdateObserverType | nsIUrlClassifierDBServiceType | nsIUrlClassifierLookupCallbackType | nsIUrlClassifierClassifyCallbackType | nsIUrlClassifierExceptionListObserverType | nsIUrlClassifierExceptionListServiceType | nsIUrlClassifierFeatureType | nsIUrlClassifierFeatureResultType | nsIUrlClassifierFeatureCallbackType | nsIFullHashMatchType | nsIUrlClassifierHashCompleterCallbackType | nsIUrlClassifierHashCompleterType | nsIUrlClassifierPositiveCacheEntryType | nsIUrlClassifierCacheEntryType | nsIUrlClassifierCacheInfoType | nsIUrlClassifierGetCacheCallbackType | nsIUrlClassifierInfoType | nsIUrlClassifierPrefixSetType | nsIUrlClassifierRemoteSettingsServiceType | nsIUrlClassifierStreamUpdaterType | nsIUrlClassifierParseFindFullHashCallbackType | nsIUrlClassifierUtilsType | nsIUrlListManagerType | nsIUserIdleServiceType | nsIUserIdleServiceInternalType | nsIUtilityProcessTestType | nsIVariantType | nsIWritableVariantType | nsIVersionComparatorType | nsIViewSourceChannelType | nsIWakeLockType | nsIWeakReferenceType | nsISupportsWeakReferenceType | nsIWebAuthnRegisterArgsType | nsIWebAuthnSignArgsType | nsIWebAuthnAttObjType | nsICtapRegisterArgsType | nsICtapSignArgsType | nsICtapRegisterResultType | nsICtapSignResultType | nsIWebAuthnControllerType | nsICredentialParametersType | nsIWebAuthnTransportType | nsIWebAuthnRegisterPromiseType | nsIWebAuthnSignPromiseType | nsIWebAuthnRegisterResultType | nsIWebAuthnSignResultType | nsIWebAuthnServiceType | nsIWebBrowserType | nsIWebBrowserChromeType | nsIWebBrowserChromeFocusType | nsIWebBrowserFindType | nsIWebBrowserFindInFramesType | nsIWebBrowserPersistType | nsIWebBrowserPersistURIMapType | nsIWebBrowserPersistDocumentType | nsIWebBrowserPersistResourceVisitorType | nsIWebBrowserPersistWriteCompletionType | nsIWebBrowserPersistDocumentReceiverType | nsIWebBrowserPrintType | nsIWebNavigationType | nsIWebNavigationInfoType | nsIWebPageDescriptorType | nsIWebProgressType | nsIWebProtocolHandlerRegistrarType | nsIWebSocketChannelType | nsIWebSocketFrameType | nsIWebSocketEventListenerType | nsIWebSocketEventServiceType | nsIWebSocketImplType | nsIWebSocketListenerType | nsIWebTransportType | WebTransportSessionEventListenerType | nsIWebTransportStreamCallbackType | nsIWebTransportSendStreamStatsType | nsIWebTransportReceiveStreamStatsType | nsIWebTransportStreamStatsCallbackType | nsIWebTransportReceiveStreamType | nsIWebTransportSendStreamType | nsIWebTransportBidirectionalStreamType | nsIWebVTTListenerType | nsIWebVTTParserWrapperType | nsIWellKnownOpportunisticUtilsType | nsIWifiAccessPointType | nsIWifiListenerType | nsIWifiMonitorType | nsIWinAppHelperType | nsIWinTaskSchedulerServiceType | nsIWinTaskbarType | nsIWindowCreatorType | nsIWindowMediatorListenerType | nsIWindowProviderType | nsIWindowWatcherType | nsIWindowlessBrowserType | nsIWindowsAlertsServiceType | nsIWindowsPackageManagerType | nsIWindowsRegKeyType | nsIWindowsShellServiceType | nsIWindowsUIUtilsType | nsIWorkerChannelLoadInfoType | nsIWorkerChannelInfoType | nsIWorkerDebuggerListenerType | nsIWorkerDebuggerType | nsIWorkerDebuggerManagerListenerType | nsIWorkerDebuggerManagerType | nsIWritablePropertyBagType | nsIWritablePropertyBag2Type | nsIX509CertType | nsIOpenSignedAppFileCallbackType | nsIAsyncBoolCallbackType | nsICertVerificationCallbackType | nsIX509CertDBType | nsIX509CertValidityType | nsIXPCScriptableType | nsIXREDirProviderType | nsIXULAppInfoType | nsIXULBrowserWindowType | nsIXULRuntimeType | nsIXULStoreType | nsIZipEntryType | nsIZipReaderType | nsIZipReaderCacheType | nsIZipWriterType | nsPIDNSServiceType | nsPIPromptServiceType | nsPISocketTransportServiceType | nsPIWidgetCocoaType | nsPIWindowWatcherType | txIEXSLTFunctionsType | xpcIJSWeakReferenceType | nsIXPCComponents_InterfacesType | nsIXPCComponents_ClassesType | nsIXPCComponents_ResultsType | nsIXPCComponents_IDType | nsIXPCComponents_ExceptionType | nsIXPCComponents_ConstructorType | nsIXPCComponents_utils_SandboxType | nsIScheduledGCCallbackType | nsIXPCComponents_UtilsType | nsIXPCComponentsType | nsIXPCTestObjectReadOnlyType | nsIXPCTestObjectReadWriteType | nsIXPCTestBug809674Type | nsIXPCTestCEnumsType | nsIXPCTestESMReturnCodeParentType | nsIXPCTestESMReturnCodeChildType | nsIXPCTestInterfaceAType | nsIXPCTestInterfaceBType | nsIXPCTestInterfaceCType | nsIXPCTestParamsType | nsIXPCTestReturnCodeParentType | nsIXPCTestReturnCodeChildType | nsIXPCTestFunctionInterfaceType | nsIXPCTestUtilsType;
    /**
     * Serialize principal data.
     *
     * @param {nsIPrincipal} principal The principal to serialize.
     * @return {String} The serialized principal data.
     */
    export function serializePrincipal(principal: nsIPrincipal): string;
    /**
     * Deserialize a principal (serialized with serializePrincipal).
     *
     * @param {String} serializedPincipal A serialized principal.
     * @return {nsIPrincipal} A deserialized principal.
     */
    export function deserializePrincipal(serializedPincipal: string, fallbackPrincipalCallback?: any): nsIPrincipal;
    /**
     * Serialize cookieJarSettings.
     *
     * @param {nsICookieJarSettings} cookieJarSettings The cookieJarSettings to
     *   serialize.
     * @return {String} The base64 encoded cookieJarSettings data.
     */
    export function serializeCookieJarSettings(cookieJarSettings: nsICookieJarSettings): string;
    /**
     * Deserialize a base64 encoded cookieJarSettings
     *
     * @param {String} cookieJarSettings_b64 A base64 encoded serialized cookieJarSettings.
     * @return {nsICookieJarSettings} A deserialized cookieJarSettings.
     */
    export function deserializeCookieJarSettings(cookieJarSettings_b64: string): nsICookieJarSettings;
    export function wrapHandlingUserInput(aWindow: any, aIsHandling: any, aCallback: any): void;
    /**
     * Serialize referrerInfo.
     *
     * @param {nsIReferrerInfo} The referrerInfo to serialize.
     * @return {String} The base64 encoded referrerInfo.
     */
    export function serializeReferrerInfo(referrerInfo: any): string;
    /**
     * Deserialize a base64 encoded referrerInfo
     *
     * @param {String} referrerInfo_b64 A base64 encoded serialized referrerInfo.
     * @return {nsIReferrerInfo} A deserialized referrerInfo.
     */
    export function deserializeReferrerInfo(referrerInfo_b64: string): nsIReferrerInfo;
    /**
     * Returns the pids for a remote browser and its remote subframes.
     */
    export function getBrowserPids(aBrowser: any, aRemoteSubframes: any): any[];
    /**
     * The suffix after a `=` in a remoteType is dynamic, and used to control the
     * process pool to use. The C++ version of this method is mozilla::dom::RemoteTypePrefix().
     */
    export function remoteTypePrefix(aRemoteType: any): any;
    /**
     * There are various types of remote types that are for web content processes, but
     * they all start with "web". The C++ version of this method is
     * mozilla::dom::IsWebRemoteType().
     */
    export function isWebRemoteType(aRemoteType: any): any;
    /**
     * Assemble or predict originAttributes from available arguments.
     * @param {object} options
     * @param {Window} [options.window]
     * @param {*} [options.browser]
     * @param {number} [options.userContextId]
     * @param {string} [options.geckoViewSessionContextId]
     * @param {number} [options.privateBrowsingId]
     */
    export function predictOriginAttributes({ window, browser, userContextId, geckoViewSessionContextId, privateBrowsingId, }: {
        window?: Window;
        browser?: any;
        userContextId?: number;
        geckoViewSessionContextId?: string;
        privateBrowsingId?: number;
    }): any;
}
declare const DEFAULT_REMOTE_TYPE: "web";
declare const NOT_REMOTE: any;
declare const WEB_REMOTE_TYPE: "web";
declare const WEB_REMOTE_COOP_COEP_TYPE_PREFIX: "webCOOP+COEP=";
declare const FILE_REMOTE_TYPE: "file";
declare const EXTENSION_REMOTE_TYPE: "extension";
declare const PRIVILEGEDABOUT_REMOTE_TYPE: "privilegedabout";
declare const PRIVILEGEDMOZILLA_REMOTE_TYPE: "privilegedmozilla";
declare const FISSION_WEB_REMOTE_TYPE: "webIsolated";
declare const SERVICEWORKER_REMOTE_TYPE: "webServiceWorker";
declare const STANDARD_SAFE_PROTOCOLS: string[];
export {};
}