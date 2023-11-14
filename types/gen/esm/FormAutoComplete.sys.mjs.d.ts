declare module "resource://gre/modules/FormAutoComplete.sys.mjs" {
    export class FormHistoryClient {
        constructor();
        getActor();
        requestAutoCompleteResults(searchString?, params?, scenarioName?, callback?);
        handleAutoCompleteResults(results?, callback?);
        cancel();
        remove(value?, guid?);
        receiveMessage(msg?);
    }
    export class FormAutoCompleteResult {
        constructor(client, entries, fieldName, searchString);
        set fixedEntries(value);
        canSearchIncrementally(searchString?);
        incrementalSearch(searchString?);
        removeDuplicateHistoryEntries();
        getAt(index?);
        get wrappedJSObject();
        get defaultIndex();
        get searchResult();
        get matchCount();
        getValueAt(index?);
        getLabelAt(index?);
        getCommentAt(index?);
        getStyleAt(index?);
        getImageAt(_index?);
        getFinalCompleteValueAt(index?);
        isRemovableAt(index?);
        removeValueAt(index?);
    }
    export class FormAutoComplete {
        constructor();
        get wrappedJSObject();
        log(message?);
        autoCompleteSearchAsync(aInputName?, aUntrimmedSearchString?, aField?, aPreviousResult?, aAddDataList?, aListener?);
        getDataListSuggestions(aField?);
        stopAutoCompleteSearch();
        getAutoCompleteValues(client?, fieldname?, searchString?, scenarioName?, callback?);
        observe(subject?, topic?, data?);
        sendFillRequestToFormHistoryParent(input?, comment?);
    }
}