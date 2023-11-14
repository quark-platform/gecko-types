declare module "resource://gre/modules/LoginManagerParent.sys.mjs" {
    export class LoginManagerParent extends JSWindowActorParent {
        setListenerForTests(listener?);
        get _recipeManager();
        getGeneratedPasswordsByPrincipalOrigin();
        getRootBrowser();
        searchAndDedupeLogins(formOrigin?);
        receiveMessage(msg?);
        decreaseSuggestImportCount(count?);
        fillForm();
        sendLoginDataToChild(formOrigin?, actionOrigin?);
        doAutocompleteSearch(formOrigin?);
        get _browsingContextGlobal();
        useBrowsingContext();
        getBrowsingContextToUse();
        getGeneratedPassword();
        maybeRecordPasswordGenerationShownTelemetryEvent(autocompleteResults?);
        _getPrompter();
        showDoorhanger(browser?, formOrigin?);
        _onPasswordEditedOrGenerated(browser?, formOrigin?);
        get recipeParentPromise();
    }
}