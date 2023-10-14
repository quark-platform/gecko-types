declare module "resource://gre/modules/FormAutoComplete.sys.mjs" {
    export class FormHistoryClient {
        constructor();
        getActor();
        requestAutoCompleteResults();
        handleAutoCompleteResults();
        cancel();
        remove();
        receiveMessage();
    }
    export class FormAutoCompleteResult {
        constructor(client, entries, fieldName, searchString);
        set fixedEntries(value);
        canSearchIncrementally();
        incrementalSearch();
        removeDuplicateHistoryEntries();
        getAt();
        get wrappedJSObject();
        get defaultIndex();
        get searchResult();
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
    export class FormAutoComplete {
        constructor();
        get wrappedJSObject();
        log();
        autoCompleteSearchAsync();
        getScenarioName();
        getDataListSuggestions();
        stopAutoCompleteSearch();
        getAutoCompleteValues();
        observe();
        sendFillRequestToFormHistoryParent();
    }
}