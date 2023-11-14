declare module "resource://app/modules/TabsList.sys.mjs" {
    export class TabsPanel extends TabsListBase {
        constructor(opts);
        handleEvent(event?);
        _populate(event?);
        _selectTab(tab?);
        _setupListeners();
        _cleanupListeners();
        _createRow(tab?);
        _setRowAttributes(row?, tab?);
        _setImageAttributes(row?, tab?);
        _onDragStart(event?);
        _getTargetRowFromEvent(event?);
        _isMovingTabs(event?);
        _onDragOver(event?);
        _getRowIndex(row?);
        _onDrop(event?);
        _onDragLeave(event?);
        _onDragEnd(event?);
        _updateDropTarget(event?);
        _setDropTarget(row?, direction?);
        _clearDropTarget();
        _onClick(event?);
    }
}