declare module "resource://app/modules/PageActions.sys.mjs" {
    var PageActions: {
        init(addShutdownBlocker);
        _deferredAddActionCalls;
        get actions(): any;
        actionsInPanel(browserWindow);
        actionsInUrlbar(browserWindow);
        actionForID(id);
        addAction(action);
        _registerAction(action);
        _updateIDsPinnedToUrlbarForAction(action);
        _builtInActions;
        _nonBuiltInActions;
        _transientActions;
        _actionsByID;
        onActionRemoved(action);
        onActionToggledPinnedToUrlbar(action);
        _reset();
        _storePersistedActions();
        _loadPersistedActions();
        _purgeUnregisteredPersistedActions();
        _migratePersistedActions(actions);
        _migratePersistedActionsTo1(actions);
        _migratePersistedActionsProton(actions);
        _persistedActions: {
            version;
            ids;
            idsInUrlbar;
        };
    };
}