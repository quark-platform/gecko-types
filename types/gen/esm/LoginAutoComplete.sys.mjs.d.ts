declare module "resource://gre/modules/LoginAutoComplete.sys.mjs" {
    export class LoginAutoCompleteResult {
        constructor(aSearchString, matchingLogins, autocompleteItems, formOrigin);
        get logins();
        get wrappedJSObject();
        get matchCount();
        getValueAt();
        getLabelAt();
        getCommentAt();
        getStyleAt();
        getImageAt();
        getFinalCompleteValueAt();
        isRemovableAt();
        removeValueAt();
    }
    export class LoginAutoComplete {
        startSearch();
        stopSearch();
        isProbablyANewPasswordField();
    }
}