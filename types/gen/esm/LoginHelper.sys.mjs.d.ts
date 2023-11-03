declare module "resource://gre/modules/LoginHelper.sys.mjs" {
    export class ParentAutocompleteOption {
        constructor(icon, title, subtitle, fillMessageName, fillMessageData);
    }
    var LoginHelper: {
        debug;
        enabled;
        storageEnabled;
        formlessCaptureEnabled;
        formRemovalCaptureEnabled;
        generationAvailable;
        generationConfidenceThreshold;
        generationEnabled;
        improvedPasswordRulesEnabled;
        improvedPasswordRulesCollection;
        includeOtherSubdomainsInLookup;
        insecureAutofill;
        privateBrowsingCaptureEnabled;
        remoteRecipesEnabled;
        remoteRecipesCollection;
        relatedRealmsEnabled;
        relatedRealmsCollection;
        schemeUpgrades;
        showAutoCompleteFooter;
        showAutoCompleteImport;
        signupDectectionConfidenceThreshold;
        testOnlyUserHasInteractedWithDocument;
        userInputRequiredToCapture;
        captureInputChanges;
        init();
        updateSignonPrefs();
        createLogger(aLogPrefix?);
        checkOriginValue(aOrigin?);
        checkLoginValues(aLogin?);
        newPropertyBag(aProperties?);
        searchLoginsWithObject(aSearchOptions?);
        maybeGetHostPortForURL(aURL?);
        getLoginOrigin(uriString?, allowJS?);
        getFormActionOrigin(form?);
        isOriginMatching(aLoginOrigin?, aSearchOrigin?, aOptions?);
        doLoginsMatch(aLogin1?, aLogin2?, param2?);
        buildModifiedLogin(aOldStoredLogin?, aNewLoginData?);
        shadowHTTPLogins(logins?);
        getUniqueKeyForLogin(login?, uniqueKeys?);
        dedupeLogins(logins?, uniqueKeys?, resolveBy?, preferredOrigin?, preferredFormActionOrigin?);
        openPasswordManager(window?);
        isPasswordFieldType(element?);
        isUsernameFieldType(element?);
        isInferredLoginForm(formElement?);
        isInferredUsernameField(element?);
        isInferredNonUsernameField(element?);
        isInferredEmailField(element?);
        maybeImportLogins(loginDatas?);
        loginsToVanillaObjects(logins?);
        loginToVanillaObject(login?);
        vanillaObjectToLogin(login?);
        vanillaObjectsToLogins(vanillaObjects?);
        isPrimaryPasswordSet();
        requestReauth(browser?, OSReauthEnabled?, expirationTime?, messageText?, captionText?);
        notifyStorageChanged(changeType?, data?);
        isUserFacingLogin(login?);
        getAllUserFacingLogins();
        createLoginAlreadyExistsError(guid?);
        getBrowserForPrompt(browser?);
    };
    export class OptInFeature {
        constructor(offered, enabled, disabled, pref);
        get isAvailable();
        get isEnabled();
        get isDisabled();
        markAsAvailable();
        markAsOffered();
        markAsEnabled();
        markAsDisabled();
    }
}