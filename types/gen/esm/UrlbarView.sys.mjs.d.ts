declare module "resource://app/modules/UrlbarView.sys.mjs" {
    export class UrlbarView {
        constructor(input);
        get oneOffSearchButtons();
        get isOpen();
        get allowEmptySelection();
        get selectedRowIndex();
        set selectedRowIndex(val);
        get selectedElementIndex();
        get selectedResult();
        get selectedElement();
        shouldSpaceActivateSelectedElement();
        clearSelection();
        get visibleRowCount();
        getResultFromElement(element?);
        getResultAtIndex(index?);
        resultIsSelected(result?);
        selectBy(amount?, param1?);
        acknowledgeFeedback(result?);
        removeAccessibleFocus();
        clear();
        close(param0?);
        autoOpen(param0?);
        onQueryStarted(queryContext?);
        onQueryCancelled(queryContext?);
        onQueryFinished(queryContext?);
        onQueryResults(queryContext?);
        onQueryResultRemoved(index?);
        openResultMenu(result?, anchor?);
        invalidateResultMenuCommands();
        handleEvent(event?);
        addDynamicViewTemplate(name?, viewTemplate?);
        removeDynamicViewTemplate(name?);
        on_SelectedOneOffButtonChanged();
        on_blur(event?);
        on_mousedown(event?);
        on_mouseup(event?);
        on_overflow(event?);
        on_underflow(event?);
        on_resize();
        on_command(event?);
        on_popupshowing(event?);
        onPrefChanged(pref?);
    }
}