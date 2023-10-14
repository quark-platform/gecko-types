declare module "resource://gre/modules/LoginManagerParent.sys.mjs" {
    export class LoginManagerParent {
        setListenerForTests();
        get _recipeManager();
        getGeneratedPasswordsByPrincipalOrigin();
        getRootBrowser();
        searchAndDedupeLogins();
        receiveMessage();
        decreaseSuggestImportCount();
        fillForm();
        sendLoginDataToChild();
        doAutocompleteSearch();
        get _browsingContextGlobal();
        useBrowsingContext();
        getBrowsingContextToUse();
        getGeneratedPassword();
        maybeRecordPasswordGenerationShownTelemetryEvent();
        _getPrompter();
        showDoorhanger();
        _onPasswordEditedOrGenerated();
        get recipeParentPromise();
    }
}