declare module "resource://gre/modules/PlacesTransactions.sys.mjs" {
    var PlacesTransactions: {
        batch(transactionsToBatch?);
        undo();
        redo();
        clearTransactionsHistory(undoEntries?, redoEntries?);
        get length(): any;
        entry(index?);
        get undoPosition(): any;
        get topUndoEntry(): any;
        get topRedoEntry(): any;
    };
}