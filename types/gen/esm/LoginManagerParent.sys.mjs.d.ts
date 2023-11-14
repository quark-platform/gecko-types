declare module "resource://gre/modules/LoginManagerParent.sys.mjs" {
    export class LoginManagerParent extends JSWindowActorParent {
        setListenerForTests(listener?);
        get _recipeManager();
        getGeneratedPasswordsByPrincipalOrigin();
        getRootBrowser();
        searchAndDedupeLogins(formOrigin?, param1?);
        receiveMessage(msg?);
        decreaseSuggestImportCount(count?);
        fillForm(param0?);
        sendLoginDataToChild(formOrigin?, actionOrigin?, param2?);
        doAutocompleteSearch(formOrigin?, param1?);
        get _browsingContextGlobal();
        useBrowsingContext(param0?);
        getBrowsingContextToUse();
        getGeneratedPassword(param0?);
        maybeRecordPasswordGenerationShownTelemetryEvent(autocompleteResults?);
        _getPrompter();
        showDoorhanger(browser?, formOrigin?, param2?);
        _onPasswordEditedOrGenerated(browser?, formOrigin?, param2?);
        get recipeParentPromise();
        possibleValues;
    }
}