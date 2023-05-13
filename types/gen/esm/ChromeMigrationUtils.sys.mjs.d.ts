declare module "resource://app/modules/ChromeMigrationUtils.sys.mjs" {
    var ChromeMigrationUtils: {
        CONTEXTUAL_LOGIN_IMPORT_BROWSERS;
        _extensionVersionDirectoryNames: {};
        _extensionLocaleStrings: {};
        get supportsLoginsForPlatform(): any;
        getExtensionList(profileId);
        getExtensionInformation(extensionId, profileId);
        _getLocaleString(key, locale, extensionId, profileId);
        isExtensionInstalled(extensionId, profileId);
        getLastUsedProfileId();
        getLocalState();
        getExtensionPath(profileId);
        getDataPath();
        _getSortedByVersionSubDirectoryNames(path);
        chromeTimeToDate(aTime, aFallbackValue);
        dateToChromeTime(aDate);
        _importableLoginsCache;
        getImportableLogins(formOrigin);
    };
}