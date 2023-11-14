declare module "resource://gre/modules/LoginAutoComplete.sys.mjs" {
    export class LoginAutoCompleteResult {
        constructor(aSearchString, matchingLogins, autocompleteItems, formOrigin, param4);
        get logins();
        get wrappedJSObject();
        get matchCount();
        getValueAt(index?);
        getLabelAt(index?);
        getCommentAt(index?);
        getStyleAt(index?);
        getImageAt(index?);
        getFinalCompleteValueAt(index?);
        isRemovableAt(index?);
        removeValueAt(index?);
    }
    export class LoginAutoComplete {
        startSearch(aSearchString?, aPreviousResult?, aElement?, aCallback?);
        stopSearch();
        isProbablyANewPasswordField(inputElement?);
    }
}