declare module "resource://app/modules/UrlbarSearchOneOffs.sys.mjs" {
    import type { SearchOneOffs } from "resource://app/modules/SearchOneOffs.sys.mjs";
    export class UrlbarSearchOneOffs extends SearchOneOffs {
        constructor(view);
        get localButtons();
        updateWebEngines();
        enable();
        onViewOpen();
        onViewClose();
        get hasView();
        get isViewOpen();
        set selectedButton(button);
        get selectedButton();
        get selectedViewIndex();
        set selectedViewIndex(val);
        closeView();
        handleSearchCommand();
        setTooltipForEngineButton();
        willHide();
        onPrefChanged();
        _getAddEngines();
        _rebuildEngineList();
        _on_click();
        _on_contextmenu();
    }
}