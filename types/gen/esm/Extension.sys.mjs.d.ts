declare module "resource://gre/modules/Extension.sys.mjs" {
    var ExtensionProcessCrashObserver: {
        initialized;
        _appInForeground;
        _isAndroid;
        _processSpawningDisabled;
        currentProcessChildID;
        lastCrashedProcessChildID;
        QueryInterface;
        lastCrashTimestamps;
        init();
        uninit();
        observe(subject?, topic?, data?);
        enableProcessSpawning();
        get appInForeground(): any;
        get processSpawningDisabled(): any;
    };
    export class ExtensionData {
        constructor(rootURI, param1);
        constructAsync(param0?);
        getIsPrivileged(param0?);
        get builtinMessages();
        get logger();
        manifestError(message?);
        manifestWarning(message?);
        packagingError(message?);
        packagingWarning(message?);
        logWarning(message?);
        logError(message?);
        _logMessage(message?, severity?);
        ensureNoErrors();
        getURL(param0?);
        _readDirectory(path?, param1?);
        readJSON(path?);
        get restrictSchemes();
        permissionsObject(param0?, param1?);
        get manifestPermissions();
        getManifestOrigins();
        get manifestOptionalPermissions();
        get activePermissions();
        shouldPromptFor(permission?);
        comparePermissions(oldPermissions?, newPermissions?);
        intersectPermissions(oldPermissions?, newPermissions?);
        migratePermissions(id?, oldPermissions?, oldOptionalPermissions?, newPermissions?, newOptionalPermissions?);
        canUseAPIExperiment();
        canUseThemeExperiment();
        get manifestVersion();
        get persistentBackground();
        set backgroundState(state);
        get backgroundState();
        getExtensionVersionWithoutValidation();
        getLocalizedManifest(locale?);
        _getNormalizedManifest(locale?);
        initializeAddonTypeAndID();
        parseManifest();
        loadManifest();
        hasPermission(perm?, param1?);
        getAPIManager();
        localizeMessage(param0?);
        localize(str?, locale?);
        get defaultLocale();
        get isAppProvided();
        get isHidden();
        normalizeLocaleCode(locale?);
        readLocaleFile(locale?);
        _promiseLocaleMap();
        _setupLocaleData(locales?);
        promiseLocales();
        initAllLocales();
        initLocale(param0?);
        isAllSitesPermission(origin?);
        classifyOriginPermissions(param0?, param1?);
        formatPermissionStrings(param0?, param1?);
    }
    import type { ExtensionData } from "resource://gre/modules/Extension.sys.mjs";
    export class Extension extends ExtensionData {
        constructor(addonData, startupReason, updateReason);
        set state(startupState);
        get state();
        addStartupStatePromise(name?, fn?);
        getBootstrapScope();
        get browsingContextGroupId();
        get groupFrameLoader();
        get backgroundContext();
        on(hook?, f?);
        off(hook?, f?);
        once(hook?, f?);
        emit(event?, param1?);
        receiveMessage(param0?);
        testMessage(param0?);
        createPrincipal(param0?, param1?);
        isExtensionURL(url?);
        checkLoadURI(uri?, param1?);
        checkLoadURL(url?, param1?);
        promiseLocales(locale?);
        readLocaleFile(locale?);
        get manifestCacheKey();
        get temporarilyInstalled();
        saveStartupData();
        parseManifest();
        cachePermissions();
        loadManifest();
        get extensionPageCSP();
        get backgroundScripts();
        get backgroundTypeModule();
        get backgroundWorkerScript();
        get optionalPermissions();
        get privateBrowsingAllowed();
        canAccessWindow(window?);
        canAccessContainer(userContextId?);
        serialize();
        serializeExtended();
        broadcast(msg?, data?);
        setSharedData(key?, value?);
        getSharedData(key?, value?);
        initSharedData();
        updateContentScripts();
        runManifest(manifest?);
        callOnClose(obj?);
        forgetOnClose(obj?);
        get builtinMessages();
        initLocale(param0?);
        clearCache(reason?);
        updatePermissions(reason?);
        startup();
        _setupStartupPermissions();
        cleanupGeneratedFile();
        shutdown(reason?);
        observe(subject?, topic?, data?);
        get name();
        get optionalOrigins();
        get hasBrowserActionUI();
        getPreferredIcon(param0?);
    }
    import type { ExtensionData } from "resource://gre/modules/Extension.sys.mjs";
    export class Dictionary extends ExtensionData {
        constructor(addonData, startupReason);
        getBootstrapScope();
        startup(reason?);
        shutdown(reason?);
    }
    import type { ExtensionData } from "resource://gre/modules/Extension.sys.mjs";
    export class Langpack extends ExtensionData {
        constructor(addonData, startupReason);
        getBootstrapScope();
        promiseLocales(locale?);
        parseManifest();
        startup(reason?);
        shutdown(reason?);
    }
    import type { ExtensionData } from "resource://gre/modules/Extension.sys.mjs";
    export class SitePermission extends ExtensionData {
        constructor(addonData, startupReason);
        loadManifest();
        getBootstrapScope();
        getSupportedPrincipals();
        startup(reason?);
        shutdown(reason?);
    }
}