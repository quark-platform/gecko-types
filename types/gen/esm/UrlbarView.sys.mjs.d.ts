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
        getResultFromElement();
        getResultAtIndex();
        resultIsSelected();
        selectBy();
        removeAccessibleFocus();
        clear();
        close();
        autoOpen();
        onQueryStarted();
        onQueryCancelled();
        onQueryFinished();
        onQueryResults();
        onQueryResultRemoved();
        openResultMenu();
        handleEvent();
        addDynamicViewTemplate();
        removeDynamicViewTemplate();
        on_SelectedOneOffButtonChanged();
        on_blur();
        on_mousedown();
        on_mouseup();
        on_overflow();
        on_underflow();
        on_resize();
        on_command();
        on_popupshowing();
    }
}