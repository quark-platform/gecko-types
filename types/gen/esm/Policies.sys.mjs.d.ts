declare module "resource://app/modules/policies/Policies.sys.mjs" {
    var Policies: {
        _cleanup: {
            onBeforeAddons(manager);
            onProfileAfterChange(manager);
            onBeforeUIStartup(manager);
            onAllWindowsRestored(manager);
        };
        AllowedDomainsForApps: {
            onBeforeAddons(manager, param);
        };
        AppAutoUpdate: {
            onBeforeUIStartup(manager, param);
        };
        AppUpdatePin: {
            validate(param);
        };
        AppUpdateURL: {};
        Authentication: {
            onBeforeAddons(manager, param);
        };
        AutoLaunchProtocolsFromOrigins: {
            onBeforeAddons(manager, param);
        };
        BackgroundAppUpdate: {
            onBeforeAddons(manager, param);
        };
        BlockAboutAddons: {
            onBeforeUIStartup(manager, param);
        };
        BlockAboutConfig: {
            onBeforeUIStartup(manager, param);
        };
        BlockAboutProfiles: {
            onBeforeUIStartup(manager, param);
        };
        BlockAboutSupport: {
            onBeforeUIStartup(manager, param);
        };
        Bookmarks: {
            onAllWindowsRestored(manager, param);
        };
        CaptivePortal: {
            onBeforeAddons(manager, param);
        };
        Certificates: {
            onBeforeAddons(manager, param);
        };
        Cookies: {
            onBeforeUIStartup(manager, param);
        };
        DefaultDownloadDirectory: {
            onBeforeAddons(manager, param);
        };
        DisableAppUpdate: {
            onBeforeAddons(manager, param);
        };
        DisableBuiltinPDFViewer: {
            onBeforeAddons(manager, param);
        };
        DisabledCiphers: {
            onBeforeAddons(manager, param);
        };
        DisableDefaultBrowserAgent: {};
        DisableDeveloperTools: {
            onBeforeAddons(manager, param);
        };
        DisableFeedbackCommands: {
            onBeforeUIStartup(manager, param);
        };
        DisableFirefoxAccounts: {
            onBeforeAddons(manager, param);
        };
        DisableFirefoxScreenshots: {
            onBeforeAddons(manager, param);
        };
        DisableFirefoxStudies: {
            onBeforeAddons(manager, param);
        };
        DisableForgetButton: {
            onProfileAfterChange(manager, param);
        };
        DisableFormHistory: {
            onBeforeUIStartup(manager, param);
        };
        DisableMasterPasswordCreation: {
            onBeforeUIStartup(manager, param);
        };
        DisablePasswordReveal: {
            onBeforeUIStartup(manager, param);
        };
        DisablePocket: {
            onBeforeAddons(manager, param);
        };
        DisablePrivateBrowsing: {
            onBeforeAddons(manager, param);
        };
        DisableProfileImport: {
            onBeforeUIStartup(manager, param);
        };
        DisableProfileRefresh: {
            onBeforeUIStartup(manager, param);
        };
        DisableSafeMode: {
            onBeforeUIStartup(manager, param);
        };
        DisableSecurityBypass: {
            onBeforeUIStartup(manager, param);
        };
        DisableSetDesktopBackground: {
            onBeforeUIStartup(manager, param);
        };
        DisableSystemAddonUpdate: {
            onBeforeAddons(manager, param);
        };
        DisableTelemetry: {
            onBeforeAddons(manager, param);
        };
        DisableThirdPartyModuleBlocking: {
            onBeforeUIStartup(manager, param);
        };
        DisplayBookmarksToolbar: {
            onBeforeUIStartup(manager, param);
        };
        DisplayMenuBar: {
            onBeforeUIStartup(manager, param);
        };
        DNSOverHTTPS: {
            onBeforeAddons(manager, param);
        };
        DontCheckDefaultBrowser: {
            onBeforeUIStartup(manager, param);
        };
        DownloadDirectory: {
            onBeforeAddons(manager, param);
        };
        EnableTrackingProtection: {
            onBeforeUIStartup(manager, param);
        };
        EncryptedMediaExtensions: {
            onBeforeAddons(manager, param);
        };
        ExemptDomainFileTypePairsFromFileTypeDownloadWarnings: {};
        Extensions: {
            onBeforeUIStartup(manager, param);
        };
        ExtensionSettings: {
            onBeforeAddons(manager, param);
            onBeforeUIStartup(manager, param);
        };
        ExtensionUpdate: {
            onBeforeAddons(manager, param);
        };
        FirefoxHome: {
            onBeforeAddons(manager, param);
        };
        FlashPlugin: {
            onBeforeUIStartup(manager, param);
        };
        GoToIntranetSiteForSingleWordEntryInAddressBar: {
            onBeforeAddons(manager, param);
        };
        Handlers: {
            onBeforeAddons(manager, param);
        };
        HardwareAcceleration: {
            onBeforeAddons(manager, param);
        };
        Homepage: {
            onBeforeUIStartup(manager, param);
        };
        InstallAddonsPermission: {
            onBeforeUIStartup(manager, param);
        };
        LegacyProfiles: {};
        LegacySameSiteCookieBehaviorEnabled: {
            onBeforeAddons(manager, param);
        };
        LegacySameSiteCookieBehaviorEnabledForDomainList: {
            onBeforeAddons(manager, param);
        };
        LocalFileLinks: {
            onBeforeAddons(manager, param);
        };
        ManagedBookmarks: {};
        ManualAppUpdateOnly: {
            onBeforeAddons(manager, param);
        };
        NetworkPrediction: {
            onBeforeAddons(manager, param);
        };
        NewTabPage: {
            onBeforeAddons(manager, param);
        };
        NoDefaultBookmarks: {
            onProfileAfterChange(manager, param);
        };
        OfferToSaveLogins: {
            onBeforeUIStartup(manager, param);
        };
        OfferToSaveLoginsDefault: {
            onBeforeUIStartup(manager, param);
        };
        OverrideFirstRunPage: {
            onProfileAfterChange(manager, param);
        };
        OverridePostUpdatePage: {
            onProfileAfterChange(manager, param);
        };
        PasswordManagerEnabled: {
            onBeforeUIStartup(manager, param);
        };
        PasswordManagerExceptions: {
            onBeforeUIStartup(manager, param);
        };
        PDFjs: {
            onBeforeAddons(manager, param);
        };
        Permissions: {
            onBeforeUIStartup(manager, param);
        };
        PictureInPicture: {
            onBeforeAddons(manager, param);
        };
        PopupBlocking: {
            onBeforeUIStartup(manager, param);
        };
        Preferences: {
            onBeforeAddons(manager, param);
        };
        PrimaryPassword: {
            onAllWindowsRestored(manager, param);
        };
        PromptForDownloadLocation: {
            onBeforeAddons(manager, param);
        };
        Proxy: {
            onBeforeAddons(manager, param);
        };
        RequestedLocales: {
            onBeforeAddons(manager, param);
        };
        SanitizeOnShutdown: {
            onBeforeUIStartup(manager, param);
        };
        SearchBar: {
            onAllWindowsRestored(manager, param);
        };
        SearchEngines: {
            onBeforeUIStartup(manager, param);
            onAllWindowsRestored(manager, param);
        };
        SearchSuggestEnabled: {
            onBeforeAddons(manager, param);
        };
        SecurityDevices: {
            onProfileAfterChange(manager, param);
        };
        ShowHomeButton: {
            onBeforeAddons(manager, param);
            onAllWindowsRestored(manager, param);
        };
        SSLVersionMax: {
            onBeforeAddons(manager, param);
        };
        SSLVersionMin: {
            onBeforeAddons(manager, param);
        };
        StartDownloadsInTempDirectory: {
            onBeforeAddons(manager, param);
        };
        SupportMenu: {
            onProfileAfterChange(manager, param);
        };
        UserMessaging: {
            onBeforeAddons(manager, param);
        };
        UseSystemPrintDialog: {
            onBeforeAddons(manager, param);
        };
        WebsiteFilter: {
            onBeforeUIStartup(manager, param);
        };
        WindowsSSO: {
            onBeforeAddons(manager, param);
        };
    };
    function setAndLockPref(prefName, prefValue);
    var PoliciesUtils: {
        setDefaultPref(prefName, prefValue);
    };
    function runOnce(actionName, callback);
}