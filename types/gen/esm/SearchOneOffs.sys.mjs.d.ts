declare module "resource://app/modules/SearchOneOffs.sys.mjs" {
    export class SearchOneOffs {
        constructor(container);
        addEventListener();
        removeEventListener();
        dispatchEvent();
        getAttribute();
        hasAttribute();
        setAttribute();
        querySelector();
        handleEvent();
        willHide();
        invalidateCache();
        get buttonWidth();
        set popup(val);
        get popup();
        set textbox(val);
        get style();
        get textbox();
        set query(val);
        get query();
        set selectedButton(val);
        get selectedButton();
        set selectedButtonIndex(val);
        get selectedButtonIndex();
        getEngineInfo();
        observe();
        _getAddEngines();
        get _maxInlineAddEngines();
        _rebuild();
        __rebuild();
        _rebuildEngineList();
        _buttonIDForEngine();
        getSelectableButtons();
        _whereToOpen();
        advanceSelection();
        handleKeyDown();
        _handleKeyDown();
        eventTargetIsAOneOff();
        get hasView();
        get isViewOpen();
        get selectedViewIndex();
        set selectedViewIndex(val);
        closeView();
        handleSearchCommand();
        setTooltipForEngineButton();
        _on_mousedown();
        _on_click();
        _on_command();
        _on_contextmenu();
        _on_input();
        _on_popupshowing();
        _on_popuphidden();
    }
}