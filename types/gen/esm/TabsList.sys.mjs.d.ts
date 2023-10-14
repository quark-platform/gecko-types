declare module "resource://app/modules/TabsList.sys.mjs" {
    export class TabsPanel {
        constructor(opts);
        handleEvent();
        _populate();
        _selectTab();
        _setupListeners();
        _cleanupListeners();
        _createRow();
        _setRowAttributes();
        _setImageAttributes();
        _onDragStart();
        _getTargetRowFromEvent();
        _isMovingTabs();
        _onDragOver();
        _getRowIndex();
        _onDrop();
        _onDragLeave();
        _onDragEnd();
        _updateDropTarget();
        _setDropTarget();
        _clearDropTarget();
        _onClick();
    }
}