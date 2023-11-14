declare module "resource://app/modules/UrlbarSearchOneOffs.sys.mjs" {
    import type { SearchOneOffs } from "resource://app/modules/SearchOneOffs.sys.mjs";
    export class UrlbarSearchOneOffs extends SearchOneOffs {
        constructor(view);
        get localButtons();
        updateWebEngines(engines?);
        enable(enable?);
        onViewOpen();
        onViewClose();
        get hasView();
        get isViewOpen();
        set selectedButton(button);
        get selectedButton();
        get selectedViewIndex();
        set selectedViewIndex(val);
        closeView();
        handleSearchCommand(event?, searchMode?);
        setTooltipForEngineButton(button?);
        willHide();
        onPrefChanged(changedPref?);
        _getAddEngines();
        _rebuildEngineList(engines?, addEngines?);
        _on_click(event?);
        _on_contextmenu(event?);
    }
}