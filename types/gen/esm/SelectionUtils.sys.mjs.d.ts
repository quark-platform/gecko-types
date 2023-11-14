declare module "resource://gre/modules/SelectionUtils.sys.mjs" {
    export var SelectionUtils: {
        trimSelection(aSelection?, aMaxLen?);
        getSelectionDetails(aTopWindow?, aCharLen?);
    };
}