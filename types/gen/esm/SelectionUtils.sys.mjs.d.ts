declare module "resource://gre/modules/SelectionUtils.sys.mjs" {
    var SelectionUtils: {
        trimSelection(aSelection, aMaxLen);
        getSelectionDetails(aTopWindow, aCharLen);
    };
}